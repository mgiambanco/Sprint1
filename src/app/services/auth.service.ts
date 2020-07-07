import { Injectable } from '@angular/core';
import { AngularFireAuth } from "@angular/fire/auth";
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
	constructor(
		public afAuth: AngularFireAuth,
		private router: Router,
	) {

	}

	public isAuthenticated(): boolean {
		const email = sessionStorage.getItem('email');
		if (!email) {
			this.router.navigate(['login']);
			return false;
		}
		return true;
	}

	public firebaseLogin(email, password) {
		return this.afAuth.auth.signInWithEmailAndPassword(email, password)
			.then((result) => {
				this.router.navigate(['board']);
				this.funcSetAuthData(result.user);
			}).catch((error) => {
				window.alert(error.message)
			})
	}

	funcSetAuthData(data) {
		sessionStorage.setItem("email", data.email);
	}
}
import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
	selector: 'app-login',
	templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit, OnDestroy {
	email: string = "";
	password: string = "";

	constructor(
		private authService: AuthService
	) {

	}

	ngOnInit() {
		console.log("login");
	}

	ngOnDestroy() {

	}

	funcLogin() {
		this.authService.firebaseLogin(this.email, this.password);
	}
}
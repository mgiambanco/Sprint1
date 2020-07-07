import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
	selector: 'app-auth',
	templateUrl: './auth.component.html'
})
export class AuthComponent implements OnInit, OnDestroy {
	
	view: string = "login";

	constructor(

	) {

	}

	ngOnInit() {
		console.log("auth");
		this.view = "login";
	}

	ngOnDestroy() {

	}

	funcLogin() {
		this.view = "Login";
	}

	funcForgotPassword() {
		this.view = "forgot";

	}

	funcRegister() {
		this.view = "register";

	}
}
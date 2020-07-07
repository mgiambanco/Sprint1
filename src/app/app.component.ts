import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
	selector: 'app-root',
	templateUrl: './app.component.html'
})
export class AppComponent implements OnInit {
	mainMenu: any[] = [];
	constructor(
		private router: Router
	) {

	}

	ngOnInit() {
		localStorage.setItem("company", '1111');
	}

	funcToggleMainMenu(menu, event) {
		this.mainMenu = [
			{ label: 'Admin Settings', command: () => { this.router.navigateByUrl('/settings'); } },
			{ label: 'My Settings', command: () => { this.router.navigateByUrl('/settings'); } },
			{ label: 'Help', command: () => { this.router.navigateByUrl('/settings'); } },
			{ label: 'Logout', command: () => { this.funcLogout(); } },
		]
		menu.toggle(event);
	}

	funcLogout() {
		sessionStorage.clear();
		localStorage.clear();
		this.router.navigate(['login']);
	}
}

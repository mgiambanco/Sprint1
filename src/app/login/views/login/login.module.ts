import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { CommonService } from '../../../services/common.service';
import { LoginService } from '../../../services/login.service';
import { LoginComponent } from './login.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
	{ path: '', component: LoginComponent }
]
@NgModule({
	declarations: [
		LoginComponent
	],
	imports: [
		ToastModule,
		FormsModule,
		TooltipModule,
		CommonModule,
		RouterModule.forChild(routes)
	],
	providers: [LoginService, CommonService],
	exports: [LoginComponent],
	entryComponents: [LoginComponent]
})
export class LoginModule { }

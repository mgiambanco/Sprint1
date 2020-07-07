import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AuthComponent } from './auth.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { CommonService } from '../services/common.service';
import { LoginService } from '../services/login.service';
import { ForgotModule } from './views/forgot/forgot.module';
import { LoginModule } from './views/login/login.module';
import { RegisterModule } from './views/regiser/register.module';

const routes: Routes = [
	{ path: '', component: AuthComponent }
]

@NgModule({
	declarations: [
		AuthComponent
	],
	imports: [
		LoginModule,
		ForgotModule,
		RegisterModule,
		ToastModule,
		FormsModule,
		TooltipModule,
		CommonModule,
		RouterModule.forChild(routes)
	],
	providers: [LoginService, CommonService],
	exports: [AuthComponent],
	entryComponents: [AuthComponent]
})
export class AuthModule { }

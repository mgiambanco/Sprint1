import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ForgotComponent } from './forgot.component';
import { Routes } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { CommonService } from '../../../services/common.service';
import { LoginService } from '../../../services/login.service';

@NgModule({
	declarations: [
		ForgotComponent
	],
	imports: [
		ToastModule,
		FormsModule,
		TooltipModule,
		CommonModule,
	],
	providers: [LoginService, CommonService],
	exports: [ForgotComponent],
	entryComponents: [ForgotComponent]
})
export class ForgotModule { }

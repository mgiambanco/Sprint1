import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HomeComponent } from './home.component';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { DatePipe } from '@angular/common';
import { CommonService } from '../services/common.service';
import { LoginService } from '../services/login.service';

const routes: Routes = [
	{ path: '', component: HomeComponent }
]

@NgModule({
	declarations: [
		HomeComponent
	],
	imports: [
		ToastModule,
		FormsModule,
		TooltipModule,
		CommonModule,
		RouterModule.forChild(routes)
	],
	providers: [LoginService, CommonService],
	exports: [HomeComponent],
	entryComponents: [HomeComponent]
})
export class HomeModule { }

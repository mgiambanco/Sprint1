import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { CalendarComponent } from './calendar.component';
import { Routes, RouterModule } from '@angular/router';
import { MenubarModule } from 'primeng/menubar';
import { DropzoneDirective } from 'src/app/directives/dropzone.directive';
import { UploadTaskComponent } from 'src/app/shared/upload/upload.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { CalendarModule, DateAdapter } from 'angular-calendar';
import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';

@NgModule({
	declarations: [
		CalendarComponent,
	],
	imports: [
		TooltipModule,
		TableModule,
		FormsModule,
		CommonModule,
		// FlatpickrModule.forRoot(),
		CalendarModule.forRoot({
			provide: DateAdapter,
			useFactory: adapterFactory,
		}),
	],
	providers: [AngularFireStorage],
	exports: [CalendarComponent],
	entryComponents: [CalendarComponent]
})
export class AppCalendarModule { }

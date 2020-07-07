import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardModule } from './board/board.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { MenuModule } from 'primeng/menu';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { AngularFireAuth } from "@angular/fire/auth";

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		MenuModule,
		BrowserAnimationsModule,
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase, 'fcc-book-trading'),
		AngularFireDatabaseModule
	],
	providers: [AuthGuardService, AuthService, AngularFireAuth],
	bootstrap: [AppComponent]
})
export class AppModule { }

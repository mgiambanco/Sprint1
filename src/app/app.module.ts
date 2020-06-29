import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BoardModule } from './board/board.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { environment } from 'src/environments/environment';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';

@NgModule({
	declarations: [
		AppComponent
	],
	imports: [
		BrowserAnimationsModule,
		BrowserModule,
		AppRoutingModule,
		AngularFireModule.initializeApp(environment.firebase, 'fcc-book-trading'),
        AngularFireDatabaseModule
	],
	providers: [],
	bootstrap: [AppComponent]
})
export class AppModule { }

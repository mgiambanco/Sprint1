import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from 'firebase/app';
import { Subject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class CommonService {
	isDateBeforeToday(date) {
		if(!date) { return false;}
		return new Date(date.toDateString()) < new Date(new Date().toDateString());
	}
}
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { BoardComponent } from './board.component';
import { Routes, RouterModule } from '@angular/router';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ListModule } from '../board_list/list.module';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const routes: Routes = [
    { path: '', component: BoardComponent }
]


@NgModule({
    declarations: [
        BoardComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        ListModule,
        DashboardModule,
        RouterModule.forChild(routes)
    ],
    providers: [AngularFireAuth, AngularFirestore],
    exports: [BoardComponent],
    entryComponents: [BoardComponent]
})
export class BoardModule { }

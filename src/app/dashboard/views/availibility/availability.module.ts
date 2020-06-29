import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AvailabilityComponent } from './availability.component';
import { Routes, RouterModule } from '@angular/router';
import { MenubarModule} from 'primeng/menubar';
import { DropzoneDirective } from 'src/app/directives/dropzone.directive';
import { UploadTaskComponent } from 'src/app/shared/upload/upload.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import {TableModule} from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';

@NgModule({
    declarations: [
        AvailabilityComponent,
    ],
    imports: [
        TooltipModule,
        TableModule,
        FormsModule,
        CommonModule
    ],
    providers: [AngularFireStorage],
    exports: [AvailabilityComponent],
    entryComponents: [AvailabilityComponent]
})
export class AvailabilityModule { }

import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { DashboardComponent } from './dashboard.component';
import { Routes, RouterModule } from '@angular/router';
import { MenubarModule} from 'primeng/menubar';
import { ResourcesModule } from './views/resources/resources.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AvailabilityModule } from './views/availibility/availability.module';

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [
        AvailabilityModule,
        ResourcesModule,
        MenubarModule,
        CommonModule,
        FormsModule
    ],
    providers: [],
    exports: [DashboardComponent],
    entryComponents: [DashboardComponent]
})
export class DashboardModule { }

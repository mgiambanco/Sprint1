import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { ListComponent } from './list.component';
import { Routes, RouterModule } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';
import { BoardService } from '../services/board.service';
import { CommonModule } from '@angular/common';
import { ScrollPanelModule } from 'primeng/scrollpanel';
import { TooltipModule } from 'primeng/tooltip';
import { DragDropModule } from 'primeng/dragdrop';
import { FormsModule } from '@angular/forms';
import {DropdownModule} from 'primeng/dropdown';
import { TableModule } from 'primeng/table';
import {ToastModule} from 'primeng/toast';
import { MessageService } from 'primeng/api';

@NgModule({
    declarations: [
        ListComponent
    ],
    imports: [
        ToastModule,
        TableModule,
        DropdownModule,
        FormsModule,
        DragDropModule,
        TooltipModule,
        ScrollPanelModule,
        CommonModule,
        SidebarModule
    ],
    providers: [BoardService, MessageService],
    exports: [ListComponent],
    entryComponents: [ListComponent]
})
export class ListModule { }

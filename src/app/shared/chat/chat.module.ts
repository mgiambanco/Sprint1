import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChatComponent } from './chat.component';
import { BoardService } from '../../services/board.service';
import { CommonModule } from '@angular/common';
import { TooltipModule } from 'primeng/tooltip';
import { FormsModule } from '@angular/forms';
import { CommonService } from '../../services/common.service';
import {AccordionModule} from 'primeng/accordion';

@NgModule({
    declarations: [
        ChatComponent
    ],
    imports: [
		AccordionModule,
        FormsModule,
        TooltipModule,
        CommonModule,
    ],
    providers: [BoardService, CommonService],
    exports: [ChatComponent],
    entryComponents: [ChatComponent]
})
export class ChatModule { }

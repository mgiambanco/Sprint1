import { Component, OnInit, Input } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { MessageService } from 'primeng/api';
import { FirebaseFirestore, FirebaseApp } from 'angularfire2';
import { DatePipe } from '@angular/common';
import { CommonService } from '../../services/common.service';

@Component({
    selector: 'app-chat',
    templateUrl: './chat.component.html'
})
export class ChatComponent implements OnInit {
	@Input() chats: any[] = [];
	@Input() sprint_id: string = "";
	@Input() list_id: string = "";
	@Input() task: any;

	message: string = "";

	constructor(
		private boardService: BoardService
	) {

	}

	ngOnInit() {

	}

	submitChatMessage() {
        let payload = {
            name: "Mario Giambanco",
            message: this.message
        }
        this.boardService.insertTaskChat(this.sprint_id, this.list_id, this.task.id, payload);
        this.message = "";
    }
}
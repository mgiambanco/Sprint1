import { Component, OnInit, Input } from '@angular/core';
import { BoardService } from '../../services/board.service';
import { MessageService } from 'primeng/api';
import { FirebaseFirestore, FirebaseApp } from 'angularfire2';
import { DatePipe } from '@angular/common';
import { CommonService } from '../../services/common.service';

@Component({
    selector: 'app-testing',
    templateUrl: './testing.component.html'
})
export class TestingComponent implements OnInit {
	@Input() sprint_id: string = "";
	@Input() list_id: string = "";
	@Input() task: any;


	constructor(
		private boardService: BoardService
	) {

	}

	ngOnInit() {

	}
}
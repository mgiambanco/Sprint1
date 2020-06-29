import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service';

@Component({
    selector: 'app-board',
    templateUrl: './board.component.html'
})
export class BoardComponent implements OnInit {
    company: string = "1111";
    list: any[] = [];
    users: any[] = [];

    constructor(
        private boardService: BoardService
    ) {

    }

    ngOnInit() {
        this.company = localStorage.getItem("company");
        this.getData();
        this.getUsers();
    }

    getData() {
        this.boardService.getSprint(this.company).subscribe(res => {
            this.list = res[0];
        });
    }

    getUsers() {
        this.boardService.getUsers(this.company).subscribe(res => {
            this.users = res;
        });
    }
}

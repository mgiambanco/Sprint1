import { Component, Input, OnInit } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { BoardService } from 'src/app/services/board.service';

@Component({
    selector: 'app-resources',
    templateUrl: './resources.component.html'
})
export class ResourcesComponent implements OnInit {
    @Input() list: any;
    isHovering: boolean;

    files: File[] = [];
    file_list: any[] = [];
    constructor(
        private afStorage: AngularFireStorage,
        private firebase: AngularFireDatabase,
        private boardService: BoardService
    ) {

    }

    ngOnInit() {
        this.getFiles();

    }
    toggleHover(event: boolean) {
        this.isHovering = event;
    }

    onDrop(files: FileList) {
        for (let i = 0; i < files.length; i++) {
            this.files.push(files.item(i));
        }
    }

    getFiles() {
        console.log(this.list);
        let out = [];
        this.boardService.getFileUploads(this.list.id).subscribe(res => {
            this.file_list = res;
        })
    }
}
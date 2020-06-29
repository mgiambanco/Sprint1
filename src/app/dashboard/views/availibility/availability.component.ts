import { Component, Input, OnInit, OnChanges } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { BoardService } from 'src/app/services/board.service';
import { take } from 'rxjs/operators';

@Component({
    selector: 'app-availability',
    templateUrl: './availability.component.html'
})
export class AvailabilityComponent implements OnInit {
    @Input() list: any;
    availability: any[] = [];

    columns: any[] = [
        { field: "title", header: "Task" },
        { field: "status", header: "Status" },
        { field: "priority", header: "Priority" }
    ]
    constructor(
        private boardService: BoardService
    ) {

    }

    ngOnInit() {
        console.log(this.list);
        this.getData();
    }



    getData() {
        this.availability = [];
        // console.log(this.list.id)
        this.boardService.getUsers(this.list.company).subscribe(users => {
            users.forEach(user => {
                let out = user;
                // console.log(user.id);
                // console.log(out);

                this.boardService.getList(this.list.id).pipe(take(1)).subscribe(res => {
                    out.tasks = [];
                    res.forEach(elem => {
                        console.log(user.id);
                        this.boardService.getTasksbyUserID(this.list.id, elem.id, user.id).pipe(take(1)).subscribe(tasks => {
                            console.log(tasks);
                            if (tasks.length) {
                                tasks.forEach(task => {
                                    task.status = elem.title;
                                    if (!task.priority) { task.priority = "Not Set"; }
                                    if (task) { out.tasks.push(task); }
                                })
                            }
                        })
                        // console.log(out);
                    })
                    this.availability.push(out);
                })
            })
            // console.log(this.availability)
        })

    }

    getPriority(priority) {
        switch (priority) {
            case "high":
                return "badge badge_red";
                break;

            case "medium":
                return "badge badge_yellow";
                break;

            case "low":
                return "badge badge_green";
                break;

            default:
                return "badge badge_grey";
                break;
        }
    }

    getPriorityText(priority) {
        let out = "";
        // if(!priority) { return "Priority Not Set"};
        switch (priority) {
            case "high":
                out = "High Priority";
                break;

            case "medium":
                out = "Medium Priority";
                break;

            case "low":
                out = "Low Priority";
                break;
            case "notset":
                out = "Priority Not Set";
                break;
        }
        return out;
    }

    toggleTask(task) {

    }

    ucFirst(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    }

    sendReminder(task) {

    }
}
import { Component, OnInit } from '@angular/core';
import { BoardService } from '../services/board.service';
import { MessageService } from 'primeng/api';
import { FirebaseFirestore, FirebaseApp } from 'angularfire2';
import { DatePipe } from '@angular/common';
import { CommonService } from '../services/common.service';

@Component({
    selector: 'app-list',
    templateUrl: './list.component.html'
})
export class ListComponent implements OnInit {
    list: any[] = [];
    users: any[] = [];

    toggleTask: boolean = false;
    task: any;
    company: string = "";
    draggedTask: any;
    start_list_id: any;
    sprint_id: any;
    list_id: any;
    message: string = "";
    edit_list: any;
    toggleListEdit: boolean;
    toggleAssignee: boolean;

    constructor(
        private boardService: BoardService,
        public commonService: CommonService,
        private messageService: MessageService,
        private datePipe: DatePipe
    ) {

    }
    ngOnInit() {
        this.boardService.openTask.subscribe(res => {
            this.viewTask(res.sprint_id, res.board_id, res.task)
        })
        this.company = localStorage.getItem("company");
        console.log(this.company);
        this.getList();
        this.getUsers();
    }

    getList() {
        let payload = {
            title: "Sprint 1",
            timeframe: "2020-06-01 to 2020-06-30",
            lists: [{ title: "Mario" }, { title: "Zach" }, { title: "Chaim" }, { title: "john" }]
        }
        // this.boardService.createBoard(payload);
        // this.boardService.createSprint(payload);

        this.boardService.getSprint(this.company).subscribe(res => {
            // console.log(res);
            this.list = res;
            this.boardService.getList(this.list[0].id).subscribe(res => {
                this.list[0].lists = res;
                // console.log(res);
                this.list[0].lists.forEach(element => {
                    this.boardService.getTasks(this.list[0].id, element.id).subscribe(res => {
                        element.tasks = res;
                        element.tasks.forEach(task => {
                            if (task.user_id) {
                                this.boardService.getUserbyID(task.user_id).subscribe(user => {
                                    console.log(user)
                                    task.first_name = user['first_name'] ? user['first_name'] : "";
                                    task.last_name = user['last_name'] ? user['last_name'] : "";
                                })
                            } else {
                                task.first_name = "";
                                task.last_name = "";
                            }

                        });

                        console.log(element.tasks)
                    })

                });
            })
            // console.log(this.list[0])


        })
    }

    getUsers() {
        this.boardService.getUsers(this.company).subscribe(res => {
            this.users = res;
        });
    }

    funcUpdateAssignee(event) {
        console.log(event);
        this.toggleAssignee = false;
        this.task.name = event.value.name;
        let payload = {
            user_id: event.value.id
        }
        this.boardService.updateTask(this.sprint_id, this.list_id, this.task.id, payload);
    }

    updateTask() {
        let dte = this.datePipe.transform(this.task.duedate, "MM/dd/yyyy");
        let payload = {
            description: this.task.description,
            title: this.task.title,
            duedate: dte ? dte : ""
        }
        // console.log(this.sprint_id)
        // console.log(this.list_id)
        // console.log(this.task.id)
        this.boardService.updateTask(this.sprint_id, this.list_id, this.task.id, payload);
        this.messageService.add({ severity: 'success', summary: 'Task Updated' });
    }

    updateList(list) {
        let payload = {
            title: list.title
        }
        console.log(this.sprint_id)
        console.log(list.id)
        this.boardService.updateList(this.sprint_id, list.id, payload);
        this.messageService.add({ severity: 'success', summary: 'List Updated' });
    }
    addItem(id) {
        this.boardService.createListItem("dummy", id);
    }

    createTask(sprint_id, list_id) {
        let payload = {
            title: "VC-122",
            description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        this.boardService.createTask(sprint_id, list_id, payload);
    }

    viewTask(sprint_id, list_id, task) {
        this.sprint_id = sprint_id;
        this.list_id = list_id;
        console.log(sprint_id);
        console.log(list_id);
        console.log(task);
        this.task = task;
        this.toggleTask = true;

        if (task.user_id) {
            this.boardService.getUserbyID(task.user_id).subscribe(user => {
                console.log(user);
                task.name = user['name'];
            })
        }

        if (this.sprint_id, this.list_id, this.task.id) {
            this.boardService.getChat(this.sprint_id, this.list_id, this.task.id).subscribe(res => {
                this.task.chat = res;
            })
        }
        // console.log(this.task);
    }

   

    funcToggleEdit(sprint, list) {
        this.edit_list = list;
        this.sprint_id = sprint;
        this.toggleListEdit = true;
    }

    funcDeleteTask(list, task) {
        this.boardService.deleteTask(this.sprint_id, list.id, task.id);
        this.messageService.add({ severity: 'success', summary: 'Task Deleted' });

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

    getPriorityText(priority?) {
        switch (priority) {
            case "high":
                return "High Priority";
                break;

            case "medium":
                return "Medium Priority";
                break;

            case "low":
                return "Low Priority";
                break;
            default:
                return "Priority Not Set";
                break;
        }
    }

    dragStart(event, task: any, start_list_id) {
        this.draggedTask = task;
        this.start_list_id = start_list_id;
    }

    drop(event, sprint_id, list_id) {
        console.log(event);
        console.log("sprint id", sprint_id);
        console.log("list id", list_id);
        console.log("task id", this.draggedTask.id);
        if (sprint_id && list_id && this.draggedTask.id) {
            this.boardService.createTask(sprint_id, list_id, this.draggedTask);
            this.boardService.deleteTask(sprint_id, this.start_list_id, this.draggedTask.id);
        }
    }

    dragEnd(event) {
        this.draggedTask = null;
    }
}

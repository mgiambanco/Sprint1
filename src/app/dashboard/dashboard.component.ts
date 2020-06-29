import { Component, OnInit, Input } from '@angular/core';

@Component({
    selector: 'app-dashboard',
    templateUrl: './dashboard.component.html'
})
export class DashboardComponent implements OnInit {
    @Input() list: any;

    items: any[] = [];
    view: string = "availability";

    constructor() {

    }

    ngOnInit() {
        console.log(this.list);
        this.items = [
            { label: "At a Glance", command: () => { this.view = "availability" } },
            { label: "Resources", command: () => { this.view = "resources" } },
            { label: "Testing Procedures", command: () => { this.view = "testing" } },
        ]
    }

}

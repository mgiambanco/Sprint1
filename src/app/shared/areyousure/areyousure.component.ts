
import { Component, OnInit, OnDestroy, Input, ViewEncapsulation, Output, EventEmitter, ViewChild } from '@angular/core';
import { OverlayPanelModule, OverlayPanel } from 'primeng/overlaypanel';

@Component({
	selector: 'app-are-you-sure',
	templateUrl: './areyousure.component.html',
	styleUrls: ['./areyousure.component.css'],
	encapsulation: ViewEncapsulation.None
})
export class AreYouSureComponent implements OnInit, OnDestroy {
	@Output() callbackYes = new EventEmitter();
	@Input() message: string = "Are you sure?"
	@Input() yes: string = "Yes";
	@Input() no: string = "No";
	@Input() class: string = "";
	@Input() icon: string = "fa fa-times";
	@Input() text: string = "Delete";
	@Input() tooltip: string = "";

	@ViewChild('op', null) op: OverlayPanel;

	loading: boolean = false;
	fullImagePath = 'https://media.value-cloud.com/images/jamaica/reload.gif';
	constructor() {

	}

	ngOnInit(): void {
		//Called after the constructor, initializing input properties, and the first call to ngOnChanges.
		//Add 'implements OnInit' to the class.
		
	}

	ngOnDestroy(): void {
		//Called once, before the instance is destroyed.
		//Add 'implements OnDestroy' to the class.
		
	}
	funcYes(event) {
		this.loading = true;
		this.callbackYes.emit();
		this.op.hide();
	}

	public funcCancel() {
		this.loading = false;
	}
}
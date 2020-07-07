import { Component, Input, OnInit, OnChanges, ChangeDetectionStrategy } from '@angular/core';
import { AngularFireStorage } from 'angularfire2/storage';
import { AngularFireDatabase } from 'angularfire2/database';
import { BoardService } from 'src/app/services/board.service';
import { take } from 'rxjs/operators';

import { startOfDay, endOfDay, subDays, addDays, endOfMonth, isSameDay, isSameMonth, addHours, } from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { CalendarEvent, CalendarEventAction, CalendarEventTimesChangedEvent, CalendarView, CalendarMonthViewBeforeRenderEvent, } from 'angular-calendar';

const colors: any = {
	red: {
		primary: '#ad2121',
		secondary: '#FAE3E3',
	},
	blue: {
		primary: '#1e90ff',
		secondary: '#D1E8FF',
	},
	yellow: {
		primary: '#e3bc08',
		secondary: '#FDF1BA',
	},
};

@Component({
	selector: 'app-calendar',
	templateUrl: './calendar.component.html',
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CalendarComponent implements OnInit {
	viewDate: Date = new Date();
	view: CalendarView = CalendarView.Month;
	@Input() list: any;

	actions: CalendarEventAction[] = [
		{
			label: '<i class="fas fa-fw fa-pencil-alt"></i>',
			a11yLabel: 'Edit',
			onClick: ({ event }: { event: CalendarEvent }): void => {
				this.handleEvent('Edited', event);
			},
		},
		{
			label: '<i class="fas fa-fw fa-trash-alt"></i>',
			a11yLabel: 'Delete',
			onClick: ({ event }: { event: CalendarEvent }): void => {
				this.events = this.events.filter((iEvent) => iEvent !== event);
				this.handleEvent('Deleted', event);
			},
		},
	];

	handleEvent(action: string, event: CalendarEvent): void {
		this.modalData = { event, action };
		console.log(event);
		this.boardService.openTask.next(event);
		// this.modal.open(this.modalContent, { size: 'lg' });
	}

	modalData: {
		action: string;
		event: CalendarEvent;
	};

	events: any[] = [];
	refresh: Subject<any> = new Subject();
	constructor(
		private boardService: BoardService
	) {

	}

	ngOnInit() {
		this.getTasks();

	}


	getTasks() {
		this.boardService.getUsers(this.list.company).subscribe(users => {
			users.forEach(user => {
				// let out = user;

				this.boardService.getList(this.list.id).pipe(take(1)).subscribe(res => {
					// out.tasks = [];
					res.forEach(elem => {
						// console.log(user.id);
						this.boardService.getTasksbyUserID(this.list.id, elem.id, user.id).pipe(take(1)).subscribe(tasks => {
							// console.log(tasks);
							if (tasks.length) {
								tasks.forEach(task => {
									task.status = elem.title;
									if (task.duedate) {
										this.events.push({
											start: startOfDay(new Date(task.duedate)),
											title: task.title,
											sprint_id: this.list.id,
											board_id: elem.id,
											task: task,
											allDay: true,
											color: colors.red,
											actions: this.actions,
										})
									}
								})
							}
							// console.log(this.events);
							this.refresh.next();
						})
					})
					// this.availability.push(out);
				})
			})
		})
	}

	funcFixDte(dte: any) {
		let arr = dte.split(dte, "/");
		let out = arr[1] + "-" + arr[0] + "-" + arr[2];
		return out;
	}
	

	eventTimesChanged({
		event,
		newStart,
		newEnd,
	}: CalendarEventTimesChangedEvent): void {
		this.events = this.events.map((iEvent) => {
			if (iEvent === event) {
				return {
					...event,
					start: newStart,
					end: newEnd,
				};
			}
			return iEvent;
		});
		this.handleEvent('Dropped or resized', event);
	}

	deleteEvent(eventToDelete: CalendarEvent) {
		this.events = this.events.filter((event) => event !== eventToDelete);
	}

	setView(view: CalendarView) {
		this.view = view;
	}

	closeOpenMonthViewDay() {
		// this.activeDayIsOpen = false;
	}
}
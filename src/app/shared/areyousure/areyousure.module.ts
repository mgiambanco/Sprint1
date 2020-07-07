import {  } from '@ng-bootstrap/ng-bootstrap';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AreYouSureComponent } from './areyousure.component';
import { TooltipModule } from 'primeng/tooltip';
@NgModule({
	declarations: [
		AreYouSureComponent
	],
	entryComponents: [AreYouSureComponent],
	imports: [
		TooltipModule,
		OverlayPanelModule,
		CommonModule,
		FormsModule,
		
	],
	exports: [AreYouSureComponent]
})

export class AreYouSureModule {}
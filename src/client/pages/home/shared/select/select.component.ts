import {Component, Input, Output, EventEmitter} from '@angular/core';

@Component({
	selector: 'techo-select',
	template: `
		<select [(ngModel)]="selectedVal" (change)="onChange(selectedVal)" class="form-control">
			<option value="" disabled="" selected=""><ng-content></ng-content></option>
			<option *ngFor="let o of toptions" [ngValue]="tvalue ? o[tvalue] : o">{{ttext ? o[ttext] : o}}</option>
		</select>
	`
})
export class TechoSelect {
	@Input() toptions: Array<any>;
	@Input() tvalue: string;
	@Input() ttext: string;
	@Input() tif: boolean;
	@Output() onselect: EventEmitter<any>;

	selectedVal: any;

	constructor() {
		this.onselect = new EventEmitter<any>();
		this.selectedVal = '';
	}

	onChange(event: any) {
		this.onselect.emit(event);
	}

	ngOnChanges() {
		this.onChange('');
		this.selectedVal = '';
	}
}
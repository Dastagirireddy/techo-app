import {Component} from '@angular/core';
import {AppService} from './app.service';
import './app.component.scss';

@Component({
	selector: 'techo-app',
	templateUrl: './app/app.component.html'
})
export class AppComponent {
	options: Array<any>;
	car: any;
	model: any;

	constructor(private appSrvc: AppService) {
	}

	ngOnInit() {
		this.appSrvc.getCars()
			.subscribe((data) => {
				console.log(data);
				this.options = data;
			});
	}

	onSelectCar(msg: any) {

		this.car = msg;
	}

	onSelectModel(msg: any) {

		this.model = msg;
	}
}
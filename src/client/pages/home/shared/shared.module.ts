import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

import {TechoSelect} from './select/select.component';

@NgModule({
	imports: [
		CommonModule,
		FormsModule
	],
	exports: [TechoSelect],
	declarations: [TechoSelect]
})
export class SharedModule {

}
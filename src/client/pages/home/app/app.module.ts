import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {HttpModule} from '@angular/http';

import {SharedModule} from '../shared/shared.module';

import {AppComponent} from './app.component';
import {AppService} from './app.service';

@NgModule({
	imports: [
		BrowserModule,
		HttpModule,
		SharedModule
	],
	declarations: [
		AppComponent
	],
	bootstrap: [AppComponent],
	providers: [AppService]
})
export class AppModule {

}
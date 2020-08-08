import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../../shared/material.module';
import { displayMarblesPipe } from './display-marbles.pipe';
import { PlaygroundComponent } from './playground.component';


@NgModule({
	declarations: [
		PlaygroundComponent,
		displayMarblesPipe
	],
	imports: [
		CommonModule,
		MaterialModule
	],
	exports: [
		PlaygroundComponent
	]
})
export class PlaygroundModule { }
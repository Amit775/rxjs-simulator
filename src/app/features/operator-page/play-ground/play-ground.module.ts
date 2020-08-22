import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from 'src/app/shared/material.module';
import { DisplayMarblesPipe } from './display-marbles.pipe';
import { PlayGroundComponent } from './play-ground.component';


@NgModule({
	declarations: [
		PlayGroundComponent,
		DisplayMarblesPipe
	],
	imports: [
		CommonModule,
		MaterialModule
	],
	exports: [
		PlayGroundComponent
	]
})
export class PlayGroundModule { }
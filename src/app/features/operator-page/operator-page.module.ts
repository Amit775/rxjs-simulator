import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PlayGroundModule } from './play-ground/play-ground.module';
import { MaterialModule } from './../../shared/material.module';
import { OperatorPageComponent } from './operator-page.component';
import { DocumentationComponent } from './documentation/documentation.component';
import { ComparisonComponent } from './comparison/comparison.component';



@NgModule({
	declarations: [OperatorPageComponent, DocumentationComponent, ComparisonComponent],
	imports: [
		CommonModule,
		MaterialModule,
		PlayGroundModule
	]
})
export class OperatorPageModule { }

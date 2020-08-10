import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MaterialModule } from './shared/material.module';
import { OperatorPageModule } from './features/operator-page/operator-page.module';
import { HomeComponent } from './features/home/home.component';
import { FooterComponent } from './layout/footer/footer.component';
import { FilterCategoryPipe } from './layout/side-nav/filter-category.pipe';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { TopBarComponent } from './layout/top-bar/top-bar.component';

@NgModule({
	declarations: [
		AppComponent,
		TopBarComponent,
		SideNavComponent,
		FooterComponent,
		FilterCategoryPipe,
		HomeComponent
	],
	imports: [
		BrowserModule,
		AppRoutingModule,
		BrowserAnimationsModule,
		FormsModule,
		MaterialModule,
		OperatorPageModule
	],
	bootstrap: [AppComponent]
})
export class AppModule { }

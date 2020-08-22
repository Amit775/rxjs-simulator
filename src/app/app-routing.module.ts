import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OperatorPageComponent } from './features/operator-page/operator-page.component';
import { HomeComponent } from './features/home/home.component';

const routes: Routes = [
	{ path: 'operator/:category/:name', component: OperatorPageComponent },
	{ path: '', component: HomeComponent },
	{ path: '**', redirectTo: '' }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

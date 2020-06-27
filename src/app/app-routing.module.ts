import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { CartComponent } from './cart/cart.component';
import { HomeComponent } from './home/home.component';
import { TravelsComponent } from './travels/travels.component';
import { HeroComponent } from './hero/hero.component';
import { TravelDetailsComponent } from './travel-details/travel-details.component';

const routes: Routes = [{
		path: "", component: HomeComponent
	},
	{
		path: "blog", component: BlogComponent
	},
	{
		path: "cart", component: CartComponent
	},
	{
		path: "travels", component: TravelsComponent
	},
	{
		path: "hero", component: HeroComponent
	},

	{
		path: "travels/:travelId", component: TravelDetailsComponent
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule { }

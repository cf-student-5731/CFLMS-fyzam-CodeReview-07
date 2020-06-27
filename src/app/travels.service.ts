import { Injectable } from '@angular/core';

@Injectable({
	providedIn: 'root'
})
export class TravelsService {

	constructor() { }
	serviceTravels = [];
	totalPrice = 'Total Price:';

		addToCart(travel) {
			this.serviceTravels.push(travel);
		}

		getTravels() {
			return this.serviceTravels;
		}
	 
		clearTravels(){
			this.serviceTravels = [];
			return this.serviceTravels;
		}

		calculatePrice(){
			let calcPrice: number = 0;
			for(let travel of this.serviceTravels){
				calcPrice += travel.price;
			}

			switch(true){
				case calcPrice >= 200 && calcPrice < 500:
					(calcPrice *= 0.9);
					this.totalPrice = 'Total Price: (10% Discount!!)';
					break;

				case calcPrice >= 500:
					(calcPrice *= 0.8);
					this.totalPrice = 'Total Price: (20% Discount!!)';
					break;
				default:
					this.totalPrice = 'Total Price:';
					break;
			}
			return calcPrice.toFixed(2);
		
		}

		emptyCart(){
			this.serviceTravels = [];
		}
		
		deleteTravel(i) {
			this.serviceTravels.splice(i, 1);
		}

	}

import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import { travels } from '../travels'
import { TravelsService } from '../travels.service';
import { FormBuilder, Validators } from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
	selector: 'travel-details',
	templateUrl: './travel-details.component.html',
	styleUrls: ['./travel-details.component.sass']
})
export class TravelDetailsComponent implements OnInit {
	travel;
	myTravel = travels;
	travelID;
	checkoutForm;
	options = {weekday: 'long', year: 'numeric', month: 'long', day: 'numeric', hour: 'numeric', minute: 'numeric', second: 'numeric', hour12: false};
	saved: boolean = false;
	commentIndex;

	myGetDate(){
		let d = new Date();
		let n = d.getTime();
		return Intl.DateTimeFormat('en-US', this.options).format(n);
	}
	 
	constructor(private route: ActivatedRoute, private travelsService: TravelsService, private formBuilder: FormBuilder) {

		this.checkoutForm = this.formBuilder.group({
			commentValue: ['', Validators.required],
			commentName: ['', Validators.required],
			commentDate: ''
		})
	}

	onAddToCart(travel) {
		Swal.fire(
			`${this.myTravel[this.travelID].name} has been added to your cart`
		  )

		this.travelsService.addToCart(travel);
		}
		

	addComment(){
		if (this.checkoutForm.valid){

			if(!this.saved){
				this.checkoutForm.value.commentDate = this.myGetDate();
				this.myTravel[this.travelID].travelComment.unshift(this.checkoutForm.value);
				console.log(this.myTravel[this.travelID]);
				this.emptyForm()
			}

			else{
				this.myTravel[this.travelID].travelComment[this.commentIndex] = this.checkoutForm.value;
				this.emptyForm()
				this.saved = false;
			}
		}
		else{
			Swal.fire(
				"You have to enter your mssage and your name!"
			  )
		}
	}

	editComment(i){
		this.saved = true;
		this.checkoutForm.setValue({  
			commentValue: this.myTravel[this.travelID].travelComment[i].commentValue,  
			commentName: this.myTravel[this.travelID].travelComment[i].commentName, 
			commentDate: this.myGetDate()
		})
		this.commentIndex = i;
	}

	deleteComment(i){
		this.myTravel[this.travelID].travelComment.splice(i, 1);
	}


	emptyForm(){
		this.checkoutForm.setValue({  
			commentValue: '',  
			commentName: '',  
			commentDate: ''
		})
	}

	ngOnInit(): void {
		this.route.paramMap.subscribe(params => {
		this.travel = travels[+params.get('travelId')];
		this.travelID = params.get('travelId');

	});
}

}

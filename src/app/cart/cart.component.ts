import { Component, OnInit } from '@angular/core';
import { TravelsService } from '../travels.service';

@Component({
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.sass']
})
export class CartComponent implements OnInit {
  cartTravels;
  fullPrice;
  totalPrice = this.travelsService.totalPrice;
  constructor(private travelsService: TravelsService) { }

  ngOnInit(): void {
    this.cartTravels = this.travelsService.getTravels();
    this.fullPrice = this.travelsService.calculatePrice();
    this.totalPrice = this.travelsService.totalPrice;
  }

  onDeleteTravel(i){
    this.travelsService.deleteTravel(i);
    this.fullPrice = this.travelsService.calculatePrice();
    this.totalPrice = this.travelsService.totalPrice;
  }

  onBookTravels(){
    this.cartTravels = this.travelsService.emptyCart()
    this.fullPrice = this.travelsService.calculatePrice();
    this.totalPrice = this.travelsService.totalPrice;
  }


}

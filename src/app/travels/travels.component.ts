import { Component, OnInit } from '@angular/core';
import { travels } from '../travels';
import { TravelsService } from '../travels.service';

@Component({
	selector: 'travels',
	templateUrl: './travels.component.html',
	styleUrls: ['./travels.component.sass']
})
export class TravelsComponent implements OnInit {
	myTravel = travels;

	constructor(private travelsService: TravelsService) { }

	  ngOnInit(): void {
	}
}

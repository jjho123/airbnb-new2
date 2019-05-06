import { Component, OnInit } from '@angular/core';

import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'bwm-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.scss']
})

/*  In this component we want to retrieve an array of rentals Rental[], 
    the RentalService creates an Observerable which calls an Observer
    in which this component subscribe to the service
*/

export class RentalListComponent implements OnInit {

  // rentals defined as a constant array of rental items
  // rentals: any[];

  // rentals defined as an array of the Rental model
  rentals: Rental[] = [];

  constructor(private rentalService: RentalService) { }

  ngOnInit() {
    // this.rentals = this.rentalService.getRentals();
    const rentalObservable = this.rentalService.getRentals().subscribe(
      (rentals: Rental[]) => {
        this.rentals = rentals;        
      },
      (err) => {
        
      },
      () => {
        console.log("finished");
      });
  }

}

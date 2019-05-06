import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { Rental } from './rental.model';

@Injectable()
export class RentalService {
    // rentals is defined as a stored constant of the rental array
    // rentals: any[] = [{}];
    
    // We are using a Rental model assigned to rentals as an array     
    private rentals: Rental[] = [{    
        id: "1",
        title: "Central Apartment",
        city: "New York",
        street: "Times Sqaure",
        category: "apartment",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 3,
        description: "Very nice apartment",
        dailyRate: 34,
        shared: false,
        createdAt: "24/12/2017"
      },
      {
        id: "2",
        title: "Central Apartment 2",
        city: "San Francisco",
        street: "Main street",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Very nice apartment",
        dailyRate: 12,
        shared: true,
        createdAt: "24/12/2017"
      },
      {
        id: "3",
        title: "Central Apartment 3",
        city: "Bratislava",
        street: "Hlavna",
        category: "condo",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 2,
        description: "Very nice apartment",
        dailyRate: 334,
        shared: true,
        createdAt: "24/12/2017"
      },
      {
        id: "4",
        title: "Central Apartment 4",
        city: "Berlin",
        street: "Haupt strasse",
        category: "house",
        image: "http://via.placeholder.com/350x250",
        bedrooms: 9,
        description: "Very nice apartment",
        dailyRate: 33,
        shared: true,
        createdAt: "24/12/2017"
      }];
  
  /*
  public getRentals():  any[] {
    return this.rentals;
  }
  */

  /* There are two ways to return an observable from getRentals
  
  public getRentals(): any {
    // const rentalObservable = new Observable((observer) => {
    const rentalObservable: Observable<Rental[]> = new Observable((observer) => {    
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);
  
      setTimeout(() => {
        observer.error("error");
      }, 3000);
  
      setTimeout(() => {
        observer.complete();
      }, 3000);    
    });
    return rentalObservable;    
  }
  */

  public getRentals(): Observable<Rental[]> {
    return new Observable<Rental[]>((observer) => {
      setTimeout(() => {
        observer.next(this.rentals);
      }, 1000);
    });
  }

  /* getRentalById returns an observable of a foundRental based on the rentalId 
  */
  public getRentalById(rentalId: string): Observable<Rental> {
    return new Observable<Rental>((observer) => {
      setTimeout(() => {
        const foundRental = this.rentals.find((rental) => {
          return rental.id ==rentalId;
        });
        observer.next(foundRental);
      }, 500);
    });
  }
}
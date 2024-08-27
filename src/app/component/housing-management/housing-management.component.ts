import { Component, OnInit } from '@angular/core';
import { HrhousingService } from 'src/app/services/hrhousing.service';
import { House, NewHouseForm } from 'src/app/interfaces/hrhousing';

@Component({
  selector: 'app-housing-management',
  templateUrl: './housing-management.component.html',
  styleUrls: ['./housing-management.component.css']
})
export class HousingManagementComponent implements OnInit {

  houses: House[] = [];

  newHouse: NewHouseForm = {
    address: '',
    landlord: {
      fullName: '',
      phoneNumber: '',
      email: ''
    },
    facilityInformation: {
      beds: 0,
      mattresses: 0,
      tables: 0,
      chairs: 0
    }
  }

  constructor(private hrhousingService: HrhousingService) { }

  ngOnInit(): void {
    this.getAllHouses();
  }

  getAllHouses(): void {
    this.hrhousingService.getAllHouses().subscribe(
      (data: House[]) => {
        this.houses = data;
      },
      (error) => {
        console.error('Failed to fetch houses', error); // Handle error
      }
    );
  }

  addHouse(): void {
    this.hrhousingService.createHouse(this.newHouse).subscribe(
      (response) => {
        console.log('House created successfully', response); 
        this.resetForm(); 
        this.getAllHouses();
      },
      (error) => {
        console.error('Failed to create house', error); 
      }
    );
  }

  deleteHouse(id: string): void {
    this.hrhousingService.deleteHouse(id).subscribe(
      (response) => {
        console.log('House deleted successfully', response);
        this.getAllHouses();
      },
      (error) => {
        console.error('Failed to delete house', error);
      }
    );
  }

  resetForm(): void {
    this.newHouse = {
      address: '',
      landlord: {
        fullName: '',
        phoneNumber: '',
        email: ''
      },
      facilityInformation: {
        beds: 0,
        mattresses: 0,
        tables: 0,
        chairs: 0
      }
    };
  }
}
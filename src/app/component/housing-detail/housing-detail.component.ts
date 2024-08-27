import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HrhousingService } from 'src/app/services/hrhousing.service';
import { House } from 'src/app/interfaces/hrhousing';

@Component({
  selector: 'app-housing-detail',
  templateUrl: './housing-detail.component.html',
  styleUrls: ['./housing-detail.component.css']
})
export class HousingDetailComponent implements OnInit {

  houseId: string = ''; 
  houseDetails: any = null;

  // here is return data for houseDetails
  //add userId in residents 
//   {
//     "landlord": {
//         "fullName": "John Doe",
//         "phoneNumber": "123-456-7890",
//         "email": "johndoe@example.com"
//     },
//     "facilityInformation": {
//         "beds": 4,
//         "mattresses": 4,
//         "tables": 1,
//         "chairs": 4
//     },
//     "_id": "66cd477883709d0d88d4bdf3",
//     "address": "123 Maple Street",
//     "residents": [
//         {
//             "firstName": "Alice",
//             "lastName": "Hu",
//             "middleName": "L.",
//             "phoneNumber": "555-234-5671",
//             "email": "hu1243@example.com",
//             "car": {
//                 "make": "Honda",
//                 "model": "Civic",
//                 "color": "Red"
//             }
//         },
//         {
//             "firstName": "John",
//             "lastName": "Doe",
//             "middleName": "M.",
//             "phoneNumber": "555-123-4567",
//             "email": "employee@company.com",
//             "car": {
//                 "make": "Toyota",
//                 "model": "Camry",
//                 "color": "Blue"
//             }
//         }
//     ],
//     "facilityReports": [],
//     "__v": 0,
//     "createdAt": "2024-08-27T03:26:48.161Z",
//     "updatedAt": "2024-08-27T03:26:48.161Z"
// }

  constructor(private route: ActivatedRoute, private hrhousingService: HrhousingService) { }

  ngOnInit(): void {
    this.houseId = this.route.snapshot.paramMap.get('id')!;
    this.getHouseDetail();
  }

  getHouseDetail(): void {
    this.hrhousingService.getHouseDetails(this.houseId).subscribe(
      (house: any) => { // Receiving data as 'any' type
        this.houseDetails = house;
      },
      (error) => {
        console.error('Failed to fetch house details', error); 
      }
    );
  }

}

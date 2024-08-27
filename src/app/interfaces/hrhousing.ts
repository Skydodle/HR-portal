export interface Landlord {
    fullName: string;
    phoneNumber: string;
    email: string;
  }
  
  export interface FacilityInformation {
    beds: number;
    mattresses: number;
    tables: number;
    chairs: number;
  }
  
  export interface House {
    _id: string;
    address: string;
    landlord: Landlord;
    facilityInformation: FacilityInformation;
    residents: string[]; 
    facilityReports: string[];
    createdAt: string;
    updatedAt: string;
  }

  export interface NewHouseForm {
    address: string;
    landlord: {
      fullName: string;
      phoneNumber: string;
      email: string;
    };
    facilityInformation: {
      beds: number;
      mattresses: number;
      tables: number;
      chairs: number;
    };
  }
  
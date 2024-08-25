export interface EmployeeSummary {
    firstName: string,
    lastName: string,
    middleName: string,
    preferredName:string,
    cellPhoneNumber: string,
    ssn: string,
    visaStatus: string,
    email: string,
    userid:string
}


export interface Address {
    street: string;
    city: string;
    state: string;
    zip: string;
  }
  
  export interface Car {
    make: string;
    model: string;
    color: string;
  }
  
  export interface Citizenship {
    visaStatus: string;
    startDate: string; 
    endDate: string; 
  }
  
  export interface DriverLicense {
    hasDriverLicense: boolean;
    licenseNumber: string;
    expirationDate: string; 
  }
  
  export interface User {
    email: string;
  }
  
  export interface EmergencyContact {
    firstName: string;
    lastName: string;
    middleName: string;  
    phone: string;
    email: string;
    relationship: string;
  }
  
  export interface EmployeeDetail {
    firstName: string;
    lastName: string;
    middleName: string; 
    preferredName: string; 
    cellPhoneNumber: string;
    workPhoneNumber: string; 
    ssn: string;
    dateOfBirth: string; 
    gender: string; 
    address: Address;
    car: Car;
    citizenship: Citizenship;
    driverLicense: DriverLicense;
    userId: User;
    emergencyContacts: EmergencyContact[];
  }
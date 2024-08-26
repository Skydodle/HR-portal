export interface Application {
  userId: string;
  firstName: string;
  lastName: string;
  middleName?: string;
  preferredName?: string;
  email: string;
  address?: {
    unit?: string;
    street: string;
    city: string;
    state: string;
    zip: string;
  };
  cellPhoneNumber: string;
  workPhoneNumber?: string;
  car?: {
    make?: string;
    model?: string;
    color?: string;
  };
  ssn: string;
  dateOfBirth: Date;
  gender?: 'Male' | 'Female' | 'I do not wish to answer';
  citizenship?: {
    visaStatus: string;
    visaType?: string;
    document?: string;
    startDate?: Date;
    endDate?: Date;
    optDocument?: string; // Assuming it's a string for simplicity
  };
  driverLicense?: {
    hasDriverLicense?: boolean;
    licenseNumber?: string;
    expirationDate?: Date;
    licenseCopy?: string;
  };
  reference?: {
    firstName: string;
    lastName: string;
    middleName?: string;
    phone: string;
    email: string;
    relationship: string;
  };
  emergencyContacts?: {
    firstName: string;
    lastName: string;
    middleName?: string;
    phoneNumber: string;
    emailAddress?: string;
    relationship: string;
  }[];
  feedback?: string;
  onboardingStatus?: 'Not Started' | 'Pending' | 'Approved' | 'Rejected';
  profilePicture?: string;
}
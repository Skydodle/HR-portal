export interface optDocument {
    optReceipt: VisaDocument;
    optEAD: VisaDocument;
    i983: VisaDocument;
    i20: VisaDocument;
    }

export interface VisaDocument {
    name: string;
    status: string;
    feedback: string;
  }

export interface Citizenship {
    visaStatus: string;
    startDate: string;
    endDate: string;
    document: string;
    optDocument: optDocument;
  }

export interface Employee {
    userId: string;
    firstName: string;
    lastName: string;
    middleName: string; 
    preferredName: string; 
    citizenship: Citizenship;
  }

export interface DocumentPreview {
    documentType: string;
    url: string;
    mimeType: string;
  }
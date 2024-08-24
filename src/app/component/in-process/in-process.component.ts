import { Component, Input, OnInit } from '@angular/core';
import { Employee, VisaDocument, DocumentPreview, optDocument } from 'src/app/interfaces/visaStatus';
import { VisaService } from 'src/app/services/visa.service';

@Component({
  selector: 'app-in-process',
  templateUrl: './in-process.component.html',
  styleUrls: ['./in-process.component.css']
})
export class InProcessComponent implements OnInit {

  @Input() employee!: Employee;
  currentDocument: 'optReceipt' | 'optEAD' | 'i983' | 'i20' | null = null;
  latestDocumentUrl: string | null = null;
  feedback: string = '';  // Track feedback input
  rejectedDocument: 'optReceipt' | 'optEAD' | 'i983' | 'i20' | null = null; // Track the rejected document

  constructor(private visaService: VisaService) { }

  ngOnInit(): void {
    this.setCurrentDocument();
    this.loadLatestDocumentUrl();
  }

  calculateDaysRemaining(endDate: string): number {
    const end = new Date(endDate);
    const today = new Date();
    const diff = end.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  }

  setCurrentDocument(): void {
    const documents = this.employee.citizenship.optDocument;

    // Check if any document is rejected
    this.rejectedDocument = this.getRejectedDocument();

    if (this.rejectedDocument) {
      // If a document is rejected, set it as the current document
      this.currentDocument = this.rejectedDocument;
    } else if (documents.optReceipt.status === 'pending') {
      this.currentDocument = 'optReceipt';
    } else if (documents.optReceipt.status === 'approved' && documents.optEAD.status === 'pending') {
      this.currentDocument = 'optEAD';
    } else if (documents.optEAD.status === 'approved' && documents.i983.status === 'pending') {
      this.currentDocument = 'i983';
    } else if (documents.i983.status === 'approved' && documents.i20.status === 'pending') {
      this.currentDocument = 'i20';
    } else {
      this.currentDocument = null; // No documents to process
    }
  }

  // Method to check if any document has a status of 'rejected'
  getRejectedDocument(): 'optReceipt' | 'optEAD' | 'i983' | 'i20' | null {
    const documents = this.employee.citizenship.optDocument;
    if (documents.optReceipt.status === 'rejected') return 'optReceipt';
    if (documents.optEAD.status === 'rejected') return 'optEAD';
    if (documents.i983.status === 'rejected') return 'i983';
    if (documents.i20.status === 'rejected') return 'i20';
    return null; // No rejected documents
  }

  loadLatestDocumentUrl(): void {
    this.visaService.getEmployeeVisaPreview(this.employee.userId).subscribe((previews: DocumentPreview[]) => {
      if (previews.length > 0) {
        this.latestDocumentUrl = previews[previews.length - 1].url;  // Get the last document's URL
      }
    }, error => {
      console.error('Error fetching document preview URL:', error);
    });
  }

  hasDocumentName(documentType: 'optReceipt' | 'optEAD' | 'i983' | 'i20'): boolean {
    return this.employee.citizenship.optDocument[documentType].name !== '';
  }

  isDocumentPending(documentType: 'optReceipt' | 'optEAD' | 'i983' | 'i20'): boolean {
    return this.employee.citizenship.optDocument[documentType].status === 'pending';
  }

  getDocumentStatus(documentType: 'optReceipt' | 'optEAD' | 'i983' | 'i20'): string {
    return this.employee.citizenship.optDocument[documentType].status;
  }

  approveDocument(documentType: 'optReceipt' | 'optEAD' | 'i983' | 'i20'): void {
    this.visaService.approveEmployeeVisa(this.employee.userId, documentType).subscribe(
      (updatedDocument: optDocument) => {
        console.log(`Approved ${documentType} and sent notification.`);
  
        this.employee.citizenship.optDocument = updatedDocument;
        this.updateCurrentDocument();
      },
      (error) => {
        console.error('Error approving document:', error);
      }
    );
  }

  updateCurrentDocument(): void {
    const documents = this.employee.citizenship.optDocument;
  
    if (this.getRejectedDocument()) {
      this.currentDocument = this.getRejectedDocument();
    } else if (documents.optReceipt.status === 'pending') {
      this.currentDocument = 'optReceipt';
    } else if (documents.optReceipt.status === 'approved' && documents.optEAD.status === 'pending') {
      this.currentDocument = 'optEAD';
    } else if (documents.optEAD.status === 'approved' && documents.i983.status === 'pending') {
      this.currentDocument = 'i983';
    } else if (documents.i983.status === 'approved' && documents.i20.status === 'pending') {
      this.currentDocument = 'i20';
    } else {
      this.currentDocument = null; // No documents to process
    }
  }

  rejectDocument(documentType: 'optReceipt' | 'optEAD' | 'i983' | 'i20'): void {
    if (this.feedback.trim() === '') {
      alert('Feedback cannot be empty!');
      return;
    }
    console.log(`Rejecting ${documentType} with feedback: ${this.feedback}`);
    
    this.visaService.rejectEmployeeVisa(this.employee.userId, documentType, this.feedback).subscribe(
      (updatedDocument: optDocument) => {
        this.feedback = '';
        this.employee.citizenship.optDocument = updatedDocument;
        this.updateCurrentDocument();
      }, (error) => {
        console.error('Error rejecting document:', error);
      }
    );
  }

  previewDocument(): void {
    if (this.latestDocumentUrl) {
      window.open(this.latestDocumentUrl, '_blank');
    }
  }

}

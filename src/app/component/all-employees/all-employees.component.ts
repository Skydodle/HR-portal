import { Component, Input, OnInit } from '@angular/core';
import { DocumentPreview, Employee } from 'src/app/interfaces/visaStatus';
import { VisaService } from 'src/app/services/visa.service';

@Component({
  selector: 'app-all-employees',
  templateUrl: './all-employees.component.html',
  styleUrls: ['./all-employees.component.css']
})
export class AllEmployeesComponent implements OnInit {

  @Input() employee!: Employee;
  documentPreviews: DocumentPreview[] = [];

  constructor(private visaService: VisaService) { }

  ngOnInit(): void {
    this.loadDocumentPreviews();
  }

  loadDocumentPreviews() {
    this.visaService.getEmployeeVisaPreview(this.employee.userId).subscribe((previews: DocumentPreview[]) => {
      this.documentPreviews = previews;
    }, error => {
      console.error('Error fetching document previews:', error);
    });
  }

  getDocumentUrl(documentType: string): string {
    const doc = this.documentPreviews.find(d => d.documentType === documentType);
    return doc ? doc.url : '';
  }

  previewDocument(documentType: string) {
    const url = this.getDocumentUrl(documentType);
    if (url) {
      window.open(url, '_blank');
    }
  }

  downloadDocument(documentType: string) {
    const url = this.getDocumentUrl(documentType);
    if (url) {
      const link = document.createElement('a');
      link.href = url;
      link.download = '';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }

  calculateDaysRemaining(endDate: string): number {
    const end = new Date(endDate);
    const today = new Date();
    const diff = end.getTime() - today.getTime();
    return Math.ceil(diff / (1000 * 3600 * 24));
  }

}

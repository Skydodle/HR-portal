import { Component, Input, OnInit } from '@angular/core';
import { Employee } from 'src/app/interfaces/visaStatus';
import { VisaService } from 'src/app/services/visa.service';

@Component({
  selector: 'app-in-process',
  templateUrl: './in-process.component.html',
  styleUrls: ['./in-process.component.css']
})
export class InProcessComponent implements OnInit {

  @Input() employee!: Employee;
  constructor(private visaService: VisaService) { }

  ngOnInit(): void {
  }

}

import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { House } from 'src/app/interfaces/hrhousing';
import { HrhousingService } from 'src/app/services/hrhousing.service';

@Component({
  selector: 'app-housing-summary',
  templateUrl: './housing-summary.component.html',
  styleUrls: ['./housing-summary.component.css']
})
export class HousingSummaryComponent implements OnInit {

  @Input() houses: House[] = [];
  @Output() deleteHouseEvent = new EventEmitter<string>();

  constructor(private router: Router,
    private hrhousingService: HrhousingService
  ) { }

  ngOnInit(): void {
  }

  goToDetail(id: string): void {
    this.router.navigate(['/housing-detail', id]);
  }
  
  deleteHouse(id: string): void {
      this.deleteHouseEvent.emit(id); 
    
  }
}

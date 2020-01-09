import { Component, OnInit, Input } from '@angular/core';
import { ProcessActivityDTO } from 'src/app/model/process-activity-dto';

@Component({
  selector: 'app-activity-item',
  templateUrl: './activity-item.component.html',
  styleUrls: ['./activity-item.component.css']
})
export class ActivityItemComponent implements OnInit {
  @Input() processActivity: ProcessActivityDTO;
  @Input() methodID: number;
  @Input() processID: number;

  constructor() { }

  ngOnInit() {
  }

}

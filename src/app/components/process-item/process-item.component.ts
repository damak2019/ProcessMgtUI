import { Component, OnInit, Input } from '@angular/core';
import { ProcessDTO } from 'src/app/model/process-dto';

@Component({
  selector: 'app-process-item',
  templateUrl: './process-item.component.html',
  styleUrls: ['./process-item.component.css']
})
export class ProcessItemComponent implements OnInit {
  @Input() proc: ProcessDTO;
  @Input() methodID: number;
  constructor() { }

  ngOnInit() {
  }

}

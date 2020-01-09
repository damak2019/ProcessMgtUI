import { Component, OnInit, Input } from '@angular/core';
import { MethodDTO } from 'src/app/model/method-dto';

@Component({
  selector: 'app-method-item',
  templateUrl: './method-item.component.html',
  styleUrls: ['./method-item.component.css']
})
export class MethodItemComponent implements OnInit {

  @Input() currentMethod: MethodDTO;
  constructor() { }

  ngOnInit() {
  }

}

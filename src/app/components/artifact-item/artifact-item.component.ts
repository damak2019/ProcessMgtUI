import { Component, OnInit, Input } from '@angular/core';
import { ArtifactDTO } from 'src/app/model/artifact-dto';

@Component({
  selector: 'app-artifact-item',
  templateUrl: './artifact-item.component.html',
  styleUrls: ['./artifact-item.component.css']
})
export class ArtifactItemComponent implements OnInit {
  @Input() artifact: ArtifactDTO;
  constructor() { }

  ngOnInit() {
  }

}

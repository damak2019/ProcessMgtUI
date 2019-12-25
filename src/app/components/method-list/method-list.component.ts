import { Component, OnInit } from '@angular/core';
import { MethodDTO } from 'src/app/model/method-dto';
import { MethodService } from 'src/app/services/method.service';

@Component({
  selector: 'app-method-list',
  templateUrl: './method-list.component.html',
  styleUrls: ['./method-list.component.css']
})
export class MethodListComponent implements OnInit {

  methods: MethodDTO[]=[];


  constructor( private methodService: MethodService) { }

  ngOnInit() {

    this.methodService.getMethods()
    .subscribe(
      data => {this.methods = data;
               console.log('methodename', this.methods[0].name );
              }


      );
  }
}

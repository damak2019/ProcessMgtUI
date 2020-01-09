import { Component, OnInit, ViewChild } from '@angular/core';
import { MethodDTO } from 'src/app/model/method-dto';
import { MethodService } from 'src/app/services/method.service';
import { AddMethodMappingComponent } from '../add-method-mapping/add-method-mapping.component';

@Component({
  selector: 'app-method-list',
  templateUrl: './method-list.component.html',
  styleUrls: ['./method-list.component.css']
})
export class MethodListComponent implements OnInit {

  methods: MethodDTO[]=[];
  method: MethodDTO;
  shFormAddMethodMapping = false;

  // @ViewChild('addMethodMappingComp',{static: true})
  //  addMethodMappingComp: AddMethodMappingComponent;


  constructor( private methodService: MethodService) { }

  ngOnInit() {

    //this.methodService.getMethods()
    this.methodService.getAllMethods()
    .subscribe(
      data => {this.methods = data;
               console.log('methodename', this.methods[0].name );
               console.log('methodename', this.methods[0].processDTOList[0].id );
              }


      );
  }

  addMethodMapping(){
    this.shFormAddMethodMapping = true;

  }
}

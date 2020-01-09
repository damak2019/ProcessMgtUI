import { Component, OnInit } from '@angular/core';
import { ProcessDTO } from 'src/app/model/process-dto';
import { ActivatedRoute } from '@angular/router';
import { MethodService } from 'src/app/services/method.service';

@Component({
  selector: 'app-list-process',
  templateUrl: './list-process.component.html',
  styleUrls: ['./list-process.component.css']
})
export class ListProcessComponent implements OnInit {

  processes : ProcessDTO[]=[];

  constructor(private methodService: MethodService,
              private route: ActivatedRoute) { }

  ngOnInit() {


    const mName  =  this.route.snapshot.paramMap.get('name');
    const pType  =  this.route.snapshot.paramMap.get('ptype');
    const pFollow =  this.route.snapshot.paramMap.get('pfollow');


    const obs = this.methodService.getProcessForAProject(mName, pType, pFollow);

    obs.subscribe( data => {
       this.processes = data;
      });


  }

}

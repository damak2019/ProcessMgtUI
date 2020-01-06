import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProcessActivityDTO } from 'src/app/model/process-activity-dto';
import { MethodService } from 'src/app/services/method.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-process-activity',
  templateUrl: './add-process-activity.component.html',
  styleUrls: ['./add-process-activity.component.css']
})
export class AddProcessActivityComponent implements OnInit {

  methodID: number;
  processID: number;

  processActivityDTO: ProcessActivityDTO = new ProcessActivityDTO();


  addActivityForm: FormGroup;

  constructor(private fb: FormBuilder,
              private methodService:  MethodService,
              private router: Router,
              private route: ActivatedRoute) {}





  ngOnInit() {

    this.methodID   =  Number(this.route.snapshot.paramMap.get('idMethod'));
    this.processID   =  Number(this.route.snapshot.paramMap.get('idProcess'));


    this.addActivityForm = this.fb.group({
      processActivityName: ['Passer en CAM', Validators.required]

  });
  }
  addProceesActivity() {


        const formdata = this.addActivityForm.value;
        const name  = formdata.processActivityName;



        console.log( 'addProceesActivity :  methodID' , this.methodID  , 'processID ', this.processID );

        this.processActivityDTO.name = name;

        console.log(this.processActivityDTO);
        this.methodService.addProceesActivityToMethod(this.methodID,  this.processID, this.processActivityDTO).subscribe(

          ()=>{console.log(' addProceesActivityToMethod succes');
               this.router.navigate(['/methods'])},
          (error )=>{console.log('UNE ERREUR est arrivée update: '+ error.error.message )}

        );
}



}

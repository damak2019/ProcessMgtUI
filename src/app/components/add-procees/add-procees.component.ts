import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProcessDTO } from 'src/app/model/process-dto';
import { MethodService } from 'src/app/services/method.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-procees',
  templateUrl: './add-procees.component.html',
  styleUrls: ['./add-procees.component.css']
})
export class AddProceesComponent implements OnInit {

  methodID: number;

  processDTO: ProcessDTO = new ProcessDTO();

  addProcessForm: FormGroup;

  constructor(private fb: FormBuilder,
              private methodService:  MethodService,
              private router: Router,
              private route: ActivatedRoute) {}


  ngOnInit() {

    this.methodID   =  Number(this.route.snapshot.paramMap.get('idMethod'));

    this.addProcessForm = this.fb.group({
      processDispalyName: ['Processus de Validation Architecture', Validators.required],
      processType: ['ARCHITECTURE', Validators.required],
      followUP: ['STANDARD', Validators.required]

  });
  }
  addProcessToMethod() {


    const formdata = this.addProcessForm.value;
    const name  = formdata.processDispalyName;
    const pType  = formdata.processType;
    const pFollow  = formdata.followUP;

    this.processDTO.displayName = name;
    this.processDTO.processType = pType;
    this.processDTO.followUP = pFollow;


    console.log(this.processDTO);
    this.methodService.addProceesToMethod(this.methodID, this.processDTO).subscribe(

      () =>{console.log(' addProceesToMethod succes');
            this.router.navigate(['/methods']);},
      (error ) => {console.log('UNE ERREUR est arrivée update: ' + error.error.message ); }

     );

}



}
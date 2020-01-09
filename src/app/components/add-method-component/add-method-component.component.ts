import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MethodService } from 'src/app/services/method.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MethodDTO } from 'src/app/model/method-dto';

@Component({
  selector: 'app-add-method-component',
  templateUrl: './add-method-component.component.html',
  styleUrls: ['./add-method-component.component.css']
})
export class AddMethodComponentComponent implements OnInit {




  method: MethodDTO = new MethodDTO();


  addMethodForm: FormGroup;

  constructor(private fb: FormBuilder,
              private methodService:  MethodService,
              private router: Router,
              private route: ActivatedRoute) {}





  ngOnInit() {


    this.addMethodForm = this.fb.group({
      methodName: ['New Method', Validators.required]

  });
  }
  addMethod() {


        const formdata = this.addMethodForm.value;
        const name  = formdata.methodName;

        this.method.name = name;

        console.log(this.method);
        this.methodService.addMethod(  this.method).subscribe(

          () => {console.log(' addMethod succes');
                 this.router.navigate(['/methods']); },
          (error ) => {console.log('UNE ERREUR est arrivée update: ' + error.error.message ); }

        );
}



}

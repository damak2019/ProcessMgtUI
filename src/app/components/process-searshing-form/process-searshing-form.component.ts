import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MethodService } from 'src/app/services/method.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-process-searshing-form',
  templateUrl: './process-searshing-form.component.html',
  styleUrls: ['./process-searshing-form.component.css']
})
export class ProcessSearshingFormComponent implements OnInit {

 searchForm: FormGroup;
  constructor(private fb: FormBuilder,
              private methodService:  MethodService,
              private router: Router) {}

  // ngOnInit() {

  // }



  ngOnInit() {
      this.searchForm = this.fb.group({
      methodMappingName: ['Produit Agile', Validators.required],
      processType: ['ARCHITECTURE', Validators.required],
      followUP: ['STANDARD', Validators.required]
});
}
listProcessAndArtifacts() {
// Enregistre le contact sur le backend
  // console.log(
  // (this.quizForm.get("titre")).value);

    const formdata = this.searchForm.value;
    const name  = formdata.methodMappingName;
    const pType  = formdata.processType;
    const pFollow  = formdata.followUP;


    this.router.navigate(['method',  name, 'ptype',  pType, 'pfollow',  pFollow]);

  // console.log( 'formdata', formdata);
  //   const quiz = new Quiz({
  //                   title : formdata.title,
  //                   description : formdata.description,
  //                   canRetryQuestion :  formdata.canRetry,
  // });

    // this.methodService.getProcessForAProject(name,ptype,pFollow).subscribe(()=>{
    //   // confirmation
    //   alert('searching  ');
    //   this.router.navigate(['/methods']);
    // } );


}

}


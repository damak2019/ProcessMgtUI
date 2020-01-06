import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
//import { MethodMappingDTO } from 'src/app/model/methodMapping';
import { MethodService } from 'src/app/services/method.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MappingMethodDTO } from 'src/app/model/mapping-method-dto';

@Component({
  selector: 'app-add-method-mapping',
  templateUrl: './add-method-mapping.component.html',
  styleUrls: ['./add-method-mapping.component.css']
})
export class AddMethodMappingComponent implements OnInit {



  methodID: number;

  methodMapping: MappingMethodDTO = new MappingMethodDTO();


  searchForm: FormGroup;

  constructor(private fb: FormBuilder,
              private methodService:  MethodService,
              private router: Router,
              private route: ActivatedRoute) {}





  ngOnInit() {

    this.methodID   =  Number(this.route.snapshot.paramMap.get('idMethod'));


    this.searchForm = this.fb.group({
      methodMappingName: ['Produit Agile', Validators.required]

  });
  }
  addMappingMethod() {


        const formdata = this.searchForm.value;
        const name  = formdata.methodMappingName;

        this.methodMapping.name = name;

        console.log(this.methodMapping);
        this.methodService.addMethodMapping(this.methodID, this.methodMapping).subscribe(

          ()=>{console.log(' addMethodMapping succes');
               this.router.navigate(['/methods'])},
          (error )=>{console.log('UNE ERREUR est arrivée update: '+ error.error.message )}

        );
}



}

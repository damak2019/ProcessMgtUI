import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { MethodService } from 'src/app/services/method.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtifactDTO } from 'src/app/model/artifact-dto';

@Component({
  selector: 'app-add-artifact',
  templateUrl: './add-artifact.component.html',
  styleUrls: ['./add-artifact.component.css']
})
export class AddArtifactComponent implements OnInit {

  methodID: number;
  processID: number;
  activityID: number;


  artifactDTO: ArtifactDTO = new ArtifactDTO();

  addArtifactForm: FormGroup;

  constructor(private fb: FormBuilder,
              private methodService:  MethodService,
              private router: Router,
              private route: ActivatedRoute) {}



  ngOnInit() {

    this.methodID   =  Number(this.route.snapshot.paramMap.get('idMethod'));
    this.processID   =  Number(this.route.snapshot.paramMap.get('idProcess'));
    this.activityID   =  Number(this.route.snapshot.paramMap.get('idActivity'));

    this.addArtifactForm = this.fb.group({
      artifactName: ['Dossier Architecture', Validators.required],
      artifactTag: ['Dos_Arch', Validators.required]

  });
  }

  addArtifactToProcessAvtivity() {

    const formdata = this.addArtifactForm.value;
    const name  = formdata.artifactName;
    const tag  = formdata.artifactTag;

    // getting data from form
    this.artifactDTO.name = name;
    this.artifactDTO.tag = tag;

    console.log(this.artifactDTO);

    this.methodService.addArtifactToActivity(this.methodID,  this.processID, this.activityID, this.artifactDTO).subscribe(

      () => {console.log(' addArtifactToActivity succes');
            // back to methods after adding Artifact
             this.router.navigate(['/methods']); },
            (error ) => {console.log('UNE ERREUR est arrivée update: ' + error.error.message ); }

     );

}



}
import { Injectable, Inject } from '@angular/core';
import { MethodDTO } from '../model/method-dto';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProcessDTO } from '../model/process-dto';
import { MethodMappingDTO } from '../model/methodMapping';
import { ProcessActivityDTO } from '../model/process-activity-dto';
import { ArtifactDTO } from '../model/artifact-dto';

@Injectable({
  providedIn: 'root'
})
export class MethodService {

constructor(private http: HttpClient,
            @Inject('BACKEND_URL')
            private baseUrl: string) { }


addMethod(  methodDTO: MethodDTO): Observable<void> {

  return  this.http.post<void>(`${this.baseUrl}/methods/`, methodDTO);

}

addMethodMapping( methodID: number, methodMappingDTO: MethodMappingDTO): Observable<void> {

  return  this.http.post<void>(`${this.baseUrl}/methods/${methodID}/methodMappings`, methodMappingDTO);

}

addProceesToMethod( methodID: number, processDTO: ProcessDTO): Observable<void> {

  return  this.http.post<void>(`${this.baseUrl}/methods/${methodID}/addProcess`, processDTO);

}

addProceesActivityToMethod( methodID: number,  processID: number , processActivityDTO: ProcessActivityDTO): Observable<void> {

  return  this.http.post<void>(`${this.baseUrl}/methods/${methodID}/process/${processID}/addProcessActivity`, processActivityDTO);

}

addArtifactToActivity(methodID: number, processID: number, activityID: number, artifactDTO: ArtifactDTO): Observable<void> {

  return  this.http.post<void>(`${this.baseUrl}/methods/${methodID}/process/${processID}/activity/${activityID}/addArtifact`, artifactDTO);

}




getAllMethods(): Observable<MethodDTO[]> {

  return this.http.get(`${this.baseUrl}/methods/`)
                  .pipe(
                        map((methodArray: any[]) => methodArray.map(methodData =>  new MethodDTO(methodData)))
                      );


}

getProcessForAProject(name : string,ptype : string,pfollow :string): Observable<ProcessDTO[]> {

  return this.http.get(`${this.baseUrl}/methods/${name}/ptype/${ptype}/pfollow/${pfollow}`)
                  .pipe(
                        map((processArray: any[]) => processArray.map(processData => new ProcessDTO(processData)))
                      );
                  }




// Catch (and rethrow).
private muteRequestError(err: any): Observable<any> {
  const errorMsg = `${err.statusText} (${err.status})`;
  return of(null);
  // return Observable.throw(new Error(errorMsg));
}

}

import { Injectable, Inject } from '@angular/core';
import { MethodDTO } from '../model/method-dto';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ProcessDTO } from '../model/process-dto';

@Injectable({
  providedIn: 'root'
})
export class MethodService {

constructor(private http: HttpClient,
            @Inject('BACKEND_URL')
            private baseUrl: string) { }



getMethods(): Observable<MethodDTO[]> {

  return this.http.get(`${this.baseUrl}/methods/`)
                  .pipe(
                        map((methodArray: any[]) => methodArray.map(methodData => new MethodDTO(methodData)))
                      );


}

getProcessForAProject(name : string,ptype : string,pfollow :string): Observable<ProcessDTO[]> {

  return this.http.get(`${this.baseUrl}/methods/${name}/ptype/${ptype}/pfollow/${pfollow}`)
                  .pipe(
                        map((processArray: any[]) => processArray.map(processData => new ProcessDTO(processData)))
                      );
                  }



// @RequestMapping(method = RequestMethod.GET, path = {"/methods/{name}/ptype/{ptype}/pfollow/{pfollow}"})

// public List<ProcessDTO> listProccessByMappedNameAndProcessTypeFollow  (@PathVariable("name") String name,
//                                                                 //  @PathVariable("pname") String pname,
//                                                                   @PathVariable("ptype") String ptype,
//                                                                   @PathVariable("pfollow") String pfollow) {
//     return MethodAdapter.adaptToProcessListDTO(this.methodService.listAllProccessByMappedNameAndProcessTypeFollow(name,ptype,pfollow));

// }


// getProduct(productId: number): Observable<Product> {
// return this.http.get(`${this.baseUrl}/products/${productId}`)
// .pipe(
// map((productData: any) => new Product(productData)),
// catchError(this.muteRequestError),
// );
//}




// saveProduct(product: Product): Observable<any> {
// const url = `${this.baseUrl}/products` + (product.id ? `/${product.id}` : '');
// const method = product.id ? 'put' : 'post';
// return this.http.request(method, url, {body: product});
// }




// Catch (and rethrow).
private muteRequestError(err: any): Observable<any> {
  const errorMsg = `${err.statusText} (${err.status})`;
  return of(null);
  // return Observable.throw(new Error(errorMsg));
}

}

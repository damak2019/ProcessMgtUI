import { Injectable, Inject } from '@angular/core';
import { MethodDTO } from '../model/method-dto';
import { map, catchError } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

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

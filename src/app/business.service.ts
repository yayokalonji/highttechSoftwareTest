import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BusinessService {  

  uri = 'http://192.168.1.78:4000/business';

  constructor(private http: HttpClient) { }

  addBusiness(person_name, business_name, business_gst_number) {
    const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
    console.log(obj);
    this.http.post(`${this.uri}/add`, obj)
        .subscribe(res => console.log('Done',res));
  }

  editBusiness(id:any) {
    return this
            .http
            .get(`${this.uri}/edit/${id}`);
    }

getBusinesses() {
  return this
         .http
         .get(`${this.uri}`);
}

deleteBusiness(id) {
  return this
            .http
            .get(`${this.uri}/delete/${id}`);
}

updateBusiness(person_name, business_name, business_gst_number, id) {

  const obj = {
      person_name: person_name,
      business_name: business_name,
      business_gst_number: business_gst_number
    };
  this
    .http
    .post(`${this.uri}/update/${id}`, obj)
    .subscribe(res => console.log('Done'));
}

}

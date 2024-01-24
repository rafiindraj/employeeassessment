import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BaseService } from 'src/app/core/services/base.service';
import { Configuration } from 'src/app/core/config/config';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService extends BaseService {
  private baseUrl = 'http://localhost:4200:'
  constructor(http: HttpClient) {
    super(http);
   }

  getEmployeeData(){
    return this.getData(Configuration.EMPLOYEE_URL)
  }
}

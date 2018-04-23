import {Injectable} from '@angular/core'
import {Http, Response} from '@angular/http'
import {Observable} from 'rxjs/Observable'
import 'rxjs/add/operator/map'

@Injectable()
export  class EmployeeService
{
    private urlApi: string ="http://5adadf6fba92a2001425c9a2.mockapi.io/api/employees/";
    constructor (private _http : Http)
    {

    }
    public GetList():Observable< any[]>
    {
      return this._http.get(this.urlApi).map((response:Response)=> response.json());
    }
    GetSingle(id: number): Observable<any> {
      return this._http.get(this.urlApi + id).map((response: Response) => response.json())
  }
}
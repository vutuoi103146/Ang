import {Injectable} from '@angular/core'

@Injectable()
export  class EmployeeService
{
    public GetList():any[]
    {
        let  employees:any[] = [
            {id:1, Name:"Lê Anh Vũ"},
            {id:2, Name:"Lê Anh Sơn"},
            {id:3, Name:"Lê Thị Ánh Tuyết"},
            {id:4, Name:"Lê Hồng Phong"},
            {id:4, Name:"Lê Thị Tâm"}
        ];
        return employees; 
    }
}
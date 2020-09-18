import { Injectable } from '@angular/core';
import * as XLSX from 'xlsx';
import * as FileSaver from 'file-saver';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.prod';
const EXCEL_TYPE = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8;'
const EXCEL_EXTENSION = '.xlsx';
@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl: any;
  constructor(private http: HttpClient) {
    this.baseUrl = environment.apiUrl;
  }
  exportdataasExcel(json: any[], excelFileName: string): void {
    const worksheet: XLSX.WorkSheet = XLSX.utils.json_to_sheet(json);
    console.log('worksheet', worksheet);
    const workbook: XLSX.WorkBook = {
      Sheets: { 'data': worksheet },
      SheetNames: ['data']
    };
    const excelBuffer: any = XLSX.write(workbook, { bookType: 'xlsx', type: 'array' });
    this.savaasExcel(excelBuffer, excelFileName);
  }
  private savaasExcel(buffer: any, FileName: string): void {
    const data: Blob = new Blob([buffer], {
      type: EXCEL_TYPE
    });
    FileSaver.saveAs(data, 'reports_' + new Date().getTime() + EXCEL_EXTENSION);
  }
  getAllExams() {
    return this.http.get(this.baseUrl+'admin/exam/view');
  }
  addExams(req)
  {
    return this.http.post(this.baseUrl+'admin/exam/add',req);
  }
  update(req,examId)
  {
    return this.http.put(this.baseUrl+'admin/exam/update/'+examId,req);
  }
  deleteexam(id)
  {
    return this.http.delete(this.baseUrl+'admin/exam/delete/'+id);
  }
  getallreports()
  {
    return this.http.get(this.baseUrl+'admin/reports');
  }
  selectexams(req)
  {
    return this.http.post(this.baseUrl+'user/exam',req);
  }
  getalluserExamsById(userId)
  {
    return this.http.get(this.baseUrl+'admin/usersexam/view/'+userId);

  }
}

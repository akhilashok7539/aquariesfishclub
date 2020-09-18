import { Component, Inject, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { AdminService } from '../service/admin.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-reports',
  templateUrl: './reports.component.html',
  styleUrls: ['./reports.component.css']
})
export class ReportsComponent implements OnInit {

  citys: any;
  searchString: any;
  sortedCity: any = [];
  displayedColumns = ['name', 'exam','description','email','phone',];
  limit: number = 5;
  skip: number = 0;
  totalLength: number = 0;
  pageIndex: number = 0;
  pageLimit: number[] = [5, 10];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: false }) paginator: MatPaginator;
  reports: any;
  imgurl: any;
  name: any;
  description: any;
  constructor(private adminservice:AdminService,@Inject(MAT_DIALOG_DATA) data,public dialog: MatDialog,private dialogRef: MatDialogRef<ReportsComponent>) 
  { 
    console.log(data)
    this.imgurl = data['fishimages'];
    this.name = data['fishName'];
    this.description = data['descriptionsmall'];

  }

  ngOnInit() {
    this.getallRports();
    
  
    }
    close(){
      this.dialog.closeAll();
    }
  changePage(event) {
    console.log(event)
  }
  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }
  applyFilter(filterValue: string) {
    filterValue = filterValue.trim(); // Remove whitespace
    filterValue = filterValue.toLowerCase(); // Datasource defaults to lowercase matches
    this.dataSource.filter = filterValue;
  }
  download(){
    console.log(this.reports)
    if(this.reports == undefined)
    {
      alert('There is no data to export');
      return;
    }
    this.adminservice.exportdataasExcel(this.reports,'sample');
  }
  getallRports(){
    this.adminservice.getallreports().subscribe(
      data =>{
        this.reports = data['responce'];
        this.dataSource.data = this.reports;
      },
      error =>{
        this.dataSource = new MatTableDataSource();

      }
    )
  }
}

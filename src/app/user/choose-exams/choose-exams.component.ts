import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AdminService } from 'src/app/adminpannel/service/admin.service';

@Component({
  selector: 'app-choose-exams',
  templateUrl: './choose-exams.component.html',
  styleUrls: ['./choose-exams.component.css']
})
export class ChooseExamsComponent implements OnInit {
  userDetails: any;
  userId: any;
  results: any;

  constructor(private router: Router,private adminservice:AdminService) { }

  ngOnInit() {
    this.userDetails = JSON.parse(localStorage.getItem('userlogin'));
    this.getallexamsByuSerId();
  }
  add() {
    this.router.navigate(['/addexams'])
  }
  getallexamsByuSerId(){
    this.userId = this.userDetails._id;
    this.adminservice.getalluserExamsById(this.userId).subscribe(
      data =>{
        this.results = data['responce'];
      },
      error=>{

      }
    )
  }
}

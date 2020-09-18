import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormArray, FormControl } from '@angular/forms';
import { AdminService } from 'src/app/adminpannel/service/admin.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-choose-exams-user',
  templateUrl: './choose-exams-user.component.html',
  styleUrls: ['./choose-exams-user.component.css']
})
export class ChooseExamsUserComponent implements OnInit {
  examForm:FormGroup;
  results: any;
  exmaslist:any;
  value:any;
  userDetails: any;
  constructor(private fb:FormBuilder,private router:Router,
    private adminservice:AdminService) { }

  ngOnInit() {
    this.examForm = this.fb.group({
      check :['',Validators.required],
      checkedExams: this.fb.array([]),
    })
    this.getAllExams();
    this.userDetails = JSON.parse(localStorage.getItem('userlogin'));
    
  }
  getAllExams(){
    this.adminservice.getAllExams().subscribe(
      data =>{
        this.results = data['responce'];
      },
      error =>{
      }
    )
  }
  onChange(exam: string, isChecked: boolean) {
    this.exmaslist = [];
    const emailFormArray = <FormArray>this.examForm.controls.checkedExams;
    if (isChecked) {
      emailFormArray.push(new FormControl(exam));
      this.value = emailFormArray['value']
      console.log(this.value)
      for (let j = 0; j < this.value.length; j++) {
        this.exmaslist.push(this.value[j]);
      }
      console.log(this.exmaslist)
    }
    else {
      let index = emailFormArray.controls.findIndex(x => x.value == exam)
      emailFormArray.removeAt(index);
    }
  }
  submit(){
    console.log(this.exmaslist)
    if(this.exmaslist == undefined)
    {
      alert('Choose atleast one exam');
      return;
    }
    let req = [];

    for(let j=0;j<this.exmaslist.length;j++){
      req.push( 
        {
          "userId":this.userDetails._id,
          "examName":this.exmaslist[j],
          "Name":this.userDetails.name,
          "email":this.userDetails.emailId,
          "phonenumber":this.userDetails.phone
        }
      )
    }
    console.log(req)
    this.adminservice.selectexams(req).subscribe(
      data =>{
        alert('Exam Added successfully');
        this.router.navigate(['/chooseExams']);
      },
      error =>{
        alert('please choose atleast one exams');
      }
    )
  }
}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Exam } from 'src/app/_models/exam';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-edit-exam',
  templateUrl: './edit-exam.component.html',
  styleUrls: ['./edit-exam.component.css']
})
export class EditExamComponent implements OnInit {
  examForm:FormGroup;
  examModel = new Exam();
  examId: any;
  submitted = false;
  constructor(private fb:FormBuilder,private router:Router,private activaterouter:ActivatedRoute,
    private adminservice:AdminService) { }

  ngOnInit() {
    this.examModel = new Exam();
    this.examForm = this.fb.group({
      examName:['',Validators.required],
      description: ['', Validators.required]
      });
      this.activaterouter.params.subscribe(params =>{
        console.log(params)
        this.examModel.examName = params.examName;
        this.examModel.description = params.discription;
        this.examId = params._id;
      })
  }
  get f() { return this.examForm.controls; }

  update(){
    this.submitted = true;
    if (this.examForm.invalid) {
      return;
    }
    else  if (this.examForm.valid)
    {
    let req = {
      "examName":this.examModel.examName,
      "discription":this.examModel.description
    }
    this.adminservice.update(req,this.examId).subscribe(
      data =>{
        this.router.navigate(['/adminpannel']);
      },
      error =>{
        
      }
    )
    }
  }
}


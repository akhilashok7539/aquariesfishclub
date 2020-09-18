import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Exam } from 'src/app/_models/exam';
import { Router, ActivatedRoute } from '@angular/router';
import { AdminService } from '../../service/admin.service';

@Component({
  selector: 'app-addexams',
  templateUrl: './addexams.component.html',
  styleUrls: ['./addexams.component.css']
})
export class AddexamsComponent implements OnInit {
  examForm: FormGroup;
  examModel = new Exam();
  submitted = false;
  constructor(private fb: FormBuilder, private router: Router, private activaterouter: ActivatedRoute,
    private adminservice: AdminService) { }

  ngOnInit() {
    this.examModel = new Exam();
    this.examForm = this.fb.group({
      examName: ['', Validators.required],
      description: ['', Validators.required]
    });
    this.activaterouter.params.subscribe(params => {
      console.log(params)

      // this.examModel.examName = params.examName;
      // this.examModel.description = params.discription;

    })
  }
  get f() { return this.examForm.controls; }
  create() {
    this.submitted = true;
    if (this.examForm.invalid) {
      return;
    }
    else  if (this.examForm.valid)
    {
      let req = {
        "examName": this.examModel.examName,
        "discription": this.examModel.description
      }
    this.adminservice.addExams(req).subscribe(
      data => {
        this.router.navigate(['/adminpannel']);
      },
      error => {

      }
    )
    }

  }
}

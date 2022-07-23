import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray  } from '@angular/forms';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})

export class SignupComponent implements OnInit {
 frmValue = new FormGroup({
  contactNo:new FormControl(),
  firstName:new FormControl(),
  gender: new FormControl(),
   });
  constructor(private formBuilder:FormBuilder) { }

  ngOnInit(): void {
    // this.frmValue=this.formBuilder.group({
    //   regNo:[''],
    //   fristName:[''],
    //   gender: [''],
    //   descipline:[''],
    //   name: this.formBuilder.array([])
    //      })
  }

  signup(){
    console.log(this.frmValue)
  }

}

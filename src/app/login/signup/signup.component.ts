import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, FormArray  } from '@angular/forms';
import { GlobalService } from 'src/app/services/global.service';
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
  constructor(private formBuilder:FormBuilder,
    public globalService:GlobalService) { }

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
    if(this.frmValue.valid){
    var  url=this.globalService.baseUrl+"api/user/savestudent";
    var data={
        contact:this.frmValue.value.contactNo,
        name:this.frmValue.value.firstName,
        gender:this.frmValue.value.gender,
      }
      console.log(data)
      this.globalService.PostRequest(url,data).subscribe((res:any)=> {
       console.log(res);
      },
      (err:any)=>{
        console.log(err);
      })
    }else{
      
    }
  }

}

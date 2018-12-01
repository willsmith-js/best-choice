import {Component, OnInit} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.scss']
})
export class ContactUsComponent implements OnInit {

  public contactUsForm: FormGroup;

  constructor() {
  }

  ngOnInit() {
    // console.log(this.contactUsForm.controls["name"])
  }

  public submitContactForm(): void {

    //if(this.contactUsForm.invalid){
    // this.validateAllFormFields(this.contactUsForm);
    //} else {
    // console.log(this.contactUsForm.getRawValue());
    // this.contactUsForm.reset();
    //}
  }

  public addPhoneControl(): void {
    /*const phoneControls = (<FormArray>this.contactUsForm.controls['phones'].controls);

    if(phoneControls.length < 4) {
      phoneControls.push(new FormControl('+374'));
    }*/
  }

}

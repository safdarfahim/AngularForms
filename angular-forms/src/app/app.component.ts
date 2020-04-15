import { Component, ElementRef, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
defaultQuestion='pet';
answer='';

genders=['male','female'];
  suggestUserName() {
    const suggestedName = 'Superuser';
    this.signupForm.form.patchValue({
      userData:{
        username:suggestedName
      }
    }
    );
  }
 @ViewChild('f') signupForm:NgForm;
  // onSubmit( form:NgForm){
  //   debugger;
  //   console.log(form);
  // }

  onSubmit( form:NgForm){
    console.log(this.signupForm);
  }

}

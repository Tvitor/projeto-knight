import { KnightsService } from './../modules/knights.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-knight-form',
  templateUrl: './knight-form.component.html',
  styleUrls: ['./knight-form.component.css']
})
export class KnightFormComponent implements OnInit {

  form: FormGroup
  submitted = false;

  constructor(private fb: FormBuilder, private service: KnightsService) { }

  ngOnInit() {

    this.form = this.fb.group({
      name: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(45)]],
      nickname: [null, [Validators.required, Validators.minLength(3), Validators.maxLength(45)]],
      birthday: [null],
      // weapons: [{
      //   name:[null],
      //   mod:[null],
      //   attr:[null],
      //   equipped:[false],
      //   amount:[null]
      // }],
      // attributes: [{
      //   type:[null],
      //   dexterity:[null],
      //   constitution:[null],
      //   inteligence:[null],
      //   wisdom:[null],
      //   charisma:[null],
      // }],
      keyAttribute:[null],

    });

  }

hasError(field: string){
  return this.form.get(field).errors
}

onSubmit(){
  this.submitted = true;
  console.log(this.form.value)
  if(this.form.valid) {
    console.log('submit')
    this.service.create(this.form.value).subscribe(
      sucess => console.log('sucess')
    )
  }
}
onCancel(){
  this.submitted = false;
  this.form.reset()

}
}

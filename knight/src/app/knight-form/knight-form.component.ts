import { KnightsService } from './../modules/knights.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-knight-form',
  templateUrl: './knight-form.component.html',
  styleUrls: ['./knight-form.component.css']
})
export class KnightFormComponent implements OnInit {

 knightForm: FormGroup

  submitted = false;

  constructor(private fb: FormBuilder, private service: KnightsService) { }

  ngOnInit() {

    this.knightForm = this.fb.group({

      name: new FormControl('exampleKnight'),
      nickname: new FormControl('example'),
      birthday: new FormControl('1700-05-05'),
      weapons:this.fb.group({
        name: new FormControl('magic'),
        mod:new FormControl(3),
        attr:new FormControl('force'),
        equipped:new FormControl(true),
      }),

      attributes:this.fb.group ({
        strength:new FormControl(3),
        dexterity:new FormControl(3),
        constitution:new FormControl(3),
        inteligence:new FormControl(3),
        wisdom:new FormControl(3),
        charisma:new FormControl(3),
      }),

      keyAttribute:new FormControl('inteligence'),
      status: new FormControl(false) //default


      // name:[""],
      // nickname:[""],
      // birthday: [null],
      // keyAttribute:[null],
      // weapons: this.fb.group({
      //   name:[""],
      //   attr:[""]
      // })
    })

  }

hasError(field: string){
  return this.knightForm.get(field).errors
}

onSubmit(){
  this.submitted = true;
  console.log(this.knightForm.value)
  if(this.knightForm.valid) {
    console.log('submit')
    this.service.create(this.knightForm.value).subscribe(
      sucess => console.log('sucess')
    )
  }
}
onCancel(){
  this.submitted = false;
  this.knightForm.reset()

}
}

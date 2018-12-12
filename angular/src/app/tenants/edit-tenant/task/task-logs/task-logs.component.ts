import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormArray } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-task-logs',
  templateUrl: './task-logs.component.html',
  styleUrls: ['./task-logs.component.less']
})
export class TaskLogsComponent {

  data = {
    taskmeng: [
    ]
  }

  myForm: FormGroup;
  id: number = parseInt(this.route.snapshot.paramMap.get('id'));



  
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute
    ) {
    this.myForm = this.fb.group({
      Prodname: [this.id],
      taskmeng: this.fb.array([])
     
    })

    this.settaskmeng();
  }

  onSubmit() {
    alert(this.myForm.value);
  }

  addNewsprintname() {
    let control = <FormArray>this.myForm.controls.taskmeng;
    control.push(
      this.fb.group({
        sprintname: [''],
        tablenames: this.fb.array([])
      })
    )
  }

  deletesprintname(index) {
    let control = <FormArray>this.myForm.controls.taskmeng;
    control.removeAt(index)
  }

  addNewtablename(control) {
    control.push(
      this.fb.group({
        tablename: [''],
        tabletask: this.fb.array([])
      }))
  }

  deletetablename(control, index) {
    control.removeAt(index)
  }

  settaskmeng() {
    let control = <FormArray>this.myForm.controls.taskmeng;
    this.data.taskmeng.forEach(x => {
      control.push(this.fb.group({ 
        sprintname: x.sprintname, 
        tablenames: this.settablenames(x) }))
    })
  }

  settablenames(x) {
    let arr = new FormArray([])
    x.tablenames.forEach(y => {
      arr.push(this.fb.group({ 
        tablename: y.tablename 
      }))
    })
    return arr;
  }
}



import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-course-form',
  templateUrl: './add-course-form.component.html',
  styleUrls: ['./add-course-form.component.css']
})
export class AddCourseFormComponent implements OnInit {

  // name: string;
  // duration: number;
  // isPaid: boolean;
  // startDate: Date;
  // endDate: Date;

  @Input() showAddCourse:boolean = true;
  public nameError: boolean = false;
  public form!: FormGroup;

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
    this.initForm()
  }

  private initForm(){
    this.form = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.maxLength(10)]),
      duration: this.fb.control('', [Validators.required]),
      isPaid: this.fb.control(false, [Validators.required]),
      startDate: this.fb.control('', [Validators.required]),
      endDate: this.fb.control('', [Validators.required])
    })
  }

  public onAddCourse() {
    console.log('form: ', this.form.value);    
  }

}

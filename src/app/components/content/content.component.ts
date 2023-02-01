import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Student } from 'src/app/Interfaces/Student.interface';
import { MatDialog } from '@angular/material/dialog';
import { AddCourseFormComponent } from '../add-course-form/add-course-form.component';
import { Courses } from 'src/app/Interfaces/Courses.interface';


@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  public students: Array<Student> = [
    {name: 'Alan', lastName: 'Sanchez', isActive: true, courses: []},
    {name: 'Rosa', lastName: 'Mejia', isActive: true, courses: []},
    {name: 'Juan', lastName: 'Perez', isActive: true, courses: []},
    {name: 'Andres', lastName: 'Filgueira', isActive: false, courses: []},
    {name: 'Luciana', lastName: 'Padua', isActive: true, courses: []},
  ]

  public courses: Array<Courses> = [
    { name: 'Angular', isPaid: true, duration: 2, endDate: new Date('15/01/2023'), startDate: new Date('31/03/2023') }
  ]

  constructor(private dialog: MatDialog) { }

  ngOnInit() {
  }

  // public edit(game?: IScheduledGame) {
  //   const data: GameEditComponentData = {
  //     ...game,
  //     eventId: this.event.id,
  //     programId: this.event.program.id
  //   }
  //   this.dialog.open(GameEditComponent, {
  //     data,
  //     ...environment.dialogDefaults,
  //     width: "65%"
  //   }).afterClosed().pipe(
  //     filter(v => !!v)
  //   ).subscribe(() => this.load());
  // }

  public addCourse() {
    this.dialog.open(AddCourseFormComponent)
    console.log('Abre modal para agrear curso');
  }

  public activateStudent(){
    console.log('Activa estudiante');
  }

}

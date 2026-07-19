import {
  Component,
  Input,
  Output,
  EventEmitter,
  OnChanges,
  SimpleChanges
} from '@angular/core';
import { CommonModule } from '@angular/common';

import { Highlight } from '../../directives/highlight';
import { EnrollmentService } from '../../services/enrollment';

@Component({
  selector: 'app-course-card',
  standalone: true,
  imports: [
    CommonModule,
    Highlight
  ],
  templateUrl: './course-card.html',
  styleUrl: './course-card.css'
})
export class CourseCard implements OnChanges {

  @Input() course: any;

  @Output() enrollRequested = new EventEmitter<number>();

  constructor(
    private enrollmentService: EnrollmentService
  ) {}

  ngOnChanges(changes: SimpleChanges): void {
    console.log('Course Changed', changes);
  }

  onEnroll() {
    this.enrollmentService.enroll(this.course.id);
    this.enrollRequested.emit(this.course.id);
  }

}
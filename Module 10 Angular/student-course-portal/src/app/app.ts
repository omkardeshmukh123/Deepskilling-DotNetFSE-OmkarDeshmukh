import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EnrollmentForm } from './pages/enrollment-form/enrollment-form';
import { Header } from './components/header/header';
import { Home } from './pages/home/home';
import { CourseList } from './pages/course-list/course-list';
import { ReactiveEnrollmentForm } from './pages/reactive-enrollment-form/reactive-enrollment-form';
import { StudentProfile } from './pages/student-profile/student-profile';
import { Notification } from './components/notification/notification';
import { RouterLink } from '@angular/router';

@Component({
selector:'app-root',
imports:[
RouterOutlet,
EnrollmentForm,
ReactiveEnrollmentForm,
Header,
Home,
CourseList,
StudentProfile,
Notification
],
templateUrl:'./app.html',
styleUrl:'./app.css'
})
export class App{}
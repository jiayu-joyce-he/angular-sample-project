import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { Course } from './courses/course';
import { COURSES } from './courses/mock-courses';
import { MessagesService } from './messages.service';

@Injectable({
  providedIn: 'root',
})
export class CourseService {
  getCourses(): Observable<Course[]> {
    this.MessagesService.add('CourseService: feached courses');
    return of(COURSES);
  }

  constructor(private MessagesService: MessagesService) {}
}

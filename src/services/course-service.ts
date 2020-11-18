import {Injectable} from '@angular/core';


@Injectable()
export class CourseService {
  findCourseById = (courseId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/mpoulos/courses/${courseId}`)
      .then(response => response.json())
  fetchAllCourses = () =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/mpoulos/courses')
      .then(response => response.json())

  createCourse = () =>
    fetch('https://wbdv-generic-server.herokuapp.com/api/mpoulos/courses',
      {
        method: 'POST',
        body: JSON.stringify({title: 'New Course'}),
        headers: {
          'content-type': 'application/json'
        }
      })
      .then(response => response.json())

  deleteCourse = (course) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/mpoulos/courses/${course._id}`,
      {
        method: 'DELETE'
      })
      .then(response => response.json())
}


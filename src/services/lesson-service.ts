import {Injectable} from '@angular/core';


@Injectable()
export class LessonService {
  findLessonsForModuleId = (moduleId) =>
    fetch(`https://wbdv-generic-server.herokuapp.com/api/mpoulos/modules/${moduleId}/lessons`)
      .then(response => response.json())

}


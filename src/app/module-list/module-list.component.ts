import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ModuleService} from '../../services/module-service';

@Component({
  selector: 'app-module-list',
  templateUrl: './module-list.component.html',
  styleUrls: ['./module-list.component.css']
})
export class ModuleListComponent implements OnInit {

  modules = [];
  courseId = '';
  moduleId = ''

  selectedModule = {
    id: ''
  };

  selectModule = (module) => {
    this.selectedModule = module;
  }

  constructor(private activatedRoute: ActivatedRoute,
              private moduleService: ModuleService) { }


  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params => {
      this.courseId = params.courseId;
      this.moduleId = params.moduleId;

      if (typeof this.courseId !== 'undefined') {
        this.moduleService.findModulesForCourseId(this.courseId)
          .then(actualModules => this.modules = actualModules);
      }
    });

    console.log(this.modules);
  }

}


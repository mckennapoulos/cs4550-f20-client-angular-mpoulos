import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CourseNavigatorComponent } from './course-navigator/course-navigator.component';
import {CourseService} from '../services/course-service';
import {ModuleService} from '../services/module-service';
import { CourseViewerComponent } from './course-viewer/course-viewer.component';
import { LessonTabsComponent } from './lesson-tabs/lesson-tabs.component';
import { ModuleListComponent } from './module-list/module-list.component';
import { TopicPillsComponent } from './topic-pills/topic-pills.component';
import { WidgetListComponent } from './widget-list/widget-list.component';
import { CourseTableComponent } from './course-table/course-table.component';
import {LessonService} from '../services/lesson-service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import {QuizzesServiceClient} from '../services/quiz.server.client';
import {QuestionsServiceClient} from '../services/question.server.client';
import { QuizzesComponent } from './quizzes/quizzes.component';
import { QuizComponent } from './quiz/quiz.component';
import { TrueFalseQuestionComponent } from './true-false-question/true-false-question.component';
import { MultipleChoiceQuestionComponent } from './multiple-choice-question/multiple-choice-question.component';


@NgModule({
  declarations: [
    AppComponent,
    CourseNavigatorComponent,
    CourseViewerComponent,
    LessonTabsComponent,
    ModuleListComponent,
    TopicPillsComponent,
    WidgetListComponent,
    CourseTableComponent,
    QuizzesComponent,
    QuizComponent,
    TrueFalseQuestionComponent,
    MultipleChoiceQuestionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [
    CourseService,
    ModuleService,
    LessonService,
    QuizzesServiceClient,
    QuestionsServiceClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

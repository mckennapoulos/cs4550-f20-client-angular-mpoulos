import {Component, Input, OnInit, Output} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-true-false-question',
  templateUrl: './true-false-question.component.html',
  styleUrls: ['./true-false-question.component.css']
})
export class TrueFalseQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', choices: '', correct: '', answer: '', type: '' };

  @Input()
  item: string;

  @Input()
  answer = '';

  @Output()
  answerChange = new EventEmitter<string>();

  selectedChoice = '';

  grading = false;
  correctAnswer = false;
  faCheck = faCheck; faTimes = faTimes;

  change = (val) => {
    this.selectedChoice = val;
  }

  grade = () => {
    console.log(this.question);
    this.correctAnswer = this.selectedChoice === this.question.correct;
    this.grading = true;
  }

  constructor() { }

  ngOnInit(): void {
  }

  submitAnswer = () => {
    this.answerChange.emit(this.answer);
  }
}

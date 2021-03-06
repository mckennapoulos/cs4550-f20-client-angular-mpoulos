import {Component, Input, OnInit, Output} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from '@angular/router';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: '', type: '' };

  @Input()
  item: string;

  @Input()
  answer = ''

  selectedChoice = ''

  grading = false;
  correctAnswer = false
  faCheck = faCheck; faTimes = faTimes;

  @Output()
  answerChange = new EventEmitter<string>()

  change = (val) => {
    this.selectedChoice = val;
    console.log(this.selectedChoice);
  }

  grade = () => {
    this.correctAnswer = this.selectedChoice === this.question.correct;
    this.grading = true;
  }

  ngOnInit(): void {
  }

  submitAnswer = () => {
    this.answerChange.emit(this.answer);
  }

}

import {Component, Input, OnInit} from '@angular/core';
import {faCheck, faTimes} from '@fortawesome/free-solid-svg-icons';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-multiple-choice-question',
  templateUrl: './multiple-choice-question.component.html',
  styleUrls: ['./multiple-choice-question.component.css']
})
export class MultipleChoiceQuestionComponent implements OnInit {

  @Input()
  question = {_id: '', title: '', question: '', choices: [], correct: '', answer: '' };

  @Input()
  item: string;

  selectedChoice = ''

  grading = false;
  correctAnswer = false
  faCheck = faCheck; faTimes = faTimes;

  change = (val) => {
    this.selectedChoice = val;
    console.log(this.selectedChoice);
  }

  grade = () => {
    this.correctAnswer = this.selectedChoice === this.question.correct;
    this.grading = true;
  }

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
  }

}

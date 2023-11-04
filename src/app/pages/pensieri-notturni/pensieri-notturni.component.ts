import { Component } from '@angular/core';
import { PensieriService, ThoughtPrompt } from 'src/app/services/pensieri.service';

@Component({
  selector: 'app-pensieri-notturni',
  templateUrl: './pensieri-notturni.component.html',
  styleUrls: ['./pensieri-notturni.component.css']
})
export class PensieriNotturniComponent {

  constructor(private pensieriService: PensieriService) {}

  public currentPrompt = '';

  public cardNumber: number = 0;

  public total: number = 0;

  ngOnInit(): void {
    this.total = this.pensieriService.getTotal();
    this.renderNextPrompt();
  }

  randomPrompt(): ThoughtPrompt {
    return this.pensieriService.getRandomThought();
  }

  renderNextPrompt(): void {
    const prompt = this.randomPrompt();
    this.currentPrompt = prompt.data;
    this.cardNumber = prompt.id;
  }

  chooseById(id: number) {
    const prompt = this.pensieriService.getThoughtById(id);
    this.currentPrompt = prompt.data;
    this.cardNumber = prompt.id;
  }
}

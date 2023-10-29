import { Component, OnInit } from '@angular/core';
import { ButtonPrompt, PressButtonService } from 'src/app/services/press-button.service';

@Component({
  selector: 'app-press-the-button',
  templateUrl: './press-the-button.component.html',
  styleUrls: ['./press-the-button.component.css']
})
export class PressTheButtonComponent implements OnInit {

  constructor(private pressTheButtonService: PressButtonService) {}

  public granted: string = '';

  public condition: string = '';

  public cardNumber: number = 0;

  public total: number = 0;

  ngOnInit(): void {
    this.total = this.pressTheButtonService.getTotal();
    this.renderNextPrompt();
  }

  nextPrompt(): { id: number, data: ButtonPrompt } {
    return this.pressTheButtonService.getRandomButtonPrompt();
  }

  renderNextPrompt(): void {
    let startingPrompt = this.nextPrompt();
    this.granted = startingPrompt.data.pros;
    this.condition = startingPrompt.data.cons;
    this.cardNumber = startingPrompt.id;
  }
}

import { Injectable } from '@angular/core';
import { prompts } from 'src/assets/configs/pressTheButtonConfig';

export interface ButtonPrompt {
  pros: string;
  cons: string;
}

@Injectable({
  providedIn: 'root',
})
export class PressButtonService {

  public getRandomButtonPrompt(): { id: number; data: ButtonPrompt } {
    let choice = Math.floor(Math.random() * prompts.length);
    return { id: choice, data: prompts[choice] };
  }

  public getPromptById(id: number): {id: number; data: ButtonPrompt} {
    return { id: id, data: prompts[id] };
  }

  public getTotal() {
    return prompts.length;
  }
}

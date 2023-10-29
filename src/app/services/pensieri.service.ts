import { Injectable } from '@angular/core';
import { pensieri as prompts } from 'src/assets/configs/pensieriNotturniConfig';

export interface ThoughtPrompt {
  data: string;
  id: number;
}

@Injectable({
  providedIn: 'root',
})
export class PensieriService {
  public getRandomThought(): { id: number; data: string } {
    let choice = Math.floor(Math.random() * prompts.length);
    return { id: choice, data: prompts[choice] };
  }

  public getTotal() {
    return prompts.length;
  }
}

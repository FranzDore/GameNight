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
  public getRandomThought(): ThoughtPrompt {
    let choice = Math.floor(Math.random() * prompts.length);
    return { id: choice, data: prompts[choice] };
  }

  public getThoughtById(id: number): ThoughtPrompt {
    return {
      id: id < 0 ? prompts.length - 1 : id % prompts.length,
      data:
        id <= 0 ? prompts[prompts.length - 1] : prompts[id % prompts.length],
    };
  }

  public getTotal() {
    return prompts.length;
  }
}

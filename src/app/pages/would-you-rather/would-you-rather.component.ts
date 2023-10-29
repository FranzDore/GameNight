import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { WouldYouRatherService } from 'src/app/services/would-you-rather.service';

@Component({
  selector: 'app-rather',
  templateUrl: './would-you-rather.component.html',
  styleUrls: ['./would-you-rather.component.css'],
})
export class WouldYouRatherComponent implements OnInit, OnDestroy {
  constructor(private ratherService: WouldYouRatherService) {}

  private subscription!: Subscription;

  public currentPrompt?: { id: number; data: string };

  public cardNumber: number = 0;

  public loading: boolean = false;

  public error: boolean = false;

  public acknowledged: boolean = false;

  ngOnInit(): void {
    this.nextPrompt();
  }

  public nextPrompt() {
    this.loading = true;
    this.subscription = this.ratherService.getPrompt().subscribe(
      (prompt) => {
        this.error = false;
        this.loading = false;
        this.currentPrompt = prompt;
      },
      (error) => {
        console.error('Errore nella richiesta:', error);
        this.error = true;
        this.currentPrompt = undefined;
      }
    )
  }

  setAck(): void {
    this.acknowledged = true;
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe();
  }
}

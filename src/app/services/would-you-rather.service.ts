import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WouldYouRatherService {

  private readonly apiUrl: string = 'https://would-you-rather-api.abaanshanid.repl.co/'

  constructor(private http: HttpClient) { }

  public getPrompt(): Observable<any> {
    return this.http.get(this.apiUrl);
  }

  public getpromptById(id: number): Observable<any> {
    const url = `${this.apiUrl}?id=${id}`;
    return this.http.get(url);
  }
}

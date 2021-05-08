import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MessagesService {
  message: string = '';
  messages: string[] = [];

  constructor() {}

  add(message: string): void {
    this.messages.push(message);
    this.message = '';
  }

  clear(): void {
    this.messages = [];
  }
}

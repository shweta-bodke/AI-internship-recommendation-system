import { Component } from '@angular/core';

import {
  RouterOutlet,
  RouterLink
} from '@angular/router';

import { AiChatbot } from './auth/ai-chatbot/ai-chatbot';

@Component({

  selector: 'app-root',

  standalone: true,

  imports: [
    RouterOutlet,
    RouterLink,
    AiChatbot
  ],

  templateUrl: './app.html',

  styleUrl: './app.css',

})

export class App {

}
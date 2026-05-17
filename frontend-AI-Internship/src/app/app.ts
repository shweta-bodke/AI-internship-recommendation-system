import { Component, OnInit } from '@angular/core';

import { ApiService } from './auth/services/api';

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

export class App implements OnInit {

  message: any;

  constructor(private api: ApiService) {}

  ngOnInit() {

    this.api.getMessage().subscribe(data => {

      console.log(data);

      this.message = data;

    });

  }

}
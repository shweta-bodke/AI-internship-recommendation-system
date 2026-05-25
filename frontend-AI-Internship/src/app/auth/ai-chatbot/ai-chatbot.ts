import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ai-chatbot',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './ai-chatbot.html',
  styleUrl: './ai-chatbot.css'
})

export class AiChatbot {

  isOpen = false;

  message = '';

  userMessage = '';

  botReply = '';

  toggleChat(){

    this.isOpen = !this.isOpen;

  }

  sendMessage(){

    this.userMessage = this.message;

    const text =
    this.message.toLowerCase();

    // SIMPLE AI RESPONSES

    if(text.includes('data analyst')){

      this.botReply =
      'Based on your profile, Data Analyst internships at Infosys and Deloitte are highly recommended.';

    }

    else if(text.includes('resume')){

      this.botReply =
      'Your resume should include skills, projects, certifications and achievements clearly.';

    }

    else if(text.includes('skills')){

      this.botReply =
      'You should learn SQL, Power BI, Python and Machine Learning to improve your profile.';

    }

    else if(text.includes('interview')){

      this.botReply =
      'Prepare SQL queries, Excel concepts, Python basics and communication questions.';

    }

    else{

      this.botReply =
      'I can help you with internships, resume building, interview preparation and career guidance.';

    }

    this.message = '';

  }

}
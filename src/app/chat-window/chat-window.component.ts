import { Component } from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent {
  message: string = '';
  file: File | null = null;
  messages: Array<{ text: string, file: File | null, type: 'sent' | 'received' }> = [];

  onFileSelected(event: any) {
    this.file = event.target.files[0];
  }

  sendMessage() {
    if (this.message || this.file) {
      // Add the message and file to the messages array
      this.messages.push({
        text: this.message,
        file: this.file,
        type: 'sent'
      });

      // Clear the input fields
      this.message = '';
      this.file = null;
    }
  }

  getFileUrl(file: File): string {
    return URL.createObjectURL(file);
  }
}

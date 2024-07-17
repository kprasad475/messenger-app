import { Component ,ChangeDetectorRef} from '@angular/core';

@Component({
  selector: 'app-chat-window',
  templateUrl: './chat-window.component.html',
  styleUrl: './chat-window.component.css'
})
export class ChatWindowComponent {
  message: string;
  messages: { text: string, type: string, timestamp: string, file?: File }[] = [];

  sendMessage(fileInput: HTMLInputElement) {
    const files = fileInput.files;
    const hasFile = files && files.length > 0;

    if (this.message.trim() || hasFile) {
      const msg = {
        text: this.message,
        type: 'sent', // Change 'sent' to 'received' as necessary
        timestamp: new Date().toLocaleTimeString() + ', Today',
        file: hasFile ? files[0] : undefined
      };
      this.messages.push(msg);
      this.message = '';
      if (fileInput) {
        fileInput.value = '';
      }
    }
  }

  getFileUrl(file: File): string {
    return URL.createObjectURL(file);
  }
}

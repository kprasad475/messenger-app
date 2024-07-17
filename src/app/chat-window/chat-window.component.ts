import { Component ,ChangeDetectorRef} from '@angular/core';

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
    console.log('File selected:', this.file);
  }

  sendMessage(fileInput: any) {
    console.log('sendMessage called');
    console.log('Message:', this.message);
    console.log('File:', this.file);

    if (this.message.trim() || this.file) {
      this.messages.push({
        text: this.message.trim(),
        file: this.file,
        type: 'sent'
      });

      // Clear the input fields
      this.message = '';
      this.file = null;
      fileInput.value = '';
    } else {
      console.log('Condition not met');
    }
  }



  getFileUrl(file: File): string {
    return URL.createObjectURL(file);
  }
}

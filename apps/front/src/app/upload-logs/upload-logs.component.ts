import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-upload-logs',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './upload-logs.component.html',
  styleUrls: ['./upload-logs.component.css'],
})
export class UploadLogsComponent {
  logs = '';

  constructor(private http: HttpClient) {}

  uploadLogs() {
    this.http.post('/api/logs', { logs: this.logs }).subscribe((response) => {
      console.log('Logs uploaded', response);
    });
  }
}

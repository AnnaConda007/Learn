import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { UploadLogsComponent } from './upload-logs/upload-logs.component'; // Импортируйте ваш компонент
import { HttpClientModule } from '@angular/common/http'; // Импортируйте HttpClientModule

@Component({
  standalone: true,
  imports: [
    NxWelcomeComponent,
    RouterModule,
    UploadLogsComponent,
    HttpClientModule,
  ], // Добавьте ваш компонент в массив imports
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'front';
}

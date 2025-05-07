import { Component, HostListener } from '@angular/core';
import { SpinnerService } from './services/spinner.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lumi-web';

  constructor(private spinnerService: SpinnerService) { }
  spinner$ = this.spinnerService.spinner$;

  @HostListener('mousemove', ['$event'])
  onMouseMove(event: MouseEvent): void {
    const circle = document.createElement('div');
    circle.classList.add('circle');
    document.body.appendChild(circle);

    const x = event.clientX;
    const y = event.clientY;

    circle.style.left = `${x - 25}px`; // Centraliza o círculo no cursor
    circle.style.top = `${y - 25}px`;

    setTimeout(() => {
      circle.remove();
    }, 1500);
  }
}

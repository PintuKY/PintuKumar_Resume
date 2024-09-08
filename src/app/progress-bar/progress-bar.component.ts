import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent {
  @Input() progress: number = 0;
  @Input() progress1: number = 0;
  @Input() progress2: number = 0;
  @Input() progress3: number = 0;
  @Input() progress4: number = 0;
}
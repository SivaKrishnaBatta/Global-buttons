import { Component,} from '@angular/core';
import { CommonModule } from '@angular/common';

type ButtonType =
  | 'primary'
  | 'secondary'
  | 'tertiary'
  | 'warning'
  | 'negative'
  | 'positive'
  | 'highlight';

@Component({
  selector: 'app-button-demo',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button-demo.html',
  styleUrl: './button-demo.scss'
})
export class ButtonDemo {
buttonTypes: ButtonType[] = [
    'primary',
    'secondary',
    'tertiary',
    'warning',
    'negative',
    'positive',
    'highlight',
   
  ];

}

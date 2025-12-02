import { Component,} from '@angular/core';
import { CommonModule } from '@angular/common';
import { Button } from '../../components/button/button';

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
  imports: [CommonModule, Button],
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

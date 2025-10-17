import { Component,Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button-sizes',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './button-sizes.html',
  styleUrl: './button-sizes.scss'
})
export class ButtonSizes {
  @Input() size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' = 'medium';
@Input() variant: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'negative' | 'positive' | 'highlight' = 'primary';
@Input() loading = false;
@Input() disabled = false;
@Input() label = 'Button Label';


}

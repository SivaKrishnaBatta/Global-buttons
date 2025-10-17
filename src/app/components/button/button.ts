import { Component,Input,ViewEncapsulation  } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  imports: [CommonModule],
   standalone: true,
  templateUrl: './button.html',
  styleUrl: './button.scss',
  
})
export class Button {
  @Input() label = 'Button Label';
  @Input() type: 'primary' | 'secondary' | 'tertiary' | 'warning' | 'negative' | 'positive' | 'highlight' | 'support-primary' | 'support-secondary' | 'support-tertiary' = 'primary';
  @Input() size: 'xsmall' | 'small' | 'medium' | 'large' | 'xlarge' | 'xxlarge' = 'medium';
  @Input() disabled = false;
  @Input() loading = false;

   onClick() {
    if (!this.disabled && !this.loading) {
      console.log('Button clicked:', this.label);
    }
  }

}

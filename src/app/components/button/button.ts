import { Component, Input, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './button.html',
  styleUrl: './button.scss',
})
export class Button implements OnInit {
  @Input() label = 'Button Label';
  @Input() type:
    | 'primary'
    | 'secondary'
    | 'tertiary'
    | 'warning'
    | 'negative'
    | 'positive'
    | 'highlight' = 'primary';
  @Input() size:
    | 'xsmall'
    | 'small'
    | 'medium'
    | 'large'
    | 'xlarge'
    | 'xxlarge' = 'medium';

  @Input() state: 'rest' | 'hover' | 'active' | 'focus' = 'rest';

  
  @Input() disabled = false;
  @Input() loading = false;

  ngOnInit(): void {
    console.log('Button type:', this.type, 'size:', this.size);
  }

  onClick() {
    if (!this.disabled && !this.loading) {
      console.log('Button clicked:', this.label);
    }
  }
}

import { Component } from '@angular/core';

@Component({
  selector: 'app-testing',
  imports: [],
  templateUrl: './testing.html',
  styleUrl: './testing.scss'
})
export class Testing {
   isHovered = false;
  isPressed = false;
  isFocused = false;
  isDisabled = false;

  onMouseEnter() { this.isHovered = true; }
  onMouseLeave() { this.isHovered = false; this.isPressed = false; }
  onMouseDown() { this.isPressed = true; }
  onMouseUp() { this.isPressed = false; }
  onFocus() { this.isFocused = true; }
  onBlur() { this.isFocused = false; }

  toggleDisabled() { this.isDisabled = !this.isDisabled; }

}

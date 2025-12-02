import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrl: './toggle-switch.component.css',
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleSwitchComponent),
      multi: true
    }
  ]
})
export class ToggleSwitchComponent implements ControlValueAccessor {
  isChecked: boolean = false;

  // Function to call when the value changes
  onChange = (value: any) => {};

  // Function to call when the control is touched
  onTouched = () => {};

  // ControlValueAccessor interface methods
  writeValue(value: any): void {
    this.isChecked = value;
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState?(isDisabled: boolean): void {
    // Handle the disabled state
  }

  // When the toggle switch changes
  toggleChange() {
    this.isChecked = !this.isChecked;
    this.onChange(this.isChecked);
    this.onTouched();
  }
}

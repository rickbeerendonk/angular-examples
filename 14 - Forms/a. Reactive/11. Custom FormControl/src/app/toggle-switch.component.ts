/*! European Union Public License version 1.2 !*/
/*! Copyright © 2025 Rick Beerendonk          !*/

import { Component, forwardRef } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'toggle-switch',
  templateUrl: './toggle-switch.component.html',
  styleUrl: './toggle-switch.component.css',
  providers: [
    // Register this component as a NG_VALUE_ACCESSOR
    // This allows it to work with Angular Forms (formControl, ngModel, etc.)
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => ToggleSwitchComponent),
      multi: true
    }
  ]
})
// Implement ControlValueAccessor to create a custom form control
export class ToggleSwitchComponent implements ControlValueAccessor {
  isChecked: boolean = false;

  // Callbacks registered by Angular Forms
  // Function to call when the value changes
  onChange = (value: any) => {};

  // Function to call when the control is touched
  onTouched = () => {};

  // ControlValueAccessor interface methods
  // Called by Angular Forms to write a value to the component
  writeValue(value: any): void {
    this.isChecked = value;
  }

  // Called by Angular Forms to register a callback for value changes
  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  // Called by Angular Forms to register a callback for touch events
  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  // Optional: Called by Angular Forms to disable/enable the control
  setDisabledState?(isDisabled: boolean): void {
    // Handle the disabled state (e.g., disable the input)
  }

  // When the toggle switch changes, notify Angular Forms
  toggleChange() {
    this.isChecked = !this.isChecked;
    this.onChange(this.isChecked); // Notify Angular of value change
    this.onTouched(); // Mark the control as touched
  }
}

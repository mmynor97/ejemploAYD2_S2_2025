import { Button } from './products/button';
import { Checkbox } from './products/check';

export interface ThemeFactory {
  createButton(): Button;
  createCheckbox(): Checkbox;
}
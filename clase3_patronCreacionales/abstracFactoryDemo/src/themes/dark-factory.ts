import { ThemeFactory } from '../theme-factory';
import { Button } from '../products/button';
import { Checkbox } from '../products/check';
import { DarkButton } from './dark-controls';
import { DarkCheckbox } from './dark-controls';

export class DarkFactory implements ThemeFactory {
  createButton(): Button {
    return new DarkButton();
  }
  createCheckbox(): Checkbox {
    return new DarkCheckbox();
  }
}
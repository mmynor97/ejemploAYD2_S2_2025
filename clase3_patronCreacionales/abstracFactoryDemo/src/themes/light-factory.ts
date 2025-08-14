import { ThemeFactory } from '../theme-factory';
import { Button } from '../products/button';
import { Checkbox } from '../products/check';
import { LightButton } from './light-controls';
import { LightCheckbox } from './light-controls';

export class LightFactory implements ThemeFactory {
  createButton(): Button {
    return new LightButton();
  }
  createCheckbox(): Checkbox {
    return new LightCheckbox();
  }
}
import { Button } from '../products/button';
import { Checkbox } from '../products/check';

export class DarkButton implements Button {
  render(): void {
    console.log('Botón Oscuro');
  }
}

export class DarkCheckbox implements Checkbox {
  render(): void {
    console.log('Checkbox Oscuro');
  }
}
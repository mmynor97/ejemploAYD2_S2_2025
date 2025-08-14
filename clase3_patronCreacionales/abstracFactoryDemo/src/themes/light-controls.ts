import { Button } from '../products/button';
import { Checkbox } from '../products/check';

export class LightButton implements Button {
  render() { console.log('Botón Claro'); }
}

export class LightCheckbox implements Checkbox {
  render() { console.log('Checkbox Claro'); }
}
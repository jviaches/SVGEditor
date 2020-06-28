import { SVGItem } from './svg.item';
import { KeyValuePair } from '../utils/key-value';

export class RectItem implements SVGItem {
    id: string;
    attributes: KeyValuePair[] = [];

    constructor() {
        this.attributes.push({ key: 'X', value: '0' });
        this.attributes.push({ key: 'Y', value: '0' });
        this.attributes.push({ key: 'Width', value: '10' });
        this.attributes.push({ key: 'Height', value: '10' });
        this.attributes.push({ key: 'Fill', value: '0' });
    }
}

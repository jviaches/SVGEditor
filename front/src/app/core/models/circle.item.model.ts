import { SVGItem } from './svg.item';
import { KeyValuePair } from '../utils/key-value';

export class CircleItem implements SVGItem {
    id: string;
    attributes: KeyValuePair[] = [];

    constructor() {
        this.attributes.push({ key: 'X', value: '0' });
        this.attributes.push({ key: 'Y', value: '0' });
        this.attributes.push({ key: 'Radius', value: '10' });
        this.attributes.push({ key: 'Fill', value: '0' });
    }
}

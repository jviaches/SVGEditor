import { SVGItem } from './svg.item';
import { KeyValuePair } from '../utils/key-value';

export class PathItem implements SVGItem {
    id: string;
    attributes: KeyValuePair[] = [];

    constructor() {
        this.attributes.push({ key: 'd', value: '' });
    }
}

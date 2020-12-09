import { KeyValuePair } from "../utils/key-value";
import { SVGItem } from "./svg.item";

export class TextItem implements SVGItem {
    id: string;
    attributes: KeyValuePair[] = [];

    constructor() {
        this.attributes.push({ key: 'X', value: '0' });
        this.attributes.push({ key: 'Y', value: '0' });
        this.attributes.push({ key: 'class', value: 'small' });
        this.attributes.push({ key: 'text', value: '..' });
        this.attributes.push({ key: 'lengthAdjust', value: '100' });
        
    }
}

import { KeyValuePair } from "../utils/key-value";
import { SVGItem } from "./svg.item";

export class LineItem implements SVGItem {
    id: string;
    attributes: KeyValuePair[] = [];

    constructor() {
        this.attributes.push({ key: 'x1', value: '0' });
        this.attributes.push({ key: 'y1', value: '0' });
        this.attributes.push({ key: 'x2', value: '0' });
        this.attributes.push({ key: 'y2', value: '0' });
        this.attributes.push({ key: 'stroke', value: 'black' });
        
    }
}


import { StockType } from '../state/AppState';

export const getCorrectIconForType = (type: StockType) => {
    const iconPrefix = 'pe-7s-';

    switch (type) {
        case 'FireArms':
            return iconPrefix + 'arc';
        case 'Energy':
            return iconPrefix + 'plug';
        case 'Finance':
            return iconPrefix + 'cash';
        case 'RawMaterials':
            return iconPrefix + 'tools';
        case 'Technology':
            return iconPrefix + 'rocket';
        default:
            return 'Not a valid icon!';
    }
};
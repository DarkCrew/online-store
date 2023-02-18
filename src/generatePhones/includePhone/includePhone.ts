import { IFilterRangeStorage, IFilterStorage, IPhone } from '../../types';

export function includePhone(
    item: IPhone,
    rsStoreFilterSettings: IFilterStorage,
    rsStoreRangeSettings: IFilterRangeStorage
) {
    let included = true;
    const modelsStorage: string[] = rsStoreFilterSettings.model;
    const colorsStorage: string[] = rsStoreFilterSettings.color;
    const sizesStorage: string[] = rsStoreFilterSettings.size;
    const favouriteStorage: boolean = rsStoreFilterSettings.favourite;

    const quantityRange: number[] = rsStoreRangeSettings.quantity;
    const yearRange: number[] = rsStoreRangeSettings.year;

    if (favouriteStorage === true) {
        if (favouriteStorage !== item.favorite) {
            included = false;
        }
    }
    if (modelsStorage.length !== 0) {
        if (!modelsStorage.includes(item.brand)) {
            included = false;
        }
    }
    if (colorsStorage.length !== 0) {
        if (!colorsStorage.includes(item.color)) {
            included = false;
        }
    }
    if (sizesStorage.length !== 0) {
        if (!sizesStorage.includes(item.size)) {
            included = false;
        }
    }
    if (quantityRange.length !== 0) {
        if (+item.count < quantityRange[0] || +item.count > quantityRange[1]) {
            included = false;
        }
    }
    if (yearRange.length !== 0) {
        if (+item.year < yearRange[0] || +item.year > yearRange[1]) {
            included = false;
        }
    }

    return included;
}

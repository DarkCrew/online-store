import { input128, input256, input512, input64 } from '../../filterButtons/inputButtons';
import data from '../../../data';
import Phones from '../../../generatePhones/phones';
import {
    rsStoreFilterSettings,
    rsStoreRangeSettings,
    rsStoreSortSettings,
    rsStoreFavorites,
} from '../../../localStorage/checkLocalStorage';
import { changeFiltersArray } from '../changeFiltersArray';

export function selectSize() {
    input64.addEventListener('click', () => {
        changeFiltersArray('size', input64.name);
        Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
    });

    input128.addEventListener('click', () => {
        changeFiltersArray('size', input128.name);
        Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
    });

    input256.addEventListener('click', () => {
        changeFiltersArray('size', input256.name);
        Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
    });

    input512.addEventListener('click', () => {
        changeFiltersArray('size', input512.name);
        Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
    });
}

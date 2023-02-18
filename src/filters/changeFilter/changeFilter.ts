import { inputPopular } from '../filterButtons/inputButtons';
import data from '../../data';
import Phones from '../../generatePhones/phones';
import {
    rsStoreFilterSettings,
    rsStoreRangeSettings,
    rsStoreSortSettings,
    rsStoreFavorites,
} from '../../localStorage/checkLocalStorage';
import { changeFiltersArray } from './changeFiltersArray';
import { selectPhone } from './selects/selectModel';
import { selectColor } from './selects/selectColor';
import { selectSize } from './selects/selectSize';

export function changeFilters() {
    selectPhone();
    selectColor();
    selectSize();

    inputPopular.addEventListener('click', () => {
        changeFiltersArray('favourite', inputPopular.name);
        Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
    });
}

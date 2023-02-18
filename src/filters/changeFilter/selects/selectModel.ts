import { inputApple, inputSamsung, inputXiaomi } from '../../filterButtons/inputButtons';
import data from '../../../data';
import Phones from '../../../generatePhones/phones';
import {
    rsStoreFilterSettings,
    rsStoreRangeSettings,
    rsStoreSortSettings,
    rsStoreFavorites,
} from '../../../localStorage/checkLocalStorage';
import { changeFiltersArray } from '../changeFiltersArray';

export function selectPhone() {
    inputApple.addEventListener('click', () => {
        changeFiltersArray('model', inputApple.name);
        Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
    });
    inputSamsung.addEventListener('click', () => {
        changeFiltersArray('model', inputSamsung.name);
        Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
    });
    inputXiaomi.addEventListener('click', () => {
        changeFiltersArray('model', inputXiaomi.name);
        Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
    });
}

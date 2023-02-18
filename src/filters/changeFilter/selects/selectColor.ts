import { inputBlack, inputBlue, inputGreen, inputPink, inputRed, inputWhite } from '../../filterButtons/inputButtons';
import data from '../../../data';
import Phones from '../../../generatePhones/phones';
import {
    rsStoreFilterSettings,
    rsStoreRangeSettings,
    rsStoreSortSettings,
    rsStoreFavorites,
} from '../../../localStorage/checkLocalStorage';
import { changeFiltersArray } from '../changeFiltersArray';

export function selectColor() {
    inputBlack.addEventListener('click', () => {
        changeFiltersArray('color', inputBlack.name);
        Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
    });
    inputWhite.addEventListener('click', () => {
        changeFiltersArray('color', inputWhite.name);
        Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
    });
    inputRed.addEventListener('click', () => {
        changeFiltersArray('color', inputRed.name);
        Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
    });
    inputPink.addEventListener('click', () => {
        changeFiltersArray('color', inputPink.name);
        Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
    });
    inputBlue.addEventListener('click', () => {
        changeFiltersArray('color', inputBlue.name);
        Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
    });
    inputGreen.addEventListener('click', () => {
        changeFiltersArray('color', inputGreen.name);
        Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
    });
}

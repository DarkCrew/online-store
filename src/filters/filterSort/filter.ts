import data from '../../data';
import Phones from '../../generatePhones/phones';
import {
    rsStoreFilterSettings,
    rsStoreRangeSettings,
    rsStoreSortSettings,
    rsStoreFavorites,
    checkLocalStorage,
} from '../../localStorage/checkLocalStorage';
import { filterSelect } from '../filterButtons/inputButtons';
import { LOCAL_STORAGE_ARRAY } from '../../localStorage/localStorageVariables';
import { IFilterSortStorage } from '../../types';

export function changeFilter() {
    document.addEventListener('DOMContentLoaded', () => {
        if (localStorage.getItem(LOCAL_STORAGE_ARRAY[2]) !== null) {
            const valueSort = localStorage.getItem(LOCAL_STORAGE_ARRAY[2]) as string;

            const valueSortParse: IFilterSortStorage = JSON.parse(valueSort);
            filterSelect.value = String(valueSortParse.sort);
        }
    });

    filterSelect.addEventListener('change', () => {
        rsStoreSortSettings.sort = filterSelect.value;
        localStorage.setItem(LOCAL_STORAGE_ARRAY[2], JSON.stringify(rsStoreSortSettings));
        checkLocalStorage();
        Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
    });
}

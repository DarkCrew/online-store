import { IFavoutitesStorage, IFilterRangeStorage, IFilterSortStorage, IFilterStorage } from '../types';
import { LOCAL_STORAGE_ARRAY } from '../localStorage/localStorageVariables';
import { getFromLocalStorage, saveToLocalStorage } from '../localStorage/localStorageMethods';
import {
    inputPopular,
    inputApple,
    input128,
    input256,
    input512,
    input64,
    inputBlack,
    inputBlue,
    inputGreen,
    inputPink,
    inputRed,
    inputSamsung,
    inputWhite,
    inputXiaomi,
    resetFilters,
    resetSettings,
} from '../filters/filterButtons/inputButtons';
import Phones from '../generatePhones/phones';
import data from '../data';

export let rsStoreFilterSettings: IFilterStorage = {
    model: [],
    favourite: false,
    color: [],
    size: [],
};
export let rsStoreRangeSettings: IFilterRangeStorage = {
    quantity: [],
    year: [],
};
export const rsStoreSortSettings: IFilterSortStorage = {
    sort: 'By name: from A to Z',
};
export let rsStoreFavorites: IFavoutitesStorage = {
    basket: [],
};

export function checkLocalStorage() {
    LOCAL_STORAGE_ARRAY.map((elem) => {
        if (getFromLocalStorage(elem) !== null) {
            const filterLocalItem = getFromLocalStorage(elem) as string;
            if (elem === LOCAL_STORAGE_ARRAY[0]) {
                rsStoreRangeSettings = JSON.parse(filterLocalItem);
            }
            if (elem === LOCAL_STORAGE_ARRAY[1]) {
                rsStoreFavorites = JSON.parse(filterLocalItem);
            }
            if (elem === LOCAL_STORAGE_ARRAY[2]) {
                rsStoreSortSettings.sort = filterLocalItem;
            }
            if (elem === LOCAL_STORAGE_ARRAY[3]) {
                rsStoreFilterSettings = JSON.parse(filterLocalItem);
                if (rsStoreFilterSettings.favourite === true) {
                    inputPopular.checked = true;
                }

                if (rsStoreFilterSettings.model.includes('Apple')) {
                    inputApple.checked = true;
                }
                if (rsStoreFilterSettings.model.includes('Xiaomi')) {
                    inputXiaomi.checked = true;
                }
                if (rsStoreFilterSettings.model.includes('Samsung')) {
                    inputSamsung.checked = true;
                }

                if (rsStoreFilterSettings.color.includes('black')) {
                    inputBlack.checked = true;
                }
                if (rsStoreFilterSettings.color.includes('white')) {
                    inputWhite.checked = true;
                }
                if (rsStoreFilterSettings.color.includes('red')) {
                    inputRed.checked = true;
                }
                if (rsStoreFilterSettings.color.includes('pink')) {
                    inputPink.checked = true;
                }
                if (rsStoreFilterSettings.color.includes('blue')) {
                    inputBlue.checked = true;
                }
                if (rsStoreFilterSettings.color.includes('green')) {
                    inputGreen.checked = true;
                }

                if (rsStoreFilterSettings.size.includes('64')) {
                    input64.checked = true;
                }
                if (rsStoreFilterSettings.size.includes('128')) {
                    input128.checked = true;
                }
                if (rsStoreFilterSettings.size.includes('256')) {
                    input256.checked = true;
                }
                if (rsStoreFilterSettings.size.includes('512')) {
                    input512.checked = true;
                }
            }
        } else {
            if (elem === LOCAL_STORAGE_ARRAY[0]) {
                saveToLocalStorage(elem, JSON.stringify(rsStoreRangeSettings));
            }
            if (elem === LOCAL_STORAGE_ARRAY[1]) {
                saveToLocalStorage(elem, JSON.stringify(rsStoreFavorites));
            }
            if (elem === LOCAL_STORAGE_ARRAY[2]) {
                saveToLocalStorage(elem, JSON.stringify(rsStoreSortSettings));
            }
            if (elem === LOCAL_STORAGE_ARRAY[3]) {
                saveToLocalStorage(elem, JSON.stringify(rsStoreFilterSettings));
            }
        }
    });

    resetFilters.addEventListener('click', () => {
        rsStoreFilterSettings = {
            model: [],
            favourite: false,
            color: [],
            size: [],
        };
        localStorage.setItem(LOCAL_STORAGE_ARRAY[3], JSON.stringify(rsStoreFilterSettings));
        inputPopular.checked = false;
        inputApple.checked = false;
        inputSamsung.checked = false;
        inputXiaomi.checked = false;
        inputBlack.checked = false;
        inputWhite.checked = false;
        inputBlue.checked = false;
        inputGreen.checked = false;
        inputPink.checked = false;
        inputRed.checked = false;
        input64.checked = false;
        input128.checked = false;
        input256.checked = false;
        input512.checked = false;
        Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
    });

    resetSettings.addEventListener('click', () => {
        LOCAL_STORAGE_ARRAY.map((elem) => {
            localStorage.removeItem(elem);
        });
        location.reload();
    });
}

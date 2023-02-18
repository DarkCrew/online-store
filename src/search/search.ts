import data from '../data';
import Phones from '../generatePhones/phones';
import {
    rsStoreFilterSettings,
    rsStoreRangeSettings,
    rsStoreSortSettings,
    rsStoreFavorites,
    checkLocalStorage,
} from '../localStorage/checkLocalStorage';

const inputSearch = document.querySelector('.input-search') as HTMLInputElement;
const btnSearch = document.querySelector('.button-search-img') as HTMLButtonElement;
const btnSearchReset = document.querySelector('.button-search-reset-img') as HTMLButtonElement;

export function search() {
    inputSearch.focus();
    inputSearch.oninput = function () {
        const curValue: string = inputSearch.value.trim();
        if (curValue.length > 0) {
            btnSearch.classList.add('unactive');
            btnSearchReset.classList.remove('unactive');
            checkLocalStorage();
            Phones.generate(
                data,
                rsStoreFilterSettings,
                rsStoreRangeSettings,
                rsStoreSortSettings,
                rsStoreFavorites,
                curValue
            );
        } else {
            Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
            btnSearch.classList.remove('unactive');
            btnSearchReset.classList.add('unactive');
        }
    };

    btnSearchReset.addEventListener('click', () => {
        inputSearch.value = '';
        btnSearch.classList.remove('unactive');
        btnSearchReset.classList.add('unactive');
        Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
    });
}

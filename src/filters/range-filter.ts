import data from '../data';
import Phones from '../generatePhones/phones';
import {
    rsStoreFilterSettings,
    rsStoreRangeSettings,
    rsStoreSortSettings,
    rsStoreFavorites,
    checkLocalStorage,
} from '../localStorage/checkLocalStorage';
import { filterQuantity } from './filterQuantity/filterQuantity';
import { filterYear } from './filterYear/filterYear';

class RangeFilter {
    public start() {
        checkLocalStorage();

        filterQuantity();
        filterYear();

        Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
    }
}

export default RangeFilter;

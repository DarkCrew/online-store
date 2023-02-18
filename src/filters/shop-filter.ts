import { checkLocalStorage } from '../localStorage/checkLocalStorage';
import { changeFilters } from './changeFilter/changeFilter';

class ShopFilter {
    public start() {
        checkLocalStorage();
        changeFilters();
    }
}

export default ShopFilter;

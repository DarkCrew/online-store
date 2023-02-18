import ShopFilter from '../filters/shop-filter';
import RangeFilter from '../filters/range-filter';

import { checkLocalStorage } from '../localStorage/checkLocalStorage';
import { search } from '../search/search';
import { changeFilter } from '../filters/filterSort/filter';

class App {
    public start() {
        window.onload = function () {
            const preloader = document.querySelector('.preloader') as HTMLElement;
            preloader.style.display = 'none';
            document.documentElement.style.overflow = 'visible';
        };

        checkLocalStorage();

        const shopFilters = new ShopFilter();
        shopFilters.start();

        const rangeFilters = new RangeFilter();
        rangeFilters.start();

        changeFilter();
        search();
    }
}

export default App;

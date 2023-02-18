import { IFavoutitesStorage, IFilterRangeStorage, IFilterSortStorage, IFilterStorage, IPhone } from '../types';
import { includePhone } from './includePhone/includePhone';
import { noResults } from './noResults/noResults';
import { renderPhone } from './renderPhone/renderPhone';
import { sortBy } from './sortBy/sortBy';

class Phones {
    static generate(
        data: Array<IPhone>,
        rsStoreFilterSettings: IFilterStorage,
        rsStoreRangeSettings: IFilterRangeStorage,
        rsStoreSortSettings: IFilterSortStorage,
        rsStoreFavorites: IFavoutitesStorage,
        searchItem?: string
    ) {
        const fragment = document.createDocumentFragment();

        const cartCount = document.querySelector('.cart-circle') as HTMLElement;
        cartCount.textContent = rsStoreFavorites.basket.length.toString();

        const sortStorage: IFilterSortStorage = JSON.parse(rsStoreSortSettings.sort);

        data = sortBy(sortStorage, data);
        data.forEach((item: IPhone) => {
            let included = includePhone(item, rsStoreFilterSettings, rsStoreRangeSettings);

            if (searchItem) {
                const searchingItem =
                    item.brand +
                    ' ' +
                    item.model +
                    ' ' +
                    item.size +
                    ' ' +
                    item.color +
                    ' ' +
                    item.year +
                    ' ' +
                    item.producer;
                if (!searchingItem.toLowerCase().includes(searchItem.toLowerCase())) {
                    included = false;
                }
            }

            if (included) {
                const phoneClone = renderPhone<IPhone>(item);
                fragment.append(phoneClone);
            }
        });

        const phonesContainer = document.querySelector('.item-phones-container') as HTMLElement;
        phonesContainer.innerHTML = '';
        phonesContainer.appendChild(fragment);

        noResults();
    }
}

export default Phones;

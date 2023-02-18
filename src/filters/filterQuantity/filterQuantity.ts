import data from '../../data';
import Phones from '../../generatePhones/phones';
import {
    rsStoreFavorites,
    rsStoreFilterSettings,
    rsStoreRangeSettings,
    rsStoreSortSettings,
} from '../../localStorage/checkLocalStorage';
import { LOCAL_STORAGE_ARRAY } from '../../localStorage/localStorageVariables';

export function filterQuantity() {
    const quantityRangeInput: NodeListOf<HTMLInputElement> = document.querySelectorAll('.quantity-range-input input');
    const quantityInputbuttons: NodeListOf<HTMLInputElement> = document.querySelectorAll(
        '.filter-item-quantity-button'
    );
    const quantityRangeProgress = document.querySelector('#filter-quantity-progress') as HTMLElement;
    const quantityGap = 5;

    quantityRangeInput.forEach((quantityInput) => {
        quantityInput.addEventListener('input', (e: Event) => {
            let minValue = parseInt(quantityRangeInput[0].value);
            let maxValue = parseInt(quantityRangeInput[1].value);

            if (maxValue - minValue < quantityGap) {
                if ((e.target as Element).id === 'quantity-range-min') {
                    quantityRangeInput[0].value = (maxValue - quantityGap).toString();
                    minValue = maxValue - quantityGap - 1;
                } else {
                    quantityRangeInput[1].value = (minValue + quantityGap).toString();
                    maxValue = minValue + quantityGap + 1;
                }
            } else {
                quantityInputbuttons[0].value = minValue.toString();
                quantityInputbuttons[1].value = maxValue.toString();

                const maxMinValue: string = quantityRangeInput[0].max;
                const maxMaxValue: string = quantityRangeInput[1].max;
                quantityRangeProgress.style.left = (minValue / +maxMinValue) * 100 + '%';
                quantityRangeProgress.style.right = 100 - (maxValue / +maxMaxValue) * 100 + '%';
            }

            if (rsStoreRangeSettings.quantity.length > 0) {
                rsStoreRangeSettings.quantity = [];
            }
            rsStoreRangeSettings.quantity.push(minValue);
            rsStoreRangeSettings.quantity.push(maxValue);
            localStorage.setItem(LOCAL_STORAGE_ARRAY[0], JSON.stringify(rsStoreRangeSettings));
            Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
        });
    });

    if (localStorage.getItem(LOCAL_STORAGE_ARRAY[0]) !== null) {
        const filterRangeSettings = localStorage.getItem(LOCAL_STORAGE_ARRAY[0]) as string;
        const rangeSettings = JSON.parse(filterRangeSettings);

        if (rangeSettings.quantity.length > 0) {
            quantityRangeInput[0].value = rangeSettings.quantity[0].toString();
            quantityRangeInput[1].value = rangeSettings.quantity[1].toString();
            quantityInputbuttons[0].value = rangeSettings.quantity[0].toString();
            quantityInputbuttons[1].value = rangeSettings.quantity[1].toString();
            quantityRangeProgress.style.left = rangeSettings.quantity[0].toString() + '%';
            quantityRangeProgress.style.right = 100 - rangeSettings.quantity[1] + '%';
        }
    } else {
        localStorage.setItem(LOCAL_STORAGE_ARRAY[0], JSON.stringify(rsStoreRangeSettings));
    }
}

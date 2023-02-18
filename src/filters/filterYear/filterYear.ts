import data from '../../data';
import Phones from '../../generatePhones/phones';
import {
    rsStoreFavorites,
    rsStoreFilterSettings,
    rsStoreRangeSettings,
    rsStoreSortSettings,
} from '../../localStorage/checkLocalStorage';
import { LOCAL_STORAGE_ARRAY } from '../../localStorage/localStorageVariables';

export function filterYear() {
    const yearRangeInput: NodeListOf<HTMLInputElement> = document.querySelectorAll('.year-range-input input');
    const yearInputbuttons: NodeListOf<HTMLInputElement> = document.querySelectorAll('.filter-item-year-button');
    const yearRangeProgress = document.querySelector('#filter-year-progress') as HTMLElement;
    const yearGap = 2;

    yearRangeInput.forEach((yearInput) => {
        yearInput.addEventListener('input', (e: Event) => {
            let minValue = parseInt(yearRangeInput[0].value);
            let maxValue = parseInt(yearRangeInput[1].value);

            if (maxValue - minValue < yearGap) {
                if ((e.target as Element).id === 'year-range-min') {
                    yearRangeInput[0].value = (maxValue - yearGap).toString();
                    minValue = maxValue - yearGap - 1;
                } else {
                    yearRangeInput[1].value = (minValue + yearGap).toString();
                    maxValue = minValue + yearGap + 1;
                }
            } else {
                yearInputbuttons[0].value = minValue.toString();
                yearInputbuttons[1].value = maxValue.toString();

                const maxMinValue: string = yearRangeInput[0].max;
                const minMaxValue: string = yearRangeInput[1].min;

                yearRangeProgress.style.left =
                    100 - ((+maxMinValue - minValue) / (+maxMinValue - +minMaxValue)) * 100 + '%';
                yearRangeProgress.style.right = ((+maxMinValue - maxValue) / (+maxMinValue - +minMaxValue)) * 100 + '%';
            }

            if (rsStoreRangeSettings.year.length > 0) {
                rsStoreRangeSettings.year = [];
            }
            rsStoreRangeSettings.year.push(minValue);
            rsStoreRangeSettings.year.push(maxValue);
            localStorage.setItem(LOCAL_STORAGE_ARRAY[0], JSON.stringify(rsStoreRangeSettings));
            Phones.generate(data, rsStoreFilterSettings, rsStoreRangeSettings, rsStoreSortSettings, rsStoreFavorites);
        });
    });

    if (localStorage.getItem(LOCAL_STORAGE_ARRAY[0]) !== null) {
        const filterRangeSettings = localStorage.getItem(LOCAL_STORAGE_ARRAY[0]) as string;
        const rangeSettings = JSON.parse(filterRangeSettings);

        if (rangeSettings.year.length > 0) {
            yearRangeInput[0].value = rangeSettings.year[0].toString();
            yearRangeInput[1].value = rangeSettings.year[1].toString();
            yearInputbuttons[0].value = rangeSettings.year[0].toString();
            yearInputbuttons[1].value = rangeSettings.year[1].toString();

            const maxMinValue: string = yearRangeInput[0].max;
            const minMaxValue: string = yearRangeInput[1].min;
            yearRangeProgress.style.left =
                100 - ((+maxMinValue - rangeSettings.year[0]) / (+maxMinValue - +minMaxValue)) * 100 + '%';
            yearRangeProgress.style.right =
                ((+maxMinValue - rangeSettings.year[1]) / (+maxMinValue - +minMaxValue)) * 100 + '%';
        }
    } else {
        localStorage.setItem(LOCAL_STORAGE_ARRAY[0], JSON.stringify(rsStoreRangeSettings));
    }
}

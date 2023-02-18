import { rsStoreFilterSettings } from '../../localStorage/checkLocalStorage';
import { LOCAL_STORAGE_ARRAY } from '../../localStorage/localStorageVariables';
import { IFilterStorage } from '../../types';

export function changeFiltersArray(type: keyof IFilterStorage, name: string) {
    if (type !== 'favourite') {
        if (rsStoreFilterSettings[type].includes(name)) {
            rsStoreFilterSettings[type].splice(rsStoreFilterSettings[type].indexOf(name), 1);
        } else {
            rsStoreFilterSettings[type].push(name);
        }
    } else {
        rsStoreFilterSettings.favourite = rsStoreFilterSettings.favourite === true ? false : true;
    }
    localStorage.setItem(LOCAL_STORAGE_ARRAY[3], JSON.stringify(rsStoreFilterSettings));
}

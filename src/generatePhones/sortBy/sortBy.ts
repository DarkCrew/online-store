import { IFilterSortStorage, IPhone } from '../../types';
import { sortOption } from '../../types';

export function sortBy(rsStoreSortSettings: IFilterSortStorage, data: Array<IPhone>) {
    const sortStorage: string = rsStoreSortSettings.sort;

    if (sortStorage.length !== 0) {
        if (sortStorage === sortOption.NameAsc) {
            data = data.sort((a, b) => (a.brand > b.brand ? 1 : -1));
        }
        if (sortStorage === sortOption.NameDsc) {
            data = data.sort((a, b) => (a.brand < b.brand ? 1 : -1));
        }
        if (sortStorage === sortOption.YearAsc) {
            data = data.sort((a, b) => (a.year > b.year ? 1 : -1));
        }
        if (sortStorage === sortOption.YearDsc) {
            data = data.sort((a, b) => (a.year < b.year ? 1 : -1));
        }
    }

    return data;
}

export interface IPhone {
    id: string;
    brand: string;
    model: string;
    count: string;
    year: string;
    producer: string;
    color: string;
    size: string;
    price: string;
    img: string;
    favorite: boolean;
}

export interface IFilterStorage {
    model: string[];
    favourite: boolean;
    color: string[];
    size: string[];
}

export interface IFilterRangeStorage {
    quantity: number[];
    year: number[];
}

export interface IFilterSortStorage {
    sort: string;
}

export interface IFavoutitesStorage {
    basket: string[];
}

export enum sortOption {
    NameAsc = 'By name: from A to Z',
    NameDsc = 'By name: from Z to A',
    YearAsc = 'By year: ascending',
    YearDsc = 'By year: descending',
}

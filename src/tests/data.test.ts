import { test, expect } from '@jest/globals';
import data from '../data';
import RangeFilter from '../filters/range-filter';
import ShopFilter from '../filters/shop-filter';
import Phones from '../generatePhones/phones';
import { renderPhone } from '../generatePhones/renderPhone/renderPhone';
import { sortBy } from '../generatePhones/sortBy/sortBy';
import { IPhone } from '../types';

const item = {
    id: '1',
    brand: '2',
    model: '3',
    count: '1',
    year: '2020',
    producer: '1',
    color: 'white',
    size: '128',
    price: '100',
    img: '1',
    favorite: true,
};
const sortStorage = {
    sort: 'By year: ascending',
};

describe('Data should: ', () => {
    test('contain more than 20 phones', () => {
        expect(data.length).toBeGreaterThan(20);
    });

    test('not be null', () => {
        expect(data).not.toBeNull();
    });

    test('not be undefined', () => {
        expect(data).toBeDefined();
    });
});

describe('renderPhone should: ', () => {
    test('return divElement', () => {
        expect(renderPhone<IPhone>(item)).toBe(HTMLDivElement);
    });
});

describe('sortPhone by name: ', () => {
    test('asc correct', () => {
        expect(sortBy(sortStorage, data)).toBe(data.sort((a, b) => (a.brand > b.brand ? 1 : -1)));
    });
    test('dsc correct', () => {
        expect(sortBy(sortStorage, data)).toBe(data.sort((a, b) => (a.brand < b.brand ? 1 : -1)));
    });
});

describe('sortPhone by year: ', () => {
    test('asc correct', () => {
        expect(sortBy(sortStorage, data)).toBe(data.sort((a, b) => (a.year > b.year ? 1 : -1)));
    });
    test('dsc correct', () => {
        expect(sortBy(sortStorage, data)).toBe(data.sort((a, b) => (a.year < b.year ? 1 : -1)));
    });
});

describe('Range filter: ', () => {
    const rangeFilter = new RangeFilter();
    test('not be undefined', () => {
        expect(rangeFilter.start).toBeDefined();
    });

    test('not be null', () => {
        expect(rangeFilter.start).not.toBeNull();
    });

    test('not to throw error 421', () => {
        expect(rangeFilter.start).not.toThrowError('error 421');
    });
});

describe('Shop filter: ', () => {
    const shopFilter = new ShopFilter();
    test('not be undefined', () => {
        expect(shopFilter.start).not.toBeUndefined();
    });

    test('not be null', () => {
        expect(shopFilter.start).not.toBeNull();
    });
});

describe('Phone view: ', () => {
    test('not be undefined', () => {
        expect(Phones.generate).not.toBeUndefined();
    });

    test('not be null', () => {
        expect(Phones.generate).not.toBeNull();
    });

    test('not to throw error 404', () => {
        expect(Phones.generate).not.toThrowError('error 404');
    });
});

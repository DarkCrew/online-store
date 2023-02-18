import { rsStoreFavorites } from '../../localStorage/checkLocalStorage';
import { LOCAL_STORAGE_ARRAY } from '../../localStorage/localStorageVariables';
import { IPhone } from '../../types';

export function renderPhone<T extends IPhone>(item: T) {
    const itemPhoneTemplate = document.querySelector('#item-phone-template') as HTMLTemplateElement;
    const phoneClone = itemPhoneTemplate.content.cloneNode(true) as HTMLDivElement;

    const phoneClonePhoto = phoneClone.querySelector('.item-phone-photo') as HTMLImageElement;
    phoneClonePhoto.src = item.img;

    const phoneCloneBrand = phoneClone.querySelector('.phone-desc-brand') as HTMLElement;
    phoneCloneBrand.textContent = item.brand;

    const phoneCloneModel = phoneClone.querySelector('.phone-desc-model') as HTMLElement;
    phoneCloneModel.textContent = item.model;

    const phoneCloneSize = phoneClone.querySelector('.phone-desc-size') as HTMLElement;
    phoneCloneSize.textContent = item.size;

    const phoneCloneColor = phoneClone.querySelector('#phone-color') as HTMLElement;
    phoneCloneColor.textContent = item.color;

    const phoneCloneYear = phoneClone.querySelector('#phone-year') as HTMLElement;
    phoneCloneYear.textContent = item.year;

    const phoneCloneProducer = phoneClone.querySelector('#phone-producer') as HTMLElement;
    phoneCloneProducer.textContent = item.producer;

    const phoneCloneStock = phoneClone.querySelector('#phone-stock') as HTMLElement;
    phoneCloneStock.textContent = item.count;

    const phoneClonePrice = phoneClone.querySelector('#phone-price') as HTMLElement;
    phoneClonePrice.textContent = item.price;

    const phoneBasket = phoneClone.querySelector('.item-phone-basket') as HTMLImageElement;
    if (rsStoreFavorites.basket.includes(item.id)) {
        phoneBasket.classList.add('active');
    }
    phoneBasket.addEventListener('click', () => {
        if (!rsStoreFavorites.basket.includes(item.id)) {
            if (rsStoreFavorites.basket.length >= 20) {
                alert("You can't add more than 20 phones");
            } else {
                rsStoreFavorites.basket.push(item.id);
                phoneBasket.classList.add('active');
            }
        } else {
            rsStoreFavorites.basket.splice(rsStoreFavorites.basket.indexOf(item.id), 1);
            phoneBasket.classList.remove('active');
        }
        const cartCount = document.querySelector('.cart-circle') as HTMLElement;
        cartCount.textContent = rsStoreFavorites.basket.length.toString();

        localStorage.setItem(LOCAL_STORAGE_ARRAY[1], JSON.stringify(rsStoreFavorites));
    });

    return phoneClone;
}

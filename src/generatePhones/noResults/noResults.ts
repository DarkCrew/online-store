export function noResults() {
    const phonesContainer = document.querySelector('.item-phones-container') as HTMLElement;

    if (!phonesContainer.childNodes.length) {
        const noResultsContainer = document.createElement('div') as HTMLElement;
        const noResults = document.createElement('div') as HTMLElement;
        const noResultsImage = document.createElement('img') as HTMLImageElement;

        noResultsContainer.classList.add('item-phones-no-results-container');

        noResults.classList.add('item-phones-no-results');
        noResults.textContent = "We didn't find any phones. Please, try again!";

        noResultsImage.classList.add('item-phones-no-results-image');
        noResultsImage.src = './assets/images/search_no_result.png';

        noResultsContainer.appendChild(noResults);
        noResultsContainer.appendChild(noResultsImage);
        phonesContainer.appendChild(noResultsContainer);
    }
}

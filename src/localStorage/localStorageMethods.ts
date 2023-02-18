export function getFromLocalStorage(item: string): string | null {
    return localStorage.getItem(item);
}

export function saveToLocalStorage(item: string, data: string) {
    localStorage.setItem(item, data);
}

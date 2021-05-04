export class localStorageUtil {
    static getDataByKey = (name) => {
        return JSON.parse(localStorage.getItem(name));
    };

    static updateBasket(data) {
        return localStorage.setItem(`basket`, JSON.stringify(data));
    }
}
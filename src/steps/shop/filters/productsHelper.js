export class productsHelper {
    static sortByABCName = (data) => data.sort((leftSide, rightSide) => {
        return (leftSide.name.toLowerCase() < rightSide.name.toLowerCase()) ? -1 : 1
    });

    static sortByPrice = (data) => data.sort((a, b) => {
        return Number(a.price) - Number(b.price);
    });

    static isBetween = (num1, num2, value) => value > num1 && value < num2;

    static filterByCategory = (data, category) => {
        return category === 'All' ? data : data.filter((character) => character.category === category);
    };

    static filterByPrice = (data, priceRange) => {
        return data.filter((character) => this.isBetween(priceRange[0], priceRange[1], character.price));
    };

    static sortItems = (data, sort) => {
        return sort === 'NAME' ? this.sortByABCName(data) : this.sortByPrice(data);
    };

    static filterProducts = (data, category, priceRange, sort) => {
        let byCategory = this.filterByCategory(data, category);
        let byPrice = this.filterByPrice(byCategory, priceRange);
        return this.sortItems(byPrice, sort);
    };

    static totalPrice = (basket) => basket.reduce((sum, item) => sum + item.price * 1, 0)
}
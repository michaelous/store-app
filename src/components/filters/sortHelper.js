export const sortByABCName = (data) => data.sort((leftSide, rightSide) => {
    if (leftSide.name.toLowerCase() < rightSide.name.toLowerCase()) return -1;
    if (leftSide.name.toLowerCase() > rightSide.name.toLowerCase()) return 1;
});

export const sortByPrice = (data) => data.sort((a, b) => Number(a.price) - Number(b.price));

export const isBetween = (num1, num2, value) => value > num1 && value < num2;

export const filterByCategory = (data, category) => {
    return category === 'All' ? data : data.filter((character) => character.category === category);
};

export const filterByPrice = (data, priceRange) => {
    return data.filter((character) => isBetween(priceRange[0], priceRange[1], character.price));
};

export const sortItems = (data, sort) => {
    return sort === 'NAME' ? sortByABCName(data) : sortByPrice(data);
};
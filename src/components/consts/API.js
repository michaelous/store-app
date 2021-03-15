const URL = 'https://raw.githubusercontent.com/michaelous/products/main/shop.json';

export const getAllProducts = async () => {
    const response = await fetch(URL);
    const data = await response.json();
    return data.products;
};


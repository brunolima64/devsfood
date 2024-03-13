const BASE = 'https://api.b7web.com.br/devsfood/api/'

export const getCategories = async () => {
        const results = await fetch(BASE+'categories');
        const json = results.json();
    return json;
}

export const getProducts = async () => {
    const results = await fetch(BASE+'products');
    const json = results.json();
return json;
}
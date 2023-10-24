

const getImages = async () => {
    const res = await fetch("https://dummyjson.com/products")
    const products = res.json()
    return products
};

export default getImages;
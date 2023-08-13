export default async function getProducts() {
  const URL = `${import.meta.env.VITE_API_URL}/products`;

  const response = await fetch(URL);
  const products = await response.json();

  return products.map((product) => {
    const {
      id: productId,
      title,
      price,
      description,
      images,
      category,
    } = product;

    const {
      id: categoryId,
      name: categoryName,
      image: categoryImage,
    } = category;

    return {
      productId,
      title,
      price,
      description,
      images,
      category: {
        categoryId,
        categoryName,
        categoryImage,
      },
    };
  });
}

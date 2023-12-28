import { Category, Product, categories } from "@/store/products";
import { faker } from "@faker-js/faker";

function generateRandomString(length: number) {
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  let randomString = '';

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    randomString += characters.charAt(randomIndex);
  }

  return randomString;
}

export const generateProducts = () => {
  const products: Product[] = []
  const size = 100;
  for (let i = size; i > 0; i--) {
    products.push({
      id: generateRandomString(7),
      image: Math.floor(Math.random() * 5) + 1,
      name: faker.commerce.productName(),
      price: parseFloat(faker.commerce.price({min: 2, max: 8, dec: 2 })) * 100,
      category: categories[Math.floor(Math.random() * categories.length)] as Category
    });
  }
  return products
}

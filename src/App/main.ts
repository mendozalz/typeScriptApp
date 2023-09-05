import {faker} from '@faker-js/faker';
import { products, addProduct, updateProduct, findProducts  } from './product/product.service';
import { UpdateProductDto } from './product/product.dto';
import { Product } from './product/product.model';


for (let index = 0; index < 50; index++) {
  addProduct({
    title: faker.commerce.productName(),
    decription: faker.commerce.productAdjective(),
    imagen: faker.image.url(),
    size: faker.helpers.arrayElement(['M','S','L', 'XL']),
    color: faker.color.rgb(),
    isNew: faker.datatype.boolean(),
    tags: faker.helpers.arrayElement(['16','S','M','L','XL']),
    price: parseInt(faker.commerce.price()),
    stock: faker.number.int(),
    categoryId: faker.database.mongodbObjectId()
  })
}

console.log(products);
const product = products[0];
updateProduct(product.id, {
  title: 'New title',
  stock: 80,
});

findProducts({
  stock: 10,
  color: 'red',
  createdAt: new Date(),
  isNew: true,
})

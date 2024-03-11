"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const client_1 = require("@prisma/client");
const dotenv = require("dotenv");
const faker_1 = require("@faker-js/faker");
const generate_slug_1 = require("./../src/utils/generate-slug");
const random_number_1 = require("./../src/utils/random-number");
dotenv.config();
const prisma = new client_1.PrismaClient();
const createProducts = async (quantity) => {
    const products = [];
    for (let i = 0; i < quantity; i++) {
        const productName = faker_1.faker.commerce.productName();
        const categoryName = faker_1.faker.commerce.department();
        const product = await prisma.product.create({
            data: {
                name: productName,
                slug: (0, generate_slug_1.generateSlug)(productName),
                description: faker_1.faker.commerce.productDescription(),
                price: +faker_1.faker.commerce.price(),
                measure: "м",
                images: Array.from({ length: (0, random_number_1.getRandomNumber)(2, 6) }).map(() => `/uploads/${faker_1.faker.number.int({ min: 1, max: 5 })}.jpg`),
                category: {
                    create: {
                        name: categoryName,
                        slug: (0, generate_slug_1.generateSlug)(categoryName),
                        images: faker_1.faker.animal.cat()
                    }
                },
                reviews: {
                    create: [
                        {
                            rating: faker_1.faker.number.int({ min: 1, max: 5 }),
                            text: faker_1.faker.lorem.paragraph(),
                            user: {
                                connect: {
                                    id: 1
                                }
                            }
                        },
                        {
                            rating: faker_1.faker.number.int({ min: 1, max: 5 }),
                            text: faker_1.faker.lorem.paragraph(),
                            user: {
                                connect: {
                                    id: 1
                                }
                            }
                        }
                    ]
                }
            }
        });
        products.push(product);
    }
};
async function main() {
    await createProducts(10);
}
main()
    .catch(e => console.error(e))
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map
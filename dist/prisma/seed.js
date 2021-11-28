"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const categories_1 = require("./categories");
const products_1 = require("./products");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
async function main() {
    console.log("Seeding database...");
    await prisma.category.createMany({ data: categories_1.categories });
    await Promise.all(products_1.products.map(async (data) => await prisma.product.create({ data })));
}
main()
    .catch((e) => {
    console.log(e);
    process.exit(1);
})
    .finally(async () => {
    await prisma.$disconnect();
});
//# sourceMappingURL=seed.js.map
/* eslint-disable prettier/prettier */
import { categories } from "./categories";
import { products } from "./products";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("Seeding database...");

  await prisma.category.createMany({ data: categories });

  // for (const category of categories) {
  //   await prisma.category.create({
  //     // eslint-disable-next-line prettier/prettier
  //     data: category
  //   });
  // }
  // for (const product of products) {
  //   await prisma.product.create({
  //     data: product,
  //   });
  // }
  await Promise.all(
    products.map(async (data) => await prisma.product.create({ data }))
  );
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });

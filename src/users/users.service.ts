import { Injectable } from "@nestjs/common";
import { PrismaService } from "src/prisma.service";
import * as jwt from "jsonwebtoken";

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  createToken(id, email) {
    return jwt.sign({ id, email }, "secret");
  }

  create(data) {
    return this.prismaService.user.create({ data });
  }

  checkUser(email) {
    return this.prismaService.user.findUnique({
      where: { email },
    });
    //if (!user) throw new Error("Product notfound");
  }

  findOne(id: number) {
    return this.prismaService.user.findUnique({
      where: { id },
    });
    //if (!user) throw new Error("Product notfound");
  }
}

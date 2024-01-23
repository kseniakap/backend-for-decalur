import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { PrismaService } from 'src/prisma.service';
import { PaginationService } from 'src/pagination/pagination.service';
import { PaginationModule } from 'src/pagination/pagination.module';
import { CategoryModule } from 'src/category/category.module';

@Module({
  controllers: [ProductController],
  imports: [PaginationModule, CategoryModule], 
  providers: [ProductService,  PrismaService, PaginationService],
})
export class ProductModule {}

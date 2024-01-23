import { Controller, Query, Get, UsePipes, Param, HttpCode, ValidationPipe, Put, Post, Delete,  Body} from '@nestjs/common';
import { ProductService } from './product.service';
import { GetAllProductDto } from './dto/get-all.product.dto';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { ProductDto } from './dto/product.dto';

@Controller('products')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @UsePipes(new ValidationPipe())
  @Get()
  async getAll(@Query() queryDto: GetAllProductDto){
    return this.productService.getAll(queryDto)
  }

  @Get('similar/:id')
  async getSimilar(@Param("id") id:string){
    return this.productService.getSimilar(+id)
  }

  @Get('by-slug/:slug')
  async getProductBySlug(@Param("slug") slug:string){
    return this.productService.bySlug(slug)
  }

  @Get('by-category/:categorySlug')
  async getProductByCategory(@Param("categorySlug") categorySlug:string){
    return this.productService.byCategory(categorySlug)
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Auth("admin")
  @Post()
  async createProduct(){
    return this.productService.create()
  }

  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Put(':id')
  @Auth("admin")
  async updateProduct(@Param("id") id: string, @Body() dto: ProductDto){
    return this.productService.update(+id, dto)
  }

  @HttpCode(200)
  @Delete(':id')
  @Auth("admin")
  async deleteProduct(@Param("id") id: string){
    return this.productService.delete(+id)
  }

  @Get(':id')
  @Auth("admin")
  async getProduct(@Param("id") id: string){
    return this.productService.byId(+id)
  }
}

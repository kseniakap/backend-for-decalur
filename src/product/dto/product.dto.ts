import {ArrayMinSize,  IsNumber, IsOptional, IsString } from "class-validator";
import { Prisma } from "@prisma/client";

export class ProductDto implements Prisma.ProductUpdateInput{
    @IsString()
    name: string

    @IsNumber()
    price: number

    @IsOptional()
    @IsString()
    description: string

    @IsOptional()
    @IsString({each:true})
    @ArrayMinSize(1)
    // images: Express.Multer.File[] | string[];
    images:string[];
    

    @IsNumber()
    categoryId:number

    @IsOptional()
    @IsString()
    slug:string

}
import {ArrayMinSize,  IsNumber, IsOptional, IsString, Min } from "class-validator";
import { Prisma } from "@prisma/client";

export class ProductDto implements Prisma.ProductUpdateInput{
    @IsString()
    name: string

    @IsNumber()
    @Min(0)
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
export class ProductUpdateDto implements Prisma.ProductUpdateInput{
    @IsOptional()
    @IsNumber()
    @Min(0)
    price: number

    @IsOptional()
    @IsString()
    description: string

    @IsOptional()
    @IsNumber()
    categoryId:number
}
import { Prisma } from "@prisma/client";
import { returnReviewObject } from "src/review/return-review.object";
import { returnCategoryObject } from "src/category/return-category.object";


export const productReturnObject: Prisma.ProductSelect = {
    images:true, 
    description: true, 
    id:true, 
    name: true, 
    price: true, 
    createdAt: true, 
    slug: true,
    category: {
        select: returnCategoryObject
    },
    reviews:{
        select:returnReviewObject, 
        orderBy:{
            createdAt:"desc"
        }
    },
   

}

export const orderReturnObject: Prisma.ProductSelect = {
    images:true, 
    id:true, 
    name: true, 
    price: true, 

}


export const productReturnObjectFullest:Prisma.ProductSelect = {
    ...productReturnObject , 
}
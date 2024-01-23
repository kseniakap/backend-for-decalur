import { Body, Controller, Get, Post, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { Auth } from 'src/auth/decorators/auth.decorator';
import { OrderService } from './order.service';
import { CurrentUser } from 'src/auth/decorators/user.decorator';
import { OrderDto } from './order.dto';
// import { PaymentStatusDto } from './payment-status.dto';

@Controller('orders')
export class OrderController {
  constructor(private readonly orderService: OrderService) {}

  //получение всех заказов на сайте
  @Get()
  @Auth("admin")
  getAll(){
    return this.orderService.getAll()
  }

  //получение пользователем его заказов
  @Get('by-user')
  @Auth()
  getByUserId(@CurrentUser("id") userId: number){
    return this.orderService.getByUserId(userId)
  } 
  
  //создание заказа и +(его оплата(скрыто))
  @UsePipes(new ValidationPipe())
  @HttpCode(200)
  @Post()
  @Auth()
  placeOrder(@Body() dto: OrderDto, @CurrentUser("id") userId: number){
    return this.orderService.placeOrder(dto, userId)
  }

  //Обновление статуса платежа
  // @HttpCode(200)
  // @Post("status")
  // async updateStatus(@Body() dto: PaymentStatusDto){
  //   return this.orderService.updateStatus(dto)
  // }
}

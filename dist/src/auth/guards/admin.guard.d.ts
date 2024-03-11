import { CanActivate, ExecutionContext } from '@nestjs/common';
export declare class OnlyAdminGuard implements CanActivate {
    canActivate(context: ExecutionContext): boolean;
}

import { PrismaService } from 'src/prisma.service';
import { UserService } from 'src/user/user.service';
export declare class StatisticsService {
    private prisma;
    private userService;
    constructor(prisma: PrismaService, userService: UserService);
    getMain(): Promise<{
        name: string;
        value: number;
    }[]>;
    getStaticticUser(userId: number): Promise<{
        name: string;
        value: number;
    }[]>;
}

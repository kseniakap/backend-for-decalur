import { StatisticsService } from './statistics.service';
export declare class StatisticsController {
    private readonly statisticsService;
    constructor(statisticsService: StatisticsService);
    getMainStatistics(): Promise<{
        name: string;
        value: number;
    }[]>;
    getStaticticUser(id: number): Promise<{
        name: string;
        value: number;
    }[]>;
}

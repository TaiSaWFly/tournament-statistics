export type AveragePlayerStatisticsRoleDataType = {
    tank: {
        name: "Tank WR";
        averageWinrate: number;
    };
    dps: {
        name: "Dps WR";
        averageWinrate: number;
    };
    support: {
        name: "Support WR";
        averageWinrate: number;
    };
};

export type AveragePlayerStatisticsDataType = {
    role: AveragePlayerStatisticsRoleDataType;
    winrate: {
        name: "Винрейт";
        winrate: number;
    };
    proximity: {
        name: "Близость";
        averageProximity: number;
    };
};

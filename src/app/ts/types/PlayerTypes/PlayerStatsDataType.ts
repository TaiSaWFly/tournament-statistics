import { ITournamentDb } from "../../models/ITournamentDb";
import { RoleStatisticsType } from "../RoleTypes/RoleStatisticsType";

export type PlayerStatsDataType = {
    tournamentsPlayed: number;
    tournamentsWon: number;
    winrateZero: number;
    winrateByMaps: number;
    bestResult: ITournamentDb | null;
    averageProximity: number;
    mapsWon: number;
    mapsAll: number;
    averagePlace: number;
    roleStatisticsData: RoleStatisticsType | null;
};

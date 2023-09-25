import { DashboardMemoryType } from "./DashboardMemoryType";

export type AppMemoryType = {
    dashboard: DashboardMemoryType;
    appTheme: { isDarkTheme: boolean };
};

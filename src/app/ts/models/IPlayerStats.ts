export interface IPlayerStats {
    _id: number;
    pageId: number;
    PlayerID: number;
    Игрок: string;
    "Выиграно карт": number;
    "Всего карт": number;
    Винрейт: number;
    Чемпионств: number;
    "Чемпионство роль": string[];
    "Отлётов в ноль": number;
    "Отлётов в ноль роль": string[];
    "Колличество турниров": number;
}

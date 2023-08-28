import { PlayerRoles } from "../types/PlayerTypes/PlayerRoles";

export interface ITournamentDb {
    _id: number;
    "Номер турнира": number;
    "ID команды": number;
    PlayerID: number;
    "Связка команды": string;
    Команда: string;
    Игрок: string;
    Роль: PlayerRoles;
    Место: number;
    "Сыграно матчей": number;
    "Выиграно карт": number;
    "Всего карт": number;
    "Винрейт ": number;
    Чемпионство: number;
    "Сыграно турниров"?: number;
    "Новичок ": number;
    "Новичок на роли": number;
    "Изменение рейтинга"?: number;
    "Рейтинг команды"?: number;
    "Уникальный игрок"?: number;
    Связка?: string;
    Цена?: number;
    Рейтинг: string;
    Дивизион: number | string;
    "Цена команды": number;
    Подроль: string;
    "Средняя близость матчей": number;
    "Независимая оценка"?: string;
}

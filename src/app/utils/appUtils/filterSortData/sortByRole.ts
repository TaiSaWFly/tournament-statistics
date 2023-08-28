import { ITournamentDb } from "../../../ts/models/ITournamentDb";

const sortByRole = (teamTournament: ITournamentDb[]) => {
    const arrTank: ITournamentDb[] = [];
    const arrDps: ITournamentDb[] = [];
    const arrSupport: ITournamentDb[] = [];
    const arrFlex: ITournamentDb[] = [];

    teamTournament.forEach((tour) => {
        if (tour.Роль === "tank") {
            arrTank.push(tour);
        }

        if (tour.Роль === "dps") {
            arrDps.push(tour);
        }

        if (tour.Роль === "support") {
            arrSupport.push(tour);
        }

        if (tour.Роль === "Flex") {
            arrFlex.push(tour);
        }
    });

    return [...arrTank, ...arrDps, ...arrSupport, ...arrFlex];
};

export default sortByRole;

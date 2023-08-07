import {
    ITournamentDb,
    ITournamentDbRole
} from "../../../../ts/models/ITournamentDb";

const countRoleStatistics = (
    data: ITournamentDb[],
    role: ITournamentDbRole
) => {
    let averageWinrate;
    let lastRate;
    const roleData = data.filter((tour) => tour.Роль === role);
    const tournamentsPlayed = roleData.length;

    if (tournamentsPlayed !== 0) {
        averageWinrate =
            roleData.reduce(
                (acc, tour) => acc + Number(tour["Винрейт "].toFixed(4)) * 100,
                0
            ) / tournamentsPlayed;
        averageWinrate = Number(averageWinrate.toFixed(2));
    } else {
        averageWinrate = 0;
    }

    if (tournamentsPlayed !== 0) {
        const sortLastTour = roleData.sort((a, b) => b._id - a._id)[0];
        lastRate = `${sortLastTour.Дивизион} div \n ${sortLastTour.Рейтинг}`;
    } else {
        lastRate = "";
    }

    return { roleData, tournamentsPlayed, averageWinrate, lastRate };
};

export default countRoleStatistics;

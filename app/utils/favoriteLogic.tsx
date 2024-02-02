import { Game, Team } from "../types/game";
import { teamData } from "../lib/teamData";

const favoriteLogic = (gameData: any) => {

    const homeTeamVar = gameData.home_team;
    const awayTeamVar = gameData.away_team; 
    const homeTeam = teamData[homeTeamVar];
    const awayTeam = teamData[awayTeamVar];
    let favoriteOdds = 0;
    let underdogOdds = 0;

    const findFavorite = (home: Team, away: Team) => {
        let team1 = gameData.bookmakers[0].markets[0].outcomes[0];
        let team2 = gameData.bookmakers[0].markets[0].outcomes[1];
        //if team1 is favorite
        if(team1.point < team2.point){
            favoriteOdds = team1.point
            underdogOdds = team2.point
            // if team1 is hometeam
            if (team1.name == homeTeam.fullname)  {
                return home;
            } 
            //if team 2 is favorite and home team
        } else if (team2.name == homeTeam.fullname) {
            favoriteOdds = team2.point
            underdogOdds = team1.point
            return home;
            //else return away
        } 
        return away;
    }

    const favorite: Team = findFavorite(homeTeam, awayTeam);

    const thisGame: Game = {
            id: gameData.id,
            homeTeam: homeTeam,
            awayTeam: awayTeam,
            favorite: favorite,
            favoriteOdds: favoriteOdds,
            underdogOdds: underdogOdds,
            time: new Date(gameData.commence_time)
    }

        return thisGame;
    }


 

export default favoriteLogic;
export interface Game {
    id: string;
    homeTeam: Team;
    awayTeam: Team;
    favorite: Team;
    favoriteOdds: number;
    underdogOdds: number; 
    time: Date;
}

export interface Team {
    name: string;
    city: string;
    fullname: string;
    wins: number;
    losses: number;
    logo: string;
}
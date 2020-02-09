import { Trade } from './trade'

export class Profile {
    name: string;
    team: string;
    trades: Trade[];

    constructor(name: string, team: string, trades: Trade[]) {
        this.name = name;
        this.team = team;
        this.trades = trades;
    }

}
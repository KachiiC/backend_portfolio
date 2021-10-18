import { KachiisRest } from "Tools/ApiTools";

export const FplEndpointsData = [
    {
        title: "Fantasy Premier League Stats",
        url: KachiisRest("api", "fpl/league=LEAGUE_ID")
    },
    {
        title: "Fantasy Premier League Player",
        url: KachiisRest("api", "fpl/player=PLAYED_ID")
    }
]

export const FplExamplePlayerData = `
{
    "player_id": 12705,
    "player_name": "Elijha Wong",
    "team_name": "Mateta Mata Tah",
    "current_gameweek": 8,
    "last_gameweek_points": 35,
    "points_total": 518,
    "transfers_total": 7,
    "points_on_transfers": 4,
    "team_value": 1013,
    "chips": [
        {
            "name": "Wild Card",
            "matchday": 4,
            "date": "28/08/2021"
        }
    ],
    "matches": [
        {
            "gameweek": 1,
            "game_week_points": 105,
            "points_total": 105,
            "transfers": 0,
            "team_value": 1000,
            "transfers_cost": 0,
            "bench_points": 4
        },

    ]
}
`
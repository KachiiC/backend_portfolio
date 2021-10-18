import { KachiisRest } from "Tools/ApiTools"

export const MmaFighterEndpoint = [
    {
        title: "MMA Fighters",
        url: KachiisRest("backend", "mma/fighters")
    },
    {
        title: "Featured MMA Fighter",
        url: KachiisRest("backend", "mma/featured=fighter")
    },
] 

export const MmaFighterExampleData = `
    {
        "name": "Deiveson Figueiredo",
        "rank": 1,
        "weight_class": "Flyweight",
        "link": "https://www.ufc.com/athlete/deiveson-figueiredo"
    }
`
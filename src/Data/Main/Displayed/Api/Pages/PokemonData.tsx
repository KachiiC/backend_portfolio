import { KachiisRest } from "Tools/ApiTools"

export const PokemonEndpointsData = [
    {
        title: "Pokemon Search",
        url: KachiisRest("api", "search/pokemon=POKEMON_NAME"),
    }
]

export const PokemonExampleData = `{
    "number": 25,
    "name": "Pikachu",
    "types": "Electric",
    "height": "40cm",
    "weight": "6.0kg",
    "front": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    "back": "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    "stat": [
        {
            "name": "Hp",
            "amount": 35,
            "effort": 0
        },
        {
            "name": "Attack",
            "amount": 55,
            "effort": 0
        },
        {
            "name": "Defense",
            "amount": 40,
            "effort": 0
        },
        {
            "name": "Special attack",
            "amount": 50,
            "effort": 0
        },
        {
            "name": "Special defense",
            "amount": 50,
            "effort": 0
        },
        {
            "name": "Speed",
            "amount": 90,
            "effort": 2
        }
    ]
}`
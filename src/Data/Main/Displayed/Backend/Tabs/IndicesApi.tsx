import { KachiisRest } from "Tools/ApiTools"

const indices = (input: string) => KachiisRest("backend", "finance/indices_list/") +  input

export const IndicesEndpoint = [
    {
        title: "currency",
        url: indices("currency")
    },
    {
        title: "Major",
        url: indices("major")
    },
    {
        title: "S&P",
        url: indices("SNP")
    },
    {
        title: "US",
        url: indices("us")
    },
]

export const IndicesExampleData = `
    {
        "name": "S&P 500 INDEX",
        "code": "SPX",
        "last": "4551.67",
        "change_amount": "−23.13",
        "change_percentage": "−0.51",
        "high": "4584.57",
        "low": "4551.66",
        "rating": "Buy",
        "list_type": "Gainers"
    }
`
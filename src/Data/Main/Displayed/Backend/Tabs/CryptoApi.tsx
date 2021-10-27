import { KachiisRest } from "Tools/ApiTools"

const crypto = (input: string) => KachiisRest("backend", "finance/crypto_list/") +  input

export const CrpytoEndpoint = [
    {
        title: "Gainers",
        url: crypto("gainers")
    },
    {
        title: "Losers",
        url: crypto("losers")
    },
    {
        title: "Trending",
        url: crypto("trending")
    },
    {
        title: "Popular",
        url: crypto("popular")
    }
]

export const CryptoExampleData = `
    {
        "coincap_id": "12899",
        "name": "InfinitX",
        "code": "INX",
        "price": "0.1328",
        "percentage_change": "856.26",
        "volume": "1,269,771",
        "list_type": "popular",
        "link": "https://coinmarketcap.com/currencies/infinitx/"
    }
`
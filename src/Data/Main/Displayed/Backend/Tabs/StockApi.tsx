import { KachiisRest } from "Tools/ApiTools"

const stock = (input: string) => KachiisRest("backend", "finance/stock_list/") +  input

export const StockEndpoint = [
    {
        title: "active",
        url: stock("active")
    },
    {
        title: "all time high",
        url: stock("all-time-high")
    },
    {
        title: "all time low",
        url: stock("all-time-low")
    },
    {
        title: "gainers",
        url: stock("gainers")
    },
    {
        title: "losers",
        url: stock("losers")
    },
    {
        title: "market cap",
        url: stock("market-cap")
    },
    {
        title: "most expensive",
        url: stock("most-expensive")
    },
    {
        title: "most volatile",
        url: stock("most-volatile")
    },
    {
        title: "overbought",
        url: stock("overbought")
    },
    {
        title: "oversold",
        url: stock("oversold")
    },
    {
        title: "unusual volume",
        url: stock("unusual-volume")
    },
    {
        title: "52 week high",
        url: stock("52-week-high")
    },
    {
        title: "52 week low",
        url: stock("52-week-low")
    },
]

export const StockExampleData = `
    {
        "name": "SIYATA MOBILE, INC.",
        "code": "SYTA",
        "price": "5.77",
        "gain_loss_amount": "2.88",
        "gain_loss_percentage": "99.57%",
        "rating": "Buy",
        "list_type": "Gainers"
    }
`
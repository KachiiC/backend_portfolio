import { KachiisRest } from "Tools/ApiTools"

export const MmaTechniquesEndpoint = [
    {
        title: "MMA Techniques",
        url: KachiisRest("backend", "mma/techniques")
    },
    {
        title: "Featured MMA Technique",
        url: KachiisRest("backend", "mma/featured=technique")
    },
    {
        title: "MMA Techniques Search",
        url: KachiisRest("backend", "mma/techiniques/search=WORD")
    },
    {
        title: "MMA Techniques Type",
        url: KachiisRest("backend", "mma/techiniques/type=type")
    }
] 

export const MmaTechniquesExampleData = `
    {
        "title": "Cross",
        "type": "Striking ",
        "discipline": "Boxing",
        "difficulty": "Easy",
        "description": "A cross (also commonly called a straight) is a punch usually thrown with the dominant hand",
        "tutorial": "Z2O6E-ssuUg?t=43",
        "mistakes": "o3k9NNAUwIE"
    }
`
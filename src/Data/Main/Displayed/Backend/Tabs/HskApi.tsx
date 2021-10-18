import { KachiisRest } from "Tools/ApiTools";


export const HskEndpointsData = [
    {
        title: "HSK Words",
        url: KachiisRest("backend", "hsk/level=all")
    },
    {
        title: "HSK Level",
        url: KachiisRest("backend", "hsk/level=LEVEL")
    },
    {
        title: "Featured HSK Word",
        url: KachiisRest("backend", "hsk/featured")
    },
    {
        title: "HSK Words Search",
        url: KachiisRest("backend", "hsk/search=CHINESE_WORD")
    }
]

export const HskExampleData = `
{
    "chinese_characters": "大",
    "pinyin": "dà",
    "definition": "big, large",
    "type": "adjective",
    "hsk_level": 1
}
`
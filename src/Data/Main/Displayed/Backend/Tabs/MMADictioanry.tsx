import { KachiisRest } from "Tools/ApiTools"

export const MmaDictionaryEndpoint = [
    {
        title: "MMA Dictionary",
        url: KachiisRest("backend", "mma/dicitionary")
    },
    {
        title: "Featured MMA Word",
        url: KachiisRest("backend", "mma/featured=word")
    },
    {
        title: "MMA Dicitionary Word Search",
        url: KachiisRest("backend", "mma/dictionary/search=WORD")
    },
    {
        title: "MMA Dicitionary Type Search",
        url: KachiisRest("backend", "mma/dictionary/type=type")
    }
] 

export const MmaDictionaryExampleData = `
{
    "title": "Omoplata",
    "type": "Submission",
    "example_type": "Video",
    "example": "PUj9TUK32ww?start=29",
    "definition": "A Kimura lock using the leg, instead of the arm, to trap the athlete’s arm."
}
`
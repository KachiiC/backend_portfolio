import { KachiisRest } from "Tools/ApiTools"

export const MmaArticlesEndpoint = [
    {
        title: "MMA Articles",
        url: KachiisRest("backend", "mma/articles")
    },
    {
        title: "Featured MMA Article",
        url: KachiisRest("backend", "mma/featured=article")
    },
] 

export const MmaArticlesExampleData = `
    {
        "title": "Conor McGregor allegedly punched a famous Italian DJ and broke his nose",
        "thumbnail_url": "https://cdn.mmaweekly.com/wp-content/uploads/2021/10/conor-mcgreor-weigh-750-440x250.jpg",
        "post_time_stamp": "Oct 18, 2021",
        "post_description": "Famous Italian DJ Francesco Facchinetti has accused former two-division UFC Champion Conor McGregor of punching him and breaking his nose.",
        "post_link": "https://www.mmaweekly.com/conor-mcgregor-allegedly-punched-a-famous-italian-dj-and-broke-his-nose"
    }
`
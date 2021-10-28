import { KachiisRest } from "Tools/ApiTools"

export const InstagramEndpointsData = [
    {
        title: "Instagram Search",
        url: KachiisRest("api", "instagram/profile=INPUT_INSTAGRAM_NAME"),
    }
]

export const InstagramExampleData = `[
    {
        "type": "Video",
        "media_url": "https://scontent-arn2-1.cdninstagram.com/v/t50.2886-16/245547622_616730746007773_6819476144760832797_n.mp4?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=101&_nc_ohc=mca59M0PUjIAX-6019L&edm=ABfd0MgBAAAA&ccb=7-4&oe=616EC7BC&oh=227328d6952c414544f2feb74f8834fc&_nc_sid=7bff83",
        "thumbnail_url": "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/245575899_592134971930126_5922450420821363485_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=6nFNdJyAwJwAX9g9GYn&edm=ABfd0MgBAAAA&ccb=7-4&oh=80d206b1ee3179938538baacd19c3d6e&oe=616EFDDD&_nc_sid=7bff83",
        "caption": "Proud to have #HerbalifeNutrition fueling me through my new journey. Sky is the limit.",
        "likes": 2119566,
        "comments": 19128,
        "upload_date": "15/10/2021",
        "link": "https://www.instagram.com/p/CVDpBU3L_P3",
        "location": "none",
        "views": 6838725
    },
    {
        "type": "Picture",
        "media_url": "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-15/fr/e15/p1080x1080/246005316_941201629805503_6388479407496317828_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=VJK1myHWh8YAX8iwNr3&edm=ABfd0MgBAAAA&ccb=7-4&oh=3253f7844415018470ca01f83041d05b&oe=617379AE&_nc_sid=7bff83",
        "thumbnail_url": "https://scontent-arn2-1.cdninstagram.com/v/t51.2885-15/sh0.08/e35/c0.135.1080.1080a/s640x640/246005316_941201629805503_6388479407496317828_n.jpg?_nc_ht=scontent-arn2-1.cdninstagram.com&_nc_cat=1&_nc_ohc=VJK1myHWh8YAX8iwNr3&edm=ABfd0MgBAAAA&ccb=7-4&oh=f29ddb2f80e28206bb02b792760189e7&oe=61740219&_nc_sid=7bff83",
        "caption": "Morning essentials: coffee and motivation. \n\n#CR7UNDERWEAR",
        "likes": 8883309,
        ...
    }
]`
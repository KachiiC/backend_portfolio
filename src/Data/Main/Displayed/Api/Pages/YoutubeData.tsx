import { KachiisRest } from "Tools/ApiTools"

export const YoutubeEndpointsData = [
    {
        title: "Youtube Video Search",
        url: KachiisRest("api", "video=VIDEO_ID")
    },
    {
        title: "Youtube Playlist Search",
        url: KachiisRest("api", "playstlist=PLAYLIST_ID")
    },
    {
        title: "Featured Youtube Video",
        url: KachiisRest("api", "featured=PLAYLIST_ID")
    }
]

export const YoutubeExampleData = `
    {
        "video_title": "Central Cee - Obsessed With You",
        "video_id": "3k2J7eavWiM",
        "video_description": "Stream it here: https://ada.lnk.to/obsessed",
        "video_thumbnail": "https://i.ytimg.com/vi/3k2J7eavWiM/maxresdefault.jpg",
        "upload_date": "10/09/2021"
    }
`
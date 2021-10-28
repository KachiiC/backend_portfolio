// PROPS
// PAGES
import { FplEndpointsData, FplExamplePlayerData } from "./Pages/FplData";
import { InstagramEndpointsData, InstagramExampleData } from "./Pages/InstragramData";
import { PokemonEndpointsData, PokemonExampleData } from "./Pages/PokemonData";
import { WeatherEndpointsData, WeatherExampleData } from "./Pages/WeatherData";
import { YoutubeEndpointsData, YoutubeExampleData } from "./Pages/YoutubeData";
// COMPONENTS
import { PageContainer } from "Components/PageComponents/PageContainer";

const ApiPagesData = [
    {
        title: "Fpl",
        description: "This Api endpoints uses the fantansy premier league api. The server requests information from the server and returns either a players individual data or league. The data includes the following: player id , player name , team name, current gameweek, last gameweek points , points total, transfers total, points spent on transfers, team value, chips used, and details on each matchweek of player.",
        endpoint: FplEndpointsData,
        example: FplExamplePlayerData,
    },
    {
        title: "Instagram",
        description: "This Api uses a rapidapi instagram endpoint and returns an array of files based on the input user. The data includes the media type, media_url, thumbnail_url, the post caption, amount of likes, amount of comments, the upload date, the post link, the post location, and views (if the post is a video).",
        endpoint: InstagramEndpointsData,
        example: InstagramExampleData,
    },
    {
        title: "Pokemon",
        description: "This Api uses a pokemon api and returns the information on the search pokemon. The returned information includes the pokemons number, name, height, weight, stats and images of the pokemon.",
        endpoint: PokemonEndpointsData,
        example: PokemonExampleData
    },
    {
        title: "Weather",
        description: "This Api uses the weather meta api and returns information on the input weather. The returned data includes the city, the location, sunset, time and a the next 6 days forecast (including temprature, weather states and windspeed)",
        endpoint: WeatherEndpointsData,
        example: WeatherExampleData
    },
    {
        title: "Youtube",
        description: "This Api uses google api and returns youtube data based on the input. The types of data are divided into playlist, video or featured. Video the video title, id, description, thumbnail and description. Playlsit returns an array of videos data based on the input playlist. Finally featured takes a playlist id and returns a random video from that particular playlist.",
        endpoint: YoutubeEndpointsData,
        example: YoutubeExampleData,
    }
]

ApiPagesData.map((tab: any) => {
    tab.content = (
        <PageContainer
            description={tab.description}
            endpoints={tab.endpoint}
            example={tab.example}
            title={tab.title}
        />
    )
    
    return {
        title: tab.title,
        content: tab.content
    }
})

export default ApiPagesData
// PAGES
import { FplEndpointsData, FplExamplePlayerData } from "./Tabs/FplData";
import { InstagramEndpointsData, InstagramExampleData } from "./Tabs/InstragramData";
import { PokemonEndpointsData, PokemonExampleData } from "./Tabs/PokemonData";
import { WeatherEndpointsData, WeatherExampleData } from "./Tabs/WeatherData";
import { YoutubeEndpointsData, YoutubeExampleData } from "./Tabs/YoutubeData";
// COMPONENTS
import { ApiTabsDataProps } from "Props/Api/ApiTabs";
import { TabTemplateComponent } from "Components/PageComponents/TabTemplateComponent";

const ApiTabsData = [
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

ApiTabsData.map((tab: ApiTabsDataProps) => {
    tab.content = (
        <TabTemplateComponent
            endpoints={tab.endpoint}
            example={tab.example}
        />
    )
    
    return tab
})

export default ApiTabsData
import { KachiisRest } from "Tools/ApiTools"

export const WeatherEndpointsData = [
    {
        title: "Weather location search",
        url: KachiisRest("api", "search/weather=WEATHER_LOCATION/")
    }
]

export const WeatherExampleData = `{
    "title": "London",
    "sun_set": "01:05:12",
    "timezone_name": "LMT",
    "location_type": "City",
    "longitude": "-0.12714",
    "latitude": "51.506321",
    "timezone": "Europe/London",
    "forecast": [
        {
            "weather_state_name": "Light Rain",
            "weather_state_abbr": "lr",
            "wind_direction_compass": "S",
            "created": "00:59:02",
            "applicable_date": "18/10/2021",
            "min_temp": "10.35",
            "max_temp": "16.425",
            "the_temp": "16.155",
            "wind_speed": "5.411450279113974",
            "wind_direction": "189.47782577647013",
            "air_pressure": "1016.5",
            "humidity": "79",
            "visibility": "7.939570408812535",
            "predictability": "75"
        },
        {
            ...
        }
    ]
}` 
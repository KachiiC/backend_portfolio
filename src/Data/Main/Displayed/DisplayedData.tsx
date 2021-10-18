// PROPS
import { PageContainerProps } from "Props/MainProps";
// DATA
import ApiTabsData from "./Api/ApiTabsData";
// COMPONENTS
import AntdTabs from "Components/ExternalLibraries/AntdTabs";
import DisplayOverviewTables from "Sections/Main/Pages/Displayed/Overview";
import BackendTabsData from "./Backend/BackendTabsData";


const DisplayedData: PageContainerProps[] = [
    {
        title: "Backend",
        description: "The backend endpoints use a mixture of web scraping and csv files to create endpoints. The web scrapping uses a combination of BeautifulSoup and Selenium to create data. The server uses python to convert csv files and create the endpoint data.",
        component: <AntdTabs data={BackendTabsData} />,
    },
    {
        title: "API",
        description: "These api endpoints use other api's to retrieve data and returns them in a more user-friendly format. So rather than scanning hundreds of lines of code, I've made them return the essential information that you would need. The api endpoint retrieves the data using python requests and caches the data for a specific period, this means the retrieved data is stored temparorily so it can be reused for that specific period. Some caches last for minutes, others are hours or days).",
        component: <AntdTabs data={ApiTabsData} />,
    },
    {
        title: "Overview",
        description: "Kachii's rest is a backend server built with Django rest-framework and hosted on heroku. The endpoints to this server are divided into two categories, api and backend. This server is constantly maintained and updated but for now this is a list of all the endpoints you can use for this server. This server can also be run locally using the code attached to the navbar.",
        component: <DisplayOverviewTables />
    },
]

export default DisplayedData
// PAGES
// COMPONENTS
import { ApiTabsDataProps } from "Props/Api/ApiTabs";
import { TabTemplateComponent } from "Components/PageComponents/TabTemplateComponent";
import { HskEndpointsData, HskExampleData } from "./Tabs/HskApi";
import { MmaArticlesEndpoint, MmaArticlesExampleData } from "./Tabs/MmaArticles";
import { MmaDictionaryEndpoint, MmaDictionaryExampleData } from "./Tabs/MMADictioanry";
import { MmaFighterEndpoint, MmaFighterExampleData } from "./Tabs/MmaFighter";
import { MmaStoreEndpoint, MmaStoreExampleData } from "./Tabs/MmaStore";
import { MmaTechniquesEndpoint, MmaTechniquesExampleData } from "./Tabs/MmaTechniques";

const BackendTabsData = [
    {
        title: "Hsk",
        description: "This Api endpoints uses a CSV to populate the database and returns a list of chinese words. Each object returns the hsk level, chinese charcter, definition, pinyin(pronunciation) and word type (for example,verb).",
        endpoint: HskEndpointsData,
        example: HskExampleData,
    },
    {
        title: "MMA Articles",
        description: "This api is designed using python webscrap beatiful soup. The articles are scrapped from MMA News, each object returns the article title, description, thumbnail, link and data. Additionally you can also request a featured article which is selected from the website at random.",
        endpoint: MmaArticlesEndpoint,
        example: MmaArticlesExampleData
    },
    {
        title: "MMA Dictionary",
        description: "This api is desgined using a csv converter. The data sits in the data files of the backend and can only be repopulated by the admin with django commands. The dictionary contains common mma (mixed martial arts) words that are commonly used. Each object returns the title of the word, the type of word, the definition, the example_type(image or video) and an example. The endpoint includes the option to return a featured word (a word selected at random). You can also searching a specific word or word type (for exmaple submissions terms).",
        endpoint: MmaDictionaryEndpoint,
        example: MmaDictionaryExampleData
    },
    {
        title: "MMA Fighters",
        description: "This api is designed using python webscrap beatiful soup. The top 15 fighters of each weight class are scrapped from the UFC website and returned as data. The data returns the fighter's name, rank, division and a link to their ufc profile. In addition you can also just return fighters from a specific division or a featured fighter selected at random.",
        endpoint: MmaFighterEndpoint,
        example: MmaFighterExampleData
    },
    {
        title: "MMA Store",
        description: "This api is designed using python webscrap beatiful soup. Items from the venum store (the official sponsor for the ufc). The data returns the recently added items from the store which contains the title of the item, the price, the link and an image of the item. In addition you can also just return a featured item selected at random.",
        endpoint: MmaStoreEndpoint,
        example: MmaStoreExampleData
    },
    {
        title: "MMA Techniques",
        description: "This api is desgined using a csv converter. The data sits in the data files of the backend and can only be repopulated by the admin with django commands. The techniques contain common techniques used in mma (mixed martial arts). Each object returns the title of the technique, type of technique, the discipline it comes from, the difficulty of the technique, a description, a tutorial and common mistakes of the technique. A featured argument can also be passed to return a technique at random. Additionally you can also searching a specific technique or technique type (for exmaple submissions techniques).",
        endpoint: MmaTechniquesEndpoint,
        example: MmaTechniquesExampleData
    },
]

BackendTabsData.map((tab: ApiTabsDataProps) => {
    tab.content = (
        <TabTemplateComponent
            endpoints={tab.endpoint}
            example={tab.example}
        />
    )
    
    return tab
})

export default BackendTabsData
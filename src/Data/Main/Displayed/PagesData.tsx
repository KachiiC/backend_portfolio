// TOOLS
import { LinkRenderer } from "Tools/RoutersRender"
// PAGES
// import DisplayedData from "./DisplayedData"
// import PageContainer from "Components/PageComponents/PageContainer"
import { pageDataProps } from "Props/MainProps"
import BackendTabsData from "./Backend/BackendPagesData"
import ApiTabsData from "./Api/ApiPagesData"

const PagesData:pageDataProps [] = [
    {
        title: "Api",
        sub_menu: ApiTabsData
    },
    {
        title: "Backend",
        sub_menu: BackendTabsData
    },
    {
        title: "Code",
        external_link: "https://github.com/KachiiC/Kachiis_Rest"
    }
]

// Returns the data as links before export
LinkRenderer(PagesData)

export default PagesData
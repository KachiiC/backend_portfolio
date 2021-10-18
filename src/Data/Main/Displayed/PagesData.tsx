// TOOLS
import { LinkRenderer } from "Tools/RoutersRender"
// PAGES
import DisplayedData from "./DisplayedData"
import PageContainer from "Components/PageComponents/PageContainer"
import { pageDataProps } from "Props/MainProps"

const PagesData:pageDataProps [] = [
    {
        title: "Code",
        external_link: "https://github.com/KachiiC/Kachiis_Rest"
    }
]

DisplayedData.map((data) => {

    const content = (
        <PageContainer 
            title={data.title}
            description={data.description}
            component={data.component}
        />
    )

    return PagesData.unshift({
        title: data.title,
        content: content
    })
})

// Returns the data as links before export
LinkRenderer(PagesData)

export default PagesData
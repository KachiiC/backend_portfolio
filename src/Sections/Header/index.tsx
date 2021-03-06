// DATA
import DataOverview from "Data/DataOverview"
import PagesData from "Data/Main/Displayed/PagesData"
// COMPONENTS
import SiteNavbar from "./SiteNavbar"

const headerData = DataOverview.navbar_data

const SiteHeader = (
    <SiteNavbar 
        data={PagesData} 
        title={headerData.title}
    />
)

export default SiteHeader
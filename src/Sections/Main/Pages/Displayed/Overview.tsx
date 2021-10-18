// DATA
import { OverviewTables } from "Data/Main/Displayed/Overview/OverviewTables";
// COMPONENTS
import SiteTable from "Components/SiteComponents/SiteTable";

const DisplayOverviewTables = () => {

    const displayTables = OverviewTables.map((table) => (
        <div className="endpoint-table" 
            key={table.title}
        >
            <h1>{table.title}</h1>
            <SiteTable 
                data={table.data}
            />
        </div>
    ))

    return <>{displayTables}</>
}

export default DisplayOverviewTables
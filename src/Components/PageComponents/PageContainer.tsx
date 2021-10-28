import SiteTable from "Components/SiteComponents/SiteTable"
import { PageContainerProps } from "Props/MainProps"
import { StringUppercase } from "Tools/StringTools"

export const PageContainer = (props: PageContainerProps) => {

    const {
        title,
        description,
        endpoints,
        example 
    } = props

    return (
        <div className="page-container">
            <h1>{StringUppercase(title)}</h1>
            <p>{description}</p>
            <h2>ENDPOINTS</h2>
            <SiteTable 
                data={endpoints} 
            />
            <h2>Example Data</h2>
            <pre>
                {example}
            </pre>
        </div>
    )
}
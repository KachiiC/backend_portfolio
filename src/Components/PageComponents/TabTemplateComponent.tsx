import SiteTable from "Components/SiteComponents/SiteTable"

export const TabTemplateComponent = (props: any) => {

    return (
        <>
            <h1>Endpoints</h1>
            <SiteTable 
                data={props.endpoints} 
            />
            <h2>Example Data</h2>
            <pre>
                {props.example}
            </pre>
        </>
    )
}
const PageContainer = (props: any) => (
    <div className="page-container">
        <h1>{props.title}</h1>
        <p>
            {props.description}
        </p>
        {props.component}
    </div>
)

export default PageContainer
// PROPS
import { HomeSingleCardProps } from "Props/MainProps"
// TOOLS
import SiteIcon from "Tools/SiteIcon"
import { SiteLink } from "Tools/LinkTools"

const HomeSingleCard = (props: HomeSingleCardProps) => {

    const HomeIcon = (
        <>
        <h1>{props.title}</h1>
            <SiteIcon 
                type={props.icon} 
                size="10x" 
            />
        </>
    )

    return (
        <div className="site-col-6 home-api-card">
            <SiteLink 
                link={`/${props.link}`}
                type="local" 
                placeholder={HomeIcon}
            />
        </div>
    )
}

export const HomeCards = (props: {data: HomeSingleCardProps[]}) => {

    const displayCards = props.data.map((card) => (
        <HomeSingleCard
            key={card.title}
            title={card.title}
            icon={card.icon}
            link={card.link}
        />
    ))

    return (
        <>
            {displayCards}
        </>
    )

}

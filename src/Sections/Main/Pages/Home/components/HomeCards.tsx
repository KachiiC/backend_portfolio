// TOOLS
import SiteIcon from "Tools/SiteIcon"
import { SiteLink } from "Tools/LinkTools"

interface HomeSingleCardProps {
    title: string; 
    icon: string;
    link: string;
}

const HomeSingleCard = (props: HomeSingleCardProps) => (
    <div className="site-col-6 home-api-card">
        <SiteLink 
            link={props.link} 
            type="local" 
            placeholder={
                <>
                    <h1>{props.title}</h1>
                    <SiteIcon 
                        type={props.icon} 
                        size="10x" 
                    />
                </>
            }
        />
    </div>
)

export const HomeCards = (props: {data: HomeSingleCardProps[]}) => {

    const displayCards = props.data.map((card) => (
        <HomeSingleCard
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

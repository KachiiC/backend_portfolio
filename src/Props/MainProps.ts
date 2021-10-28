export interface subMenuProps {
    external_link?: string;
    title: string;
    content?: string | JSX.Element
    link?: string;
}

export interface pageDataProps {
    external_link?: string;
    title: string;
    content?: string | JSX.Element | undefined;
    link?: string;
    sub_menu?: subMenuProps[]
}

export interface pageTemplateProps {
    name: string | undefined
}

export interface PageContainerProps { 
    title: string; 
    description: string; 
    component: JSX.Element 
}

export interface HomeSingleCardProps {
    title: string; 
    icon: string;
    link: string;
}
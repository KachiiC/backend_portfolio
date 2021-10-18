export interface ApiTabsDataProps {
    content?: any
    title: string;
    description?: string;
    endpoint?: {
        title?: string;
        url?: string;
    }[];
    example?: string;
}
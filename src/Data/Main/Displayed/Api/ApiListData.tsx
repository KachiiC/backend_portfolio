// PROPS
import { ApiEndpointsProps } from "Props/Api/ApiEndpoints";
// COMPONENTS
import ApiTabsData from "./ApiPagesData";

const ApiListData: ApiEndpointsProps[] = []
    
ApiTabsData.map((tab) => tab.endpoint.map((tab) => ApiListData.push(tab)))


export default ApiListData
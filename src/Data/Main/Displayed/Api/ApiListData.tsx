// PROPS
import { ApiEndpointsProps } from "Props/Api/ApiEndpoints";
// COMPONENTS
import ApiTabsData from "./ApiTabsData";

const ApiListData: ApiEndpointsProps[] = []
    
ApiTabsData.map((tab) => tab.endpoint.map((tab) => ApiListData.push(tab)))


export default ApiListData
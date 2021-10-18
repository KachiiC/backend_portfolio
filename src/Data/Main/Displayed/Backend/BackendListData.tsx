// PROPS
import { ApiEndpointsProps } from "Props/Api/ApiEndpoints"
import BackendTabsData from "./BackendTabsData"

export const BackendListData:ApiEndpointsProps[] = []

BackendTabsData.map((tab: any) => tab.endpoint.map((tab: any) => BackendListData.push(tab)))


export default BackendListData
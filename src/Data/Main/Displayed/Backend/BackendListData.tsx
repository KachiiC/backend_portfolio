// PROPS
import { ApiEndpointsProps } from "Props/Api/ApiEndpoints"
import BackendPagesData from "./BackendPagesData"

export const BackendListData:ApiEndpointsProps[] = []

const BackendList = BackendPagesData.map((tab: any) => tab.endpoint.map((tab: any) => BackendListData.push(tab)))


export default BackendList
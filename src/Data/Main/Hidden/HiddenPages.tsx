import Api from "Sections/Main/Pages/Hidden/Api"
import Backend from "Sections/Main/Pages/Hidden/Backend"
import Test from "Sections/Main/Pages/Hidden/Test"
// TOOLS
import { LinkRenderer } from "Tools/RoutersRender"
// import { ExampleContentRender } from "Tools/ExampleTools"

// Pages are hidden from navbar
const HiddenPagesData = [
    {
        title: "Api",
        content: Api
    },
    {
        title: "Backend",
        content: Backend
    },
    {
        title: "Test",
        content: <Test />
    }
]

// Renders content for each object (for example use only)
// ExampleContentRender(HiddenPagesData)
// Returns the data as links before export

LinkRenderer(HiddenPagesData)

export default HiddenPagesData
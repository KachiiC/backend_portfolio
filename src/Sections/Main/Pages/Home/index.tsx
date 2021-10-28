// CSS
import './Home.css'
// COMPONENTS
import { HomeCards } from './components/HomeCards'

const HomeData = [
    {
        title: "API",
        icon: "postgres",
        link: "api"
    },
    {
        title: "BACKEND",
        icon: "python",
        link: "backend"
    }
]


const Home = (
    <div className="site-grid-system home-container">
        <HomeCards 
            data={HomeData} 
        />
    </div>
)

export default Home

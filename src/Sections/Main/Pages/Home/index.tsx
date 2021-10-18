// CSS
import { HomeCards } from './components/HomeCards'
import './Home.css'
// COMPONENTS

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

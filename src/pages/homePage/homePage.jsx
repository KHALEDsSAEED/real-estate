import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

function homePage() {
    return (
        <div className='home-page'>
            <div className="text-container">
                <div className="wrapper">
                    <h1 className='title'>
                        Find real estate and get your dream place.
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, nulla excepturi voluptates necessitatibus neque maiores dolore soluta exercitationem mollitia iusto a animi commodi suscipit perspiciatis ex modi quasi aliquam? Vel.
                    </p>
                    <SearchBar/>
                    <div className="boxes">
                        <div className="box">
                            <h1>10+</h1>
                            <h2>Years of Experience</h2>
                        </div>
                        <div className="box">
                            <h1>100</h1>
                            <h2>Award Gained</h2>
                        </div>
                        <div className="box">
                            <h1>1000+</h1>
                            <h2>Property Ready</h2>
                        </div>
                    </div>
                </div>
            </div>
            <div className="image-container">
                <img src="/bg.png" alt="hero-img" />
            </div>

        </div>
    )
}

export default homePage
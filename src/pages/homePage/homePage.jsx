import SearchBar from '../../components/searchBar/SearchBar'
import './homePage.scss'

function homePage() {
    return (
        <div className='home-page'>
            <div className="text-container">
                <div className="wrapper">
                    <h1 className='title'>
                        Discover Your Dream Home
                    </h1>
                    <p>
                        Find your dream home with us. Rent or buy properties easily.
                        Discover top listings, beautiful homes, and great deals.
                        Start your journey to a perfect home today!
                        Explore diverse neighborhoods and exclusive offers tailored just for you.
                    </p>
                    <SearchBar />
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
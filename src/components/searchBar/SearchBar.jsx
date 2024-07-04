import './searchBar.scss'
import { useState } from 'react'

const types = ['buy', 'rent'];

function SearchBar() {

    const [query, setQuery] = useState({
        type: 'buy',
        location: '',
        minPrice: 0,
        maxPrice: 0
    });

    const switchType = (t) => {
        setQuery((prev) => ({
            ...prev,
            type: t
        })
        )
    }

    return (
        <div className='search-bar'>

            <div className="type">
                {
                    types.map((type, i) => (
                        <button key={i}
                            onClick={() => switchType(type)}
                            className={query.type === type ? 'active' : ''}
                        >
                            {type}
                        </button>
                    ))
                }
            </div>

            <div className="">
                <form>
                    <input
                        type="text"
                        name='location'
                        placeholder="Location"
                    />
                    <input
                        type="number"
                        name='minPrice'
                        placeholder="Min Price"
                    />
                    <input
                        type="number"
                        name='maxPrice'
                        placeholder="Max Price"
                    />
                    <button>
                        <img src="/search.png" alt="search" />
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SearchBar
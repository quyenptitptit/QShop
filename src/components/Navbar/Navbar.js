import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import Dropdown from '../Dropdown/Dropdown';
import { Link } from 'react-router-dom';
import data_kids from '../Item/Item_kids'
import { useState } from 'react';
import data from '../Search/Data.json'


const DATA = [
    {
        label: 'Home',
        path: '/home',
        children: []
    }, {
        label: 'Products',
        path: '/products',
        children: [{
            title: 'Men',
            path: '/men',
            cName: 'dropdown-link'
        },
        {
            title: 'Women',
            path: '/women',
            cName: 'dropdown-link'
        },
        {
            title: 'Kids',
            path: '/kids',
            cName: 'dropdown-link'
        }]
    }, {
        label: 'Collections',
        path: '/collections',
        children: []
    }, {
        label: 'Introduction',
        path: '/introduction',
        children: []
    }


]


function Navbar({filteredData, setFilteredData}) {
    
    const [wordEntered, setWordEntered] = useState('')

    const handleFilter = (event) => {
        const searchWord = event.target.value;
        setWordEntered(searchWord);
        const newFilter = data.filter((value) => {
            return value.name.toLowerCase().includes(searchWord.toLowerCase());
        });

        if (searchWord === "") {
            setFilteredData([]);
        } else {
            setFilteredData(newFilter);
        }
    };

    const clearInput = () => {
        setFilteredData([]);
        setWordEntered("");
    };

    const handleOnClick = () => {
        setFilteredData([])
    }


    return (
        <div className='navbar'>
            <nav className='menu'>
                {DATA.map(e => <div><Dropdown data={e} /></div>)}
            </nav>

            <div>
                <form className='search'>
                    <input type='text' className='search-input' placeholder='Search ..'
                        value={wordEntered} onChange={handleFilter} />
                    <Link to='/search'><button onClick='' ><FaSearch /></button></Link>
                </form>
                {/* {filteredData.length != 0 && (
                    <div className="dataResult">
                        {filteredData.map((value, key) => (
                            
                                <button onClick={() => {
                                    setFilteredData(value)
                                }}><p>{value.name} - price: ${value.cost}</p></button>
                            
                        ))}
                    </div>
                )} */}
            </div>

        </div>

    )
}

export default Navbar
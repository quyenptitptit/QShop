import './Navbar.css'
import { FaSearch } from "react-icons/fa";
import Dropdown from '../Dropdown/Dropdown';
import { Link} from 'react-router-dom';
import data_kids from '../Item/Item_kids'

const DATA = [
    {
        label: 'Home',
        path: '/',
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


function Navbar(props) {

    const HandleOnChangeInput = (e) => {
        props.setInputData(e.target.value)
        // handleSearch(e.target.value)
    }

    const handleSearch = (search) => {
        let sourceArray = data_kids;
        let newArray = [];
        if (search.length > 0) {
          search.toLowerCase();
          for (let item of sourceArray) {
            if (item.name.toLowerCase().indexOf(search) > -1) {
              newArray.push(item);
            }
          }
        }
        props.setInputData({
          newArray
        });
      }
    

    return (
        <div className='navbar'>
            <nav className='menu'>
                {DATA.map(e => <div><Dropdown data={e}/></div>)}
            </nav>
        
            <div>
                <form className='search'>
                    <input type='text' className='search-input' placeholder='Search ..' 
                        value={props.inputData} onChange={HandleOnChangeInput} />
                    <Link to='/search'><button onClick='' ><FaSearch /></button></Link>
                </form>
            </div>
            
        </div>

    )
}

export default Navbar
import Add from '../AddForm/Add'
import Filter from '../Home-filter/Filter'
import Info from '../Home.info/Info'
import Panel from '../HomePanel/Panel'
import Movie from '../MoviList/Movie'
import './Home.css'

const Home = () => {
  return (
    <div className='home font-monospace'>
        <div className='context'>
            <Info/>
        <div className='search-panel'>
            <Panel/>
            <Filter/>
        </div>
        <Movie/>
        <Add/>
        </div>
    </div>
  )
}

export default Home
import './items.css'

const Items = () => {

    return (
          <li className="list-group-items d-flex justify-content-between">
            <span className="list-group-items-label">Empire of Osman</span>
            <input type="number" className="list-group-items-input"  defaultValue={989}/>
            <div className="d-flex justify-content-center align-items-center">
                <button type="button" className="btn-cookie btn-sm">
                    <i className="fas fa-cookie"></i>
                </button>
                <button type="button" className="btn-trash btn-sm">
                    <i className="fas fa-trash"></i>
                </button>
                <i className="fas fa-star"></i>
            </div>
          </li>
       )
  
}

export default Items
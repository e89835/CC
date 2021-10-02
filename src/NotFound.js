import { Link } from "react-router-dom";
import e404 from './images/e404.png';


const NotFound = () => {
    return ( 
        <div className="not-found">
             <h2>Enhorabuena, has roto Internet.</h2>
             <img src={e404} className="App-logo" alt="logo" />
             <Link to="/"> Llévame a casa...</Link>
        </div>
     );
}
 
export default NotFound;
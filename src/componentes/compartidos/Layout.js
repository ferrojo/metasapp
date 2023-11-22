
import {Outlet} from 'react-router';
import Encabezado from './Encabezado';
import Pie from './Pie';
import Principal from './Principal';


function Layout() {
    return ( 
         <div className="App">
        <Encabezado></Encabezado>
        <Principal>
          <Outlet></Outlet>
        </Principal>
        <Pie></Pie>
      </div> 
     );
}

export default Layout;
import React from 'react';
import image from '../assets/images/cleanfy-logo.png';
import {Link,Route,Routes} from 'react-router-dom';
import Chart from './Chart';
import ContentWrapper from './ContentWrapper';
import CategoriesInDb from './GenresInDb';
import LastProductInDb from './LastProductInDb';
import NotFound from './NotFound';
import SearchUsers from './SearchUsers';
import SearchProduct from './SearchProduct';

function SideBar(){
    return(
        <>
            {/*<!-- Sidebar -->*/}
            <ul className="navbar-nav bg-gradient-secondary sidebar sidebar-dark accordion" id="accordionSidebar">

                {/*<!-- Sidebar - Brand -->*/}
                <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/">
                    <div className="sidebar-brand-icon">
                        <img className="w-100" src={image} alt="Digital House"/>
                    </div>
                </Link>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider my-0"/>

                {/*<!-- Nav Item - Dashboard -->*/}
                <li className="nav-item active">
                    <Link className="nav-link" to="/">
                        <i className="fas fa-fw fa-tachometer-alt"></i>
                        <span>Dashboard - Cleanfy</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider"/>

                {/*<!-- Heading -->*/}
                <div className="sidebar-heading">Actions</div>

                {/*<!-- Nav Item - Pages -->*/}
                <li className="nav-item">
                    <Link className="nav-link collapsed" to="CategoriesInDb">
                        <i className="fas fa-fw fa-folder"></i>
                        <span>Secciones</span>
                    </Link>
                </li>

                {/*<!-- Nav Item - Charts -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="LastProductInDb">
                        <i className="fas fa-fw fa-chart-area"></i>
                        <span>Último Producto</span></Link>
                </li>

                {/*<!-- Nav Item - Tables -->*/}
                <li className="nav-item">
                    <Link className="nav-link" to="Chart">
                        <i className="fas fa-fw fa-table"></i>
                        <span>Descripcion de productos</span></Link>
                </li>

                {/*<!-- Divider -->*/}
                <hr className="sidebar-divider d-none d-md-block"/>
            </ul>
            {/*<!-- End of Sidebar -->*/}
            
            <Routes>
                <Route  exact path='/' element = {<ContentWrapper/>} />
                <Route   path='/Chart' element = {<Chart/>} />
                <Route  path='/CategoriesInDb' element = {<CategoriesInDb/>} />
                <Route  path='/LastProductInDb' element = {<LastProductInDb/>} />
                <Route path="*" element={<NotFound />} />
                <Route  path='/SearchUsers' element = {<SearchUsers/>} />
                <Route  path='/SearchPizzas' element = {<SearchProduct/>} />
            </Routes>


        </>
    )
}
export default SideBar;
import styles from '../../styles/Sidebar.module.css'
import styless from '../../styles/Widget.module.css'
import 'bootstrap/dist/css/bootstrap.css';
import DashboardIcon from "@mui/icons-material/Dashboard";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import LocalShippingIcon from "@mui/icons-material/LocalShipping";
import CreditCardIcon from "@mui/icons-material/CreditCard";
import StoreIcon from "@mui/icons-material/Store";
import InsertChartIcon from "@mui/icons-material/InsertChart";
import SettingsApplicationsIcon from "@mui/icons-material/SettingsApplications";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import NotificationsNoneIcon from "@mui/icons-material/NotificationsNone";
import SettingsSystemDaydreamOutlinedIcon from "@mui/icons-material/SettingsSystemDaydreamOutlined";
import PsychologyOutlinedIcon from "@mui/icons-material/PsychologyOutlined";
import AccountCircleOutlinedIcon from "@mui/icons-material/AccountCircleOutlined";
import Widget from './Widget'
import Revenue from './Revenue'
import Graph from './Graph'
import Header from './Header'
import Link from 'next/link'
import { useEffect } from 'react';
import { showUsers } from "../../redux/Slices";
import {  useSelector } from "react-redux";
import Nav from './Nav';
import Users from './Users';
export default function Sidebar() {
    useEffect(() => {
        require("bootstrap/dist/js/bootstrap.bundle.min.js");
      }, []);
    const dark = useSelector(state => state.info.users)
  return (
    <div  id={dark? styles.dark :styles.container}>
        <div className={styles.containers}>
        <div  id={styles.sidebar}>
                <nav  id={styles.nav} className="navbar-nav" >  
                    <h2 >Company</h2>
                    <ul className="list-group" id="list-tab" role="tablist">
                        <p>MAIN</p>
                            <a href="#list-home" className="list-group-item list-group-item-action active"id="home" data-bs-toggle="list" role="tab" aria-controls="list-home"  >
                                <DashboardIcon className={styles.icon} /> dashboard
                            </a> 
                        <p>LISTS</p>
                            <a href="#list-users" className="list-group-item list-group-item-action" id="users" data-bs-toggle="list" role="tab" aria-controls="list-users"> <PersonOutlineIcon className={styles.icon}  />  Users</a>
                            <a href="#list-clients" className="list-group-item list-group-item-action"id="clients"  role="tab" aria-controls="#"> <PersonOutlineIcon className={styles.icon}  /> Clients</a>
                            <a href="#list-products" className="list-group-item list-group-item-action" id="products"  role="tab" aria-controls="list-products"><StoreIcon className={styles.icon}  />  Products</a>
                            <a href="#list-orders" className="list-group-item list-group-item-action" id="orders"  role="tab" aria-controls="list-orders"> <CreditCardIcon className={styles.icon}  />  Orders</a>
                        <p>USEFUL</p>
                            <a href="#list-stats" className="list-group-item list-group-item-action" id="stats" data-bs-toggle="list"  role="tab" aria-controls="list-stats"><InsertChartIcon className={styles.icon}  /> Stats</a>
                            <a className="list-group-item list-group-item-action" id="notifications"  role="tab" aria-controls="list-notifications"><NotificationsNoneIcon className={styles.icon}  />Notifications</a>
                        <p>SERVICE</p>
                            <a href="#list-addClient" className="list-group-item list-group-item-action" id="addClient"  role="tab" aria-controls="list-addClient"> <SettingsSystemDaydreamOutlinedIcon className={styles.icon}  />  System Health</a>
                            <a href="#list-addClient" className="list-group-item list-group-item-action" id="addClient"  role="tab" aria-controls="list-addClient"> <PsychologyOutlinedIcon className={styles.icon}  />  Logs</a>
                            <a href="#list-addClient" className="list-group-item list-group-item-action" id="addClient"  role="tab" aria-controls="list-addClient"> <SettingsApplicationsIcon  className={styles.icon}  />  Settings</a>
                        <p>USER</p>
                            <a className="list-group-item list-group-item-action" id="delivery"  role="tab" aria-controls="list-delivery"><AccountCircleOutlinedIcon className={styles.icon}  /> Profile</a>
                            <a className="list-group-item list-group-item-action" id="logout" ><ExitToAppIcon  className={styles.icon}/> Logout</a>
                    </ul>
                </nav>
            </div>
            <div  id={dark? styles.darkk:styles.row}>
            <div className="tab-content" id="nav-tabContent">
                <div className="tab-pane fade show active" id="list-home" role="tabpanel" aria-labelledby="home">
                    <div className={styles.rightSide}>
                        <Nav />
                        <Widget/>
                    </div>
                    <div className={styles.row} id={dark? styles.darkk:styles.row} >
                        <div>
                            <Revenue  />
                        </div>
                        <div style={{marginLeft:"10px"}}>
                            <Graph />
                        </div>
                    </div>
                    <div className={styles.users}>
                        <Users />
                    </div>
                </div>
                
                <div className="tab-pane fade" id="list-users" role="tabpanel" aria-labelledby="users">
                <div className={dark?styles.dark:styles.usersPage} >
                <Nav />
                <Users />
                </div>
                </div>
                <div className="tab-pane fade" id="list-clients" role="tabpanel" aria-labelledby="#">
                    ..
                </div>
                <div className="tab-pane fade" id="list-products" role="tabpanel" aria-labelledby="products">
                    ..
                </div>
                <div className="tab-pane fade" id="list-orders" role="tabpanel" aria-labelledby="orders">
                    ..
                </div>
                <div className="tab-pane fade" id="list-clients" role="tabpanel" aria-labelledby="clients">hi</div>
                <div className="tab-pane fade" id="list-stats" role="tabpanel" aria-labelledby="stats">
                <div id={styless.container}>
                <div>
                    <Nav />
                    <div className={styles.stats}>
                        <div>
                            <Revenue  />
                        </div>
                        <div>
                            <Graph />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
                <div className="tab-pane fade" id="list-orders" role="tabpanel" aria-labelledby="orders">...</div>
                <div className="tab-pane fade" id="list-addClient" role="tabpanel" aria-labelledby="addClient">
                    ..
                </div>
                <div className="tab-pane fade" id="list-products" role="tabpanel" aria-labelledby="products">hello</div>
            </div>
            </div>
        </div>
    </div>
  )
}

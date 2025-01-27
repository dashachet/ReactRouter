import React, {useState} from 'react';
import styles from "./components/Site.module.css";
import {PageOne} from "./components/pages/PageOne";
import {PageTwo} from "./components/pages/PageTwo";
import {PageThree} from "./components/pages/PageThree";
import {Route, Routes, Navigate, NavLink} from "react-router-dom";
import {Error404} from "./components/pages/Error404";

import {NavWrapper} from "./components/pages/_styles";


const PATH = {
    Page1: '/page1',
    Page2: '/page2',
    Page3: '/page3',
} as const
function App() {
    return (
        <div>
            <div className={styles.header}><h1>HEADER</h1></div>
            <div className={styles.body}>
                <div className={styles.nav}>
                    <NavWrapper><NavLink to={PATH.Page1} className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink }>Page1</NavLink></NavWrapper>
                    <NavWrapper><NavLink to={PATH.Page2} className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink }>Page2</NavLink></NavWrapper>
                    <NavWrapper><NavLink to={PATH.Page3} className={({isActive}) => isActive ? styles.activeNavLink : styles.navLink }>Page3</NavLink></NavWrapper>
                </div>
                <div className={styles.content}>
                    {/*<PageTwo/>*/}
                    <Routes>
                        {/*<Route path="page1" element={<PageOne/>} />*/}
                        {/*<Route path="page2" element={<PageTwo/>} />*/}
                        {/*<Route path="page3" element={<PageThree/>} />*/}
                        <Route path="/" element={<Navigate to = "/page1"/>}  />
                        <Route path={PATH.Page1} element={<PageOne/>}  />
                        <Route path={PATH.Page2} element={<PageTwo/>}  />
                        <Route path={PATH.Page3} element={<PageThree/>}  />
                        <Route path="/error404"  element={<Error404/>}  />
                        <Route path="/*"  element={<Navigate to="/error404"/>}  />

                    </Routes>
                </div>
            </div>
            <div className={styles.footer}>abibas 2023</div>
        </div>
    );
}



export default App;


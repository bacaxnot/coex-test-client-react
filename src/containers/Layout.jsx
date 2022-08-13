import React from 'react';
import Header from '@containers/Header';
import '@styles/layout.sass'

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <Header></Header>
            {children}
        </div>
    );
};

export default Layout;
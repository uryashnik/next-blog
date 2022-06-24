import React from 'react';

const Layout = ({children}) => {
    return (
        <div>
            <header>header</header>
            {children}
            <footer>footer</footer>
        </div>
    );
};

export default Layout;
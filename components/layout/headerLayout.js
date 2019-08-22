import Nav from '../nav';
import React from "react";

const headerLayout = ({children}) => (
    <div>
        <Nav url={['posts','products']}/>
        {children}
    </div>
);

export default headerLayout
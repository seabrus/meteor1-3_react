import React from 'react';
import UserInfo from '../containers/user-info';

const MainLayout = ({content}) => (
    <div className="container-fluid">
        <UserInfo />
        {content}
    </div>
);

MainLayout.propTypes = {
    content: React.PropTypes.element
};

export default MainLayout;

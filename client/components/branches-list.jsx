import React from 'react';

const BranchesList = ({owner, name, branches}) => (
    <ul>
        {branches.map(({ref, object}) => (
            <li key={ref}>
                <a href={FlowRouter.path('branch', {owner, name, sha: object.sha})}>{ref}</a>
            </li>
        ))}
    </ul>
);

BranchesList.propTypes = {
    owner: React.PropTypes.string,
    name: React.PropTypes.string,
    branches: React.PropTypes.array
};

export default BranchesList;

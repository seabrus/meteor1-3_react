import React from 'react';

const RepositoriesList = ({repositories}) => (
    <div>
        <h3>Repositories List</h3>
        <ul>
            {repositories.map(({id, full_name, name, owner}) => (
                <li key={id}>
                    <a href={FlowRouter.path('repository', {name, owner: owner.login})}>{full_name}</a>
                </li>
            ))}
        </ul>
    </div>
);

RepositoriesList.propTypes = {
    repositories: React.PropTypes.array
};

export default RepositoriesList;

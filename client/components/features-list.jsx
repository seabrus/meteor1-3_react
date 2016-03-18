import React from 'react';
import FeaturePage from '../containers/feature-page';

const FeaturesList = ({owner, name, features}) => (
    <div>
        <a href={FlowRouter.path('repository', {owner, name})}>Back</a>
        <h3>{owner}/{name}</h3>
        <ul>
            {features.map(({path, sha}) => (
                <li key={path}>
                    <span>{path}</span>
                    <FeaturePage owner={owner} name={name} sha={sha}/>
                </li>
            ))}
        </ul>
    </div>
);

FeaturesList.propTypes = {
    owner: React.PropTypes.string,
    name: React.PropTypes.string,
    features: React.PropTypes.array
};

export default FeaturesList;

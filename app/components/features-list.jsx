import React from 'react';
import NoSSR from 'react-no-ssr';
import FeaturePage from '../containers/feature-page';


const FeaturesList = ({owner, name, features}) => (
    <div>
        <a href={FlowRouter.path('repository', {owner, name})}>Back</a>
        <h3>{owner}/{name}</h3>
        <h4 style={{ color:'darkcyan', fontWeight:'bold' }}>Feature List<br />&nbsp;</h4>

        { features.length === 0 ? (<p>No features</p>) : (       // SEE   https://facebook.github.io/react/tips/if-else-in-JSX.html
            <ul>
                {features.map(({path, sha}) => (
                    <li key={path}>
                        <span>{path}</span>

                        <NoSSR onSSR={<div style={{'color':'red'}}>Loading the file, please wait…</div>}>
                            <FeaturePage owner={owner} name={name} sha={sha} />
                        </NoSSR>

                    </li>
                ))}
            </ul>
        )}
    </div>
);

{/*
class FeaturesList extends React.Component {
  constructor(...args) {
    super(...args);
    this.state = {
      canRender: false
    };
  }

  componentDidMount() {
    this.setState({canRender: true});
  }

  render() {
    const { canRender } = this.state;

    return canRender ? ( 
    <div>
        <a href={FlowRouter.path('repository', {owner, name})}>Back</a>
        <h3>{owner}/{name}</h3>
        <h4 style={{'color':'darkcyan', 'font-weight':'bold'}}>Feature List<br />&nbsp;</h4>

        { features.length === 0 ? (<p>No features</p>) : (
            <ul>
                {features.map(({path, sha}) => (
                    <li key={path}>
                        <span>{path}</span>
                            <FeaturePage owner={owner} name={name} sha={sha} />
                    </li>
                ))}
            </ul>
        )}
    </div>
    ) 
    : (<div style={{'color':'red'}}>Loading the file, please wait…</div>);
  }
}
*/}


FeaturesList.propTypes = {
    owner: React.PropTypes.string,
    name: React.PropTypes.string,
    features: React.PropTypes.array
};

export default FeaturesList;

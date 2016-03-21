import { composeWithTracker } from 'react-komposer';
import BranchesList from '../components/branches-list.jsx';

function composer(props, onData) {
    const handle = Meteor.subscribe('gitHubAccessToken');

    if (handle.ready() && Meteor.user()) {
        HTTP.get(
            `https://api.github.com/repos/${props.owner}/${props.name}/git/refs`,
            {
                headers: {
                    'Authorization': `token ${Meteor.user().services.github.accessToken}`
                }
            },
            (err, res)=> {
                if (!err) {
                    const branches = _.filter(res.data, branch => /^refs\/heads/.test(branch.ref));
                    onData(null, {owner: props.owner, name: props.name, branches});
                }
            }
        );
    }
}

export default composeWithTracker(composer)(BranchesList);

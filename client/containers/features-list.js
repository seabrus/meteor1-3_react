import { composeWithTracker } from 'react-komposer';
import FeaturesList from '../components/features-list.jsx';

function composer(props, onData) {
    const handle = Meteor.subscribe('gitHubAccessToken');

    if (handle.ready() && Meteor.user()) {
        HTTP.get(
            `https://api.github.com/repos/${props.owner}/${props.name}/git/trees/${props.sha}?recursive=1`,
            {
                headers: {
                    'Authorization': `token ${Meteor.user().services.github.accessToken}`
                }
            },
            (err, res)=> {
                if (!err) {
                    const features = _.filter(res.data.tree, node => /^README\.md$/.test(node.path));
//                    const features = _.filter(res.data.tree, node => /\.feature$/.test(node.path));
                    onData(null, {owner: props.owner, name: props.name, features});
                }
            }
        );
    }
}

export default composeWithTracker(composer)(FeaturesList);

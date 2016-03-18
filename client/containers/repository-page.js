import { composeWithTracker } from 'react-komposer';
import RepositoryPage from '../components/repository-page.jsx';

function composer(props, onData) {
    const handle = Meteor.subscribe('gitHubAccessToken');

    if (handle.ready()) {
        HTTP.get(
            `https://api.github.com/repos/${props.owner}/${props.name}`,
            {
                headers: {
                    'Authorization': `token ${Meteor.user().services.github.accessToken}`
                }
            },
            (err, res)=> {
                if (!err) {
                    onData(null, {repository: res.data});
                }
            }
        );
    }
}

export default composeWithTracker(composer)(RepositoryPage);

import { composeWithTracker } from 'react-komposer';
import RepositoriesList from '../components/repositories-list.jsx';

function composer(props, onData) {
    const handle = Meteor.subscribe('gitHubAccessToken');

    if (handle.ready()) {
        HTTP.get(
            'https://api.github.com/user/repos',
            {
                headers: {
                    'Authorization': `token ${Meteor.user().services.github.accessToken}`
                }
            },
            (err, res)=> {
                if (!err) {
                    onData(null, {repositories: res.data});
                }
            }
        );
    }
}

export default composeWithTracker(composer)(RepositoriesList);

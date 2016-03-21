import { composeWithTracker } from 'react-komposer';
import FeaturePage from '../components/feature-page.jsx';

function b64toBlob(b64Data, contentType, sliceSize) {
    contentType = contentType || '';
    sliceSize = sliceSize || 512;

    var byteCharacters = atob(b64Data);
    var byteArrays = [];

    for (var offset = 0; offset < byteCharacters.length; offset += sliceSize) {
        var slice = byteCharacters.slice(offset, offset + sliceSize);

        var byteNumbers = new Array(slice.length);
        for (var i = 0; i < slice.length; i++) {
            byteNumbers[i] = slice.charCodeAt(i);
        }

        var byteArray = new Uint8Array(byteNumbers);

        byteArrays.push(byteArray);
    }

    return new Blob(byteArrays, {type: contentType});
}

function composer(props, onData) {
    const handle = Meteor.subscribe('gitHubAccessToken');

    if (handle.ready() && Meteor.user()) {
        HTTP.get(
            `https://api.github.com/repos/${props.owner}/${props.name}/git/blobs/${props.sha}`,
            {
                headers: {
                    'Authorization': `token ${Meteor.user().services.github.accessToken}`
                }
            },
            (err, res)=> {
                if (!err) {
                    const blob = b64toBlob(res.data.content, {type: "text/plain;charset=UTF-8"});
                    const reader = new FileReader();
                    reader.onload = function (e) {
                        onData(null, {feature: e.currentTarget.result});
                    };
                    reader.readAsBinaryString(blob);
                }
            }
        );
    }
}

export default composeWithTracker(composer)(FeaturePage);

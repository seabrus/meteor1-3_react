import React from 'react';


function onChange(newValue) {
    console.log('change', newValue);

    var feature = parser.parse(newValue);

    console.log(feature);
}

const FeaturePage = ({feature}) => (
    <AceEditorDop
        mode="gherkin"
        theme="github"
        onChange={onChange}
        name="UNIQUE_ID_OF_DIV"
        editorProps={{$blockScrolling: true}}
        value={feature}
    />
);

FeaturePage.propTypes = {
    feature: React.PropTypes.string
};

export default FeaturePage;

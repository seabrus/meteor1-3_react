import React from 'react';

import brace from 'brace';
import AceEditor from 'react-ace';

import 'brace/mode/gherkin';
import 'brace/theme/github';

import Parser from 'gherkin/lib/gherkin/parser';

const parser = new Parser();

function onChange(newValue) {
    console.log('change',newValue);

    var feature = parser.parse(newValue);

    console.log(feature);
}

const FeaturePage = ({feature}) => (
    <AceEditor
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

//import React from 'react';

import brace from 'brace';
import AceEditor from 'react-ace'; 

AceEditorDop = AceEditor;

import 'brace/mode/gherkin';
import 'brace/theme/github';

import Parser from 'gherkin/lib/gherkin/parser';

parser = new Parser();
//const parser = new Parser();

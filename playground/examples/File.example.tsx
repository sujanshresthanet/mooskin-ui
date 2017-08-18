import * as React from 'react';

import Readme from '../../components/File/README.md';

import {FileUpload} from '../../components/index/';
import FileExampleCode from './component-strings/File.example.txt';

import ReactLiveEditor from '../tools/ReactLiveEditor/ReactLiveEditor';

export default class FileExample extends React.Component<any, any> {
    render(){
        return(
            <ReactLiveEditor
                scope={{React, FileUpload}}
                code={FileExampleCode}
                title="File Example"
                doc={Readme}
            />
        );
    }
}

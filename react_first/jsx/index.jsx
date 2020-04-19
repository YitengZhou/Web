import React from 'react';
import ReactDOM from 'react-dom';

class MainContentComponent extends React.Component {
    constructor(props) {
        super(props);

    }

    render() {
        return (
            <div>
                hello,this is first demo
            </div>
        );
    }
}

ReactDOM.render(
    <MainContentComponent/>,
    document.getElementById('main')
);
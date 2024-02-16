import React from 'react';
import { Panel } from 'rsuite';

const ErrorMessage = () => {
    return (
        <Panel shaded bordered bodyFill style={{ display: 'block', width: 560,  margin: '50px auto', textAlign: 'center'}} >
            <iframe width="560" height="315" src="https://www.youtube.com/embed/Dd7FixvoKBw?si=MvB5Cf2KxVLHnzZF" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
            <Panel header="YA DONE MESSED UP AARON!">
            <p>
                <small>
                ¯\_(ツ)_/¯
                </small>
            </p>
            </Panel>
        </Panel>
    )
}

const NotFound = () => {
    return (
        <Panel shaded bordered bodyFill style={{ display: 'block', width: 560,  margin: '50px auto', textAlign: 'center'}} >
            <Panel header="Sorry Charlie, Summoner Not Found (TдT)">
            <p>
                <large>
                404
                </large>
            </p>
            </Panel>
        </Panel>
    )
}

export { ErrorMessage, NotFound };
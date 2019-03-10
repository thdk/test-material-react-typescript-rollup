import * as React from 'react';
import { Chip, ChipSet } from '@material/react-chips';

export class App extends React.Component {
    render() {
        return (
            <ChipSet>
                <Chip id='summer' label='Summer' />
                <Chip id='winter' label='Winter' />
            </ChipSet>
        );
    }
}

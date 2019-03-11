import * as React from 'react';
import { Chip, ChipSet } from '@material/react-chips';

export type Season = 'summer' | 'winter' | 'spring' | 'fall';

const seasons: Season[] = [
    'summer', 'winter', 'spring', 'fall'
];

export class App extends React.Component<React.HTMLProps<HTMLDivElement>, { season?: Season }> {
    constructor(props: React.HTMLProps<HTMLDivElement>) {
        super(props);
        this.state = {};
    };

    render() {
        const seasonComponents = seasons.map(s =>
            <Chip selected={this.state.season === s}
                handleSelect={this.handleSelect.bind(this, s)}
                id={s}
                label={s}
            />);

        return (
            <ChipSet filter={true}>
                {seasonComponents}
            </ChipSet>
        );
    }

    handleSelect(id: Season) {
        this.setState({ season: id });
    }
}

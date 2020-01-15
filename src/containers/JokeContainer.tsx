import React from 'react';
import { Container } from '@material-ui/core';
import { JokeForm, JokeRandom } from '../components/Joke';

const JokeContainer: React.FC = () => {
    return (
        <Container>
            <JokeRandom/>
            <JokeForm/>
        </Container>
    )
}

export default JokeContainer;

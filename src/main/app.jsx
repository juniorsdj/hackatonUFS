import React from 'react'
import _ from 'lodash'
import '../styles/style-desktop.scss';


import Fluxograma from './basico'
import Discriminador from './intermediario'
import Queixa from './queixa'
import Routes from './routes'
import { Loader, Grid, Icon, Input, Step, TransitionablePortal, Search, Button, Header, Card, Container, Segment, Image } from 'semantic-ui-react'
const source = {}
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            valueSearch: '',
            results: '',
            steps: 0,
            open: true,
            transitions: ['fly left', 'fly right'],
            posicaoTransition: 0
        }
    }



    componentWillMount() {
    }
    recuarTela(){
        this.setState({ open: false, posicaoTransition: 1 })

        setTimeout(() => {
            this.setState({ open: true, posicaoTransition: 0, steps: this.state.steps - 1 })
        }, 900)
    }
    avancarTela() {
        this.setState({ open: false, posicaoTransition: 0 })

        setTimeout(() => {
            this.setState({ open: true, posicaoTransition: 1, steps: this.state.steps + 1 })
        }, 900)
    }
    render() {
        const { open, isLoading, value, results, steps, idFluxo, transitions, posicaoTransition } = this.state
        return (
            <div className='text-center'>
                <Header as='h2' textAlign='center'>
                    <Header.Content className='small-margin-top'>Nome app</Header.Content>
                </Header>

                <TransitionablePortal open={open} transition={{ animation: transitions[posicaoTransition], duration: 850 }}>
                    <Grid >
                        <Grid.Column width={3}>
                            {steps < 3 ? (<Button className='centralizar' circular icon='angle double right'
                                onClick={() => this.recuarTela()}
                            />) : null}
                        </Grid.Column>
                        <Grid.Column width={10}>
                            <Container className='large-margin-top '>
                                {steps == 0 ? (<Queixa />)
                                    : steps == 1 ? (<Fluxograma id={idFluxo} />)
                                        : steps == 2 ? (<Discriminador idFluxo={idFluxo} />)
                                            : steps == 3 ? (<div><h1>resultado</h1></div>)
                                                : null}

                            </Container>
                        </Grid.Column>
                        <Grid.Column width={3} className='text-center'>
                            {steps < 3 ? (<Button className='centralizar' circular icon='angle double right'
                                onClick={() => this.avancarTela()}
                            />) : null}
                        </Grid.Column>
                    </Grid>
                </TransitionablePortal>
                <Step.Group ordered className='aprox-botton'>
                    <Step
                        active={steps == 0}
                        completed={steps > 0}
                    >
                        <Step.Content>
                            <Step.Title>Queixa</Step.Title>
                        </Step.Content>
                    </Step>

                    <Step active={steps == 1}
                        completed={steps > 1} >
                        <Step.Content>
                            <Step.Title>Defina o Fluxograma</Step.Title>
                        </Step.Content>
                    </Step>

                    <Step
                        active={steps == 2}
                        completed={steps > 2}
                    >
                        <Step.Content>
                            <Step.Title>Defina o descriminador</Step.Title>
                        </Step.Content>
                    </Step>
                </Step.Group>
            </div>
        )
    }
}

export default App
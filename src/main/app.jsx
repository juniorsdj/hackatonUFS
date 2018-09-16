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
            <div>
                <div className="nav-header">
                    <Header as='h2' className='nav-title'>
                        <Header.Content className=''><img className="nav-logo" src="/images/erisk.svg" alt="logo"/></Header.Content>
                    </Header>
                </div>
                <TransitionablePortal open={open} transition={{ animation: transitions[posicaoTransition], duration: 850 }}>
                <Grid >
                    <Grid.Column className="justify-content-center" width={3}>
                        {steps > 0 ? (<Button className='centralizar btn-before' circular 
                            onClick={() => this.setState({ steps: steps - 1 })}
                        />) : null}
                    </Grid.Column>
                    <Grid.Column width={10}>                    
                        <Container>
                            {(steps > 0 && steps < 3) && (<Search className='floated-right'
                                loading={isLoading}
                                // onResultSelect={this.handleResultSelect}
                                onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                                results={results}
                                value={value} />)
                            }

                            {steps == 0 ? (<Queixa />)
                                : steps == 1 ? (<Fluxograma id={idFluxo} />)
                                    : steps == 2 ? (<Discriminador idFluxo={idFluxo} />)
                                        : steps == 3 ? (<div><h1>resultado</h1></div>)
                                            : null}

                        </Container>                                     
                    </Grid.Column>
                    <Grid.Column width={3} className='text-center'>
                        {steps < 3 ? (<Button className='centralizar btn-next' circular 
                            onClick={() => this.setState({ steps: steps + 1 })}
                        />) : null}
                    </Grid.Column>
                    <img className="steps" src="/images/progress-1.svg" alt=""/>   
                </Grid>                
                </TransitionablePortal>                
            </div>
        )
    }
}

export default App
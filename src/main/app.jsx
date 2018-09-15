import React from 'react'
import _ from 'lodash'
import '../styles/style-desktop.scss';


import Fluxograma from './basico'
import Discriminador from './intermediario'
import Queixa from './queixa'
import Routes from './routes'
import { Loader, Grid, Icon, Input, Step, Search, Button, Header, Card, Container, Segment, Image } from 'semantic-ui-react'
const source = {}
class App extends React.Component {
    constructor() {
        super()
        this.state = {
            isLoading: false,
            valueSearch: '',
            results: '',
            steps: 0
        }
    }

    // handleResultSelect (e, { result }) => this.setState({ value: result.title })

    handleSearchChange(e, { value }) {
        this.setState({ isLoading: true, value })

        setTimeout(() => {
            if (this.state.value.length < 1) return this.resetComponent()

            const re = new RegExp(_.escapeRegExp(this.state.value), 'i')
            const isMatch = result => re.test(result.title)

            this.setState({
                isLoading: false,
                results: _.filter(source, isMatch),
            })
        }, 300)
    }
    render() {
        const { isLoading, value, results, steps, idFluxo } = this.state
        return (
            <div className='text-center'>
                <Header as='h2' textAlign='center'>
                    <Header.Content className='small-margin-top'>Nome app</Header.Content>
                </Header>
                <Grid >
                    <Grid.Column width={3}>
                        {steps > 0 ? (<Button className='centralizar' circular icon='angle double left'
                            onClick={() => this.setState({ steps: steps - 1 })}
                        />) : null}
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Container className='large-margin-top '>
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
                        {steps < 4 ? (<Button className='centralizar' circular icon='angle double right'
                            onClick={() => this.setState({ steps: steps + 1 })}
                        />) : null}
                    </Grid.Column>
                </Grid>
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
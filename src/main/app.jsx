import React from 'react'
import _ from 'lodash'
import '../styles/style-desktop.scss';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import Fluxograma from './basico'
import Discriminador from './intermediario'
import Queixa from './queixa'
import Routes from './routes'
import { Loader, Grid, Icon, Input, Step, Search, Button, Header, Card, Container, Segment, Image } from 'semantic-ui-react'
import { classificacao } from './../shared/constants'
import Resultado from './avancado'
class App extends React.Component {
    constructor() {
        super()
        this.state = {            
            isLoading: false,
            valueSearch: '',
            results: '',
            steps: 0,
            open: true,
            // transitions: ['fly left', 'fly right'],
            posicaoTransition: 0,
            classificacao: 'azul'
        }
    }
 
    classificarComoBranco() {
        this.setState({ steps: 3, classificacao: classificacao.Branca })
    }
    componentWillMount() {
    }
    recuarTela() {
        this.setState({ open: false, steps: this.state.steps - 1 })
    }
    avancarTela() {
        this.setState({ classificacao: this.props.classificacao })
        this.setState({ open: false, steps: this.state.steps + 1 })
    }
    render() {
        const { open, isLoading, value, results, steps, classificacao, idFluxo, transitions, posicaoTransition } = this.state
        console.log(classificacao)
        const { isFluxo, isDiscriminador, discriminador } = this.props
        let disabledAvancar = false
        if (!isFluxo && steps == 1 || !isDiscriminador && steps == 2)
            disabledAvancar = true

        if(isDiscriminador){
            if(discriminador.validacao){
                return(
                 <h1>validacao</h1>   
                )
            }
        }
        return (
            <div className={`bg-${classificacao || 'azul'}`}>
                <div className="nav-header">
                    <Header as='h2' className='nav-title'>
                        <Header.Content className=''><img className="nav-logo" src="/images/erisk.svg" alt="logo" /></Header.Content>
                    </Header>
                    {steps == 0 && (
                            <Button
                                className="btn-branco"
                                content="Classificar Branco"
                                onClick={() => this.classificarComoBranco()}
                            />)}
                </div>
                <Grid >
                    <Grid.Column className="justify-content-center" width={3}>
                        {steps > 0 ? (<Button className='centralizar btn-before' circular
                            onClick={() => this.recuarTela()}
                        />) : null}
                    </Grid.Column>
                    <Grid.Column width={10}>
                        <Container>
                            {/* {(steps > 0 && steps < 3) && (<Search className='floated-right'
                                loading={isLoading}
                                // onResultSelect={this.handleResultSelect}
                                onSearchChange={_.debounce(this.handleSearchChange, 500, { leading: true })}
                                results={results}
                                value={value} />)
                            } */}

                            {steps == 0 ? (<Queixa />)
                                : steps == 1 ? (<Fluxograma id={idFluxo} />)
                                    : steps == 2 ? (<Discriminador idFluxo={idFluxo} />)
                                        : steps == 3 ? (<div><Resultado classificacao={classificacao} /></div>)
                                            : null}

                        </Container>
                    </Grid.Column>
                    <Grid.Column width={3} className='text-center'>
                        
                        {steps < 3 ? (<Button className='centralizar btn-next' circular
                            disabled={disabledAvancar}
                            onClick={() => this.avancarTela()}
                        />) : null}
                    </Grid.Column>
                    {steps == 0 ? (
                        <img className="steps" src="/images/progress-1.svg" alt="" />) :
                        steps == 1 ? (
                            <img className="steps" src="/images/progress-2.svg" alt="" />) :
                            steps == 2 ? (
                                <img className="steps" src="/images/progress-3.svg" alt="" />) : null}
                </Grid>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    isFluxo: state.fluxograma.idFluxo,
    isDiscriminador: state.discriminador.discriminador.id,
    discriminador: state.discriminador.discriminador,
    classificacao: state.discriminador.discriminador.prioridade
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(App)
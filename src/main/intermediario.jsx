

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Loader, Grid, Icon, Input, Button, Header, Checkbox, Segment, Divider, Container, Form } from 'semantic-ui-react'
import Requests from './../shared/requests'
import { setDiscriminador } from './../actions/discriminadorActionCreators'
class Intermediario extends React.Component {
    constructor() {
        super()
        this.state = {

            //lembrar de limpar discriminador


            discriminadores: [[{
                "id": 1, "text": "Obstrucao de vias aereas", "prioridade": "Vermelho", "validacao": false, "fluxo_id": 1
            }, {
                "id": 2, "text": "Respiracao inadequada", "prioridade": "Vermelho", "validacao": true, "fluxo_id": 1
            }, {
                "id": 3, "text": "Choque", "prioridade": "Vermelho", "validacao": false, "fluxo_id": 1
            }, {
                "id": 4, "text": "Crianca nao reativa", "prioridade": "Vermelho", "validacao": false, "fluxo_id": 1
            }, {
                "id": 5, "text": "Convulsionando", "prioridade": "Vermelho", "validacao": false, "fluxo_id": 1
            }], [{
                "id": 6, "text": "Alteracao do nivel de conciencia", "prioridade": "Laranja", "validacao": false, "fluxo_id": 1
            }, {
                "id": 7, "text": "Novo deficit neurologico ha menos de 24h", "prioridade": "Laranja", "validacao": false, "fluxo_id": 1
            }, {
                "id": 8, "text": "Sinais de meningismo", "prioridade": "Laranja", "validacao": false, "fluxo_id": 1
            }, {
                "id": 9, "text": "Purpura", "prioridade": "Laranja", "validacao": false, "fluxo_id": 1
            }, {
                "id": 10, "text": "Erupcao cutanea fixa", "prioridade": "Laranja", "validacao": false, "fluxo_id": 1
            }, {
                "id": 11, "text": "Inicio abrupto", "prioridade": "Laranja", "validacao": false, "fluxo_id": 1
            }, {
                "id": 12, "text": "Perda total da vis\u00e3o aguda", "prioridade": "Laranja", "validacao": false, "fluxo_id": 1
            }, {
                "id": 13, "text": "Crianca muito quente", "prioridade": "Laranja", "validacao": false, "fluxo_id": 1
            }, {
                "id": 14, "text": "Adulto muito quente", "prioridade": "Laranja", "validacao": false, "fluxo_id": 1
            }, {
                "id": 15, "text": "Sepse possivel", "prioridade": "Laranja", "validacao": false, "fluxo_id": 1
            }, {
                "id": 16, "text": "Dor intensa", "prioridade": "Laranja", "validacao": false, "fluxo_id": 1
            }, {
                "id": 17, "text": "Novo deficit neurologico ha mais de 24h", "prioridade": "Laranja", "validacao": false, "fluxo_id": 1
            }, {
                "id": 18, "text": "Reducao recente da acuidade visual", "prioridade": "Laranja", "validacao": false, "fluxo_id": 1
            }]
            ]

        }
    }
    componentWillMount() {
        const { idFluxo } = this.props
        console.log(this.props)
        Requests.discriminadores.getDiscriminadores(idFluxo)
            .then(r => {
                console.log(r)
            })
    }
    handleHandleDiscriminador(discriminador) {
        const { setDiscriminador } = this.props
        setDiscriminador(discriminador)
        this.setState({ idSelected: discriminador.id })
    }

    renderCheckboxList() {
        const { discriminadores } = this.state

        return discriminadores.map((grupo, index) => (
            <Segment key={index}>
                {
                    grupo.map((discriminador, ind) => (

                        <Segment key={ind} raised className='margin-none'>
                            <Checkbox
                                radio
                                label={discriminador.text}
                                onChange={() => this.handleHandleDiscriminador(discriminador)}
                                checked={this.state.idSelected === discriminador.id}
                                value={discriminador.id}
                            />
                        </Segment>

                    ))}
            </Segment>


        ))
    }

    render() {
        const { sintomas } = this.state
        return (
            <div>
                <Header as='h2' className='subtitle-basic'>
                    <Header.Subheader className='floated-left'>Marque abaixo o fluxo desejado pelo paciente</Header.Subheader>

                </Header>
                <Divider hidden />
                <Divider hidden />
                <Divider hidden />
                <Container className='max-size'>
                    <Form onSubmit={() => this.next()}>
                        {/* <Input icon='users' fluid iconPosition='left' placeholder='Insira seu nome' /> */}
                        {this.renderCheckboxList()}
                        {/* <Button
                        primary
                        floated='right'
                        type='submit'>
                        Enviar
                    </Button> */}
                    </Form>
                </Container>
            </div >
        )
    }
}

const mapStateToProps = (state) => ({
    idFluxo: state.fluxograma.idFluxo
})

const mapDispatchToProps = dispatch => bindActionCreators({ setDiscriminador }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Intermediario)
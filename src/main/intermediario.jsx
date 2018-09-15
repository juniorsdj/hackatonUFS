

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
            discriminadores: []

        }
    }
    componentWillMount() {
        const { idFluxo } = this.props
        console.log(this.props)
        Requests.discriminadores.getDiscriminadores(idFluxo)
            .then(r => {
               this.setState({discriminadores:r.data})
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
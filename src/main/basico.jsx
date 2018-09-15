import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Loader, Grid, Icon, Input, Container, Form, Divider, Button, Checkbox, Segment, Header } from 'semantic-ui-react'
import App from './app'
import Requests from './../shared/requests'
import { setFluxo } from './../actions/fluxogramaActionCreators'

class Basico extends React.Component {
    constructor() {
        super()
        this.state = {



            // lembrar de apagar os fluxos 





            fluxos: [
                {
                    "id": 1,
                    "text": "Cefaleia"
                },
                {
                    "id": 2,
                    "text": "Cefaleia"
                },
                {
                    "id": 3,
                    "text": "Diarreia e\/ou vomito"
                },  {
                    "id": 1,
                    "text": "Cefaleia"
                },
                {
                    "id": 2,
                    "text": "Cefaleia"
                },
                {
                    "id": 3,
                    "text": "Diarreia e\/ou vomito"
                },
                {
                    "id": 4,
                    "text": "Dispneia em adulto"
                },
                {
                    "id": 5,
                    "text": "Dor Abdominal em Adulto"
                },
                {
                    "id": 6,
                    "text": "Mal-estar em Adulto"
                }
            ],
            idSelected: 0
        }
    }
    componentWillMount() {
        Requests.fluxograma.getFluxos()
            .then(r => {
                this.setState({ fluxos: r.data })
            })
    }

    handleHandleFluxograma(idSelected) {
        const { setFluxo } = this.props
        setFluxo(idSelected)
        this.setState({ idSelected })
    }

    renderCheckboxList() {
        const { fluxos, idSelected } = this.state
        
        if(idSelected != this.props.isSelected){
            this.state.idSelected = this.props.isSelected
        }

        return fluxos.map((fluxo, index) => (

            <Segment key={index} raised className='margin-none'>
                <Checkbox
                    radio
                    label={fluxo.text}
                    onChange={() => this.handleHandleFluxograma(fluxo.id)}
                    checked={this.state.idSelected === fluxo.id}
                    value={fluxo.id}
                />
            </Segment>

        ))
    }

    render() {
        const { sintomas } = this.state      
        return (
            <div>
                <Header as='h2' className='subtitle-basic'>
                    <Header.Subheader className=''>Marque abaixo o fluxo desejado pelo paciente</Header.Subheader>
                </Header>                
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
    isSelected: state.fluxograma.idFluxo
})

const mapDispatchToProps = dispatch => bindActionCreators({ setFluxo }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Basico)
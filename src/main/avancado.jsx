

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Loader, Grid, Icon, Input, Button, Header, Container, Label } from 'semantic-ui-react'
import {classificacao} from './../shared/constants'
class Avancado extends React.Component {
    render() {
        const {classificacao} = this.props
        console.log(classificacao)
        return (
            <div>
                <Header as='h2' className='nav-title'>
                    <Header.Subheader className=''>É recomendada a classificação:</Header.Subheader>
                </Header>
                <Container className='max-size'>
                        <span className='resultado'>{classificacao}</span>
                </Container>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
})

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Avancado)
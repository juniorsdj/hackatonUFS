

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Loader, Grid, Icon, Input, Button, Divider, Header, Form, Label, TextArea } from 'semantic-ui-react'
import {changeQueixas} from './../actions/queixaActionCreators'
class Intermediario extends React.Component {
    render() {
        const {changeQueixas, queixa} = this.props
        return (
            <div>
                <Form>
                    <Header.Subheader className='floated-left top-bottom-margin'>Baseado nas queixas apresentadas, selecione um modelo baseado nos fluxos de Manchester</Header.Subheader>
                    <TextArea autoHeight
                        onChange={(e,value) => changeQueixas(value.value)}
                        value={queixa}
                        placeholder='Queixas do paciente'
                        style={{ minHeight: 300 }} />
                </Form>
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    queixa: state.queixa.queixa
})

const mapDispatchToProps = dispatch => bindActionCreators({changeQueixas}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Intermediario)
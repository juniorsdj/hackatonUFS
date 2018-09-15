

import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Loader, Grid, Icon, Input, Button, Header } from 'semantic-ui-react'
class Avancado extends React.Component {
    render(){
        return(
            <div>
                <Button
                    toggle
                />
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
   })

const mapDispatchToProps = dispatch => bindActionCreators({ }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Avancado)
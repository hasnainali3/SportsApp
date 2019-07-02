import React, { Component } from 'react';
import ContractView from './ContractsView';
import { connect } from 'react-redux';

class ContractContainer extends Component {
    render() {
        return <ContractView {...this.props} />;
    }
}

function mapStateToProps() {
    return {};
}
function mapDispatchToProps() {
    return {};
}
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ContractContainer);

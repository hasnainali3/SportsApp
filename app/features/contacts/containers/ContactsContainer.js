import React, { Component } from 'react';
import ContactsView from './ContactsView';
import { connect } from 'react-redux';

class ContractContainer extends Component {
    render() {
        return <ContactsView {...this.props} />;
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

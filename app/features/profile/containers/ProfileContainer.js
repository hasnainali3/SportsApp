import React, { Component } from 'react';
import ProfileView from './ProfileView';
import { connect } from 'react-redux';

class ProfileContainer extends Component {
    render() {
        return <ProfileView {...this.props} />;
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
)(ProfileContainer);

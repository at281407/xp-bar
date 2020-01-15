import React, { Component } from 'react';
import {connect} from 'react-redux';

import XpTable from './XpTable.sc';

class XpTableComp extends Component {
    render() {
        return (
            <XpTable>
                <thead>
                    <XpTable.Row>
                        <XpTable.Head>Xp</XpTable.Head>
                        <XpTable.Head>Description</XpTable.Head>
                        <XpTable.Head></XpTable.Head>
                    </XpTable.Row>
                </thead>
                <tbody>
                    <XpTable.Row>
                        <XpTable.Data><input type="text" placeholder="Xp Earned" /> </XpTable.Data>
                        <XpTable.Data><input type="textbox" placeholder="Description of deeds" /></XpTable.Data>
                        <XpTable.Data><XpTable.AddButton>Add</XpTable.AddButton></XpTable.Data>
                    </XpTable.Row>
                    <XpTable.Row>
                        <XpTable.Data>123</XpTable.Data>
                        <XpTable.Data><p>Slayed a bunch of goblins</p></XpTable.Data>
                    </XpTable.Row>
                </tbody>
            </XpTable>
        )
    }
}

export default connect(
    (state) => ({
        modalType: state.modalReducer.modalType,
        isVisible: state.modalReducer.isVisible
    }),
    {
        // Map actions/middleware to props
    }
)(XpTableComp);

import React, { Component } from 'react';
import {connect} from 'react-redux';

import {setXpTableRow} from '../../Redux/actions/XpTable/setXpTableRow';

import XpTable from './XpTable.sc';

class XpTableComp extends Component {

    state = {
        xpField: "",
        xpDescriptionField: ""
    }

    createTableRow = () => {
        console.log("Creating table row");
        let numXp = parseInt(this.state.xpField);
        let row = {
            xp: numXp,
            description: this.state.xpDescriptionField
        }
        console.log("New row:", row);
        this.props.setXpTableRow(row);
    }

    renderTableRows() {
        return this.props.xpTable.xpRows.map(function(xpRow, index){
            return (
                <XpTable.Row key={index + 1}>
                    <XpTable.Data>{xpRow.xp}</XpTable.Data>
                    <XpTable.Data><p>{xpRow.description}</p></XpTable.Data>
                </XpTable.Row>
            )
        })
    }

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
                    
                    <XpTable.Row key="0">
                        <XpTable.Data>
                            <input 
                                id="xpField" 
                                type="text" 
                                placeholder="Xp Earned" 
                                value={this.state.xpField} 
                                onChange={(e) => this.setState({
                                   xpField: e.target.value
                                })}/> 
                        </XpTable.Data>
                        <XpTable.Data> 
                            <input 
                                id="xpDescriptionField" 
                                type="textbox" 
                                placeholder="Description of deeds" 
                                value={this.state.xpDescriptionField}
                                onChange={(e) => this.setState({
                                    xpDescriptionField: e.target.value
                                })}/>
                        </XpTable.Data>
                        <XpTable.Data><XpTable.AddButton onClick={this.createTableRow}>Add</XpTable.AddButton></XpTable.Data>
                    </XpTable.Row>
                    {this.renderTableRows()}
                </tbody>
            </XpTable>
        )
    }
}

export default connect(
    (state) => ({
        modalType: state.modalReducer.modalType,
        isVisible: state.modalReducer.isVisible,
        xpTable: state.xpTableReducer
    }),
    {
        setXpTableRow
    }
)(XpTableComp);

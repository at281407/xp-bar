import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios';

import {setCurrLevelAction} from '../../Redux/actions/XpBar/setCurrLevelAction'
import {setCurrXpAction} from '../../Redux/actions/XpBar/setCurrXpAction'
import {toggleModalAction} from '../../Redux/actions/toggleModalAction';
import {setCurrentLogAction} from '../../Redux/actions/Authentication/setCurrentLogAction';

import {getCurrentLevel} from '../../Services/getCurrentLevel';

import {Bar} from './index.sc';
import {Emblem} from './Emblem.sc';
import { Loading } from '../Loading';

class XpBarComp extends Component {

  state = {
    newXpInput: 0
  }

  getLogInfo = (cb) => {
    let url = window.location.href;
        let currentLogId = url.split('/').pop();
        const payload = {
            id: currentLogId
        }
        axios.post("/api/logs/getLog", payload)
            .then(log => {
                this.props.setCurrentLogAction(log.data);
                if(cb) {
                   cb(log.data);
                }
        })
  }

  componentDidMount() {
    this.setLocalXp();

    this.getLogInfo(data => {
      let xp = data.xpLog.xpBars[0].currentXp;
      let table = data.table.table;
      this.props.setCurrXpAction(xp);
      this.handleXpStore(xp);
      if(xp >= this.props.currLevel.nextLevel){
        setTimeout(function(){
          let leftOverXp = getCurrentLevel(xp, table);
          this.props.setCurrLevelAction(leftOverXp);
          this.props.setCurrXpAction(xp);
          this.props.toggleModalAction("levelUp", true);
        }.bind(this), 1000)
      }
      else {
        let reLevel = getCurrentLevel(xp, table);
        this.props.setCurrLevelAction(reLevel);
      }
    })
  }

  setLocalXp = () => {

    let localXp = localStorage.getItem('xp');
    let localTable = localStorage.getItem('table');
    /* If local XP is stored, get current XP from local storage) */
    if(localXp){
      this.props.setCurrXpAction(localXp);

      let parsedTable = JSON.parse(localTable);
      let newLevel = getCurrentLevel(localXp, parsedTable);
      this.props.setCurrLevelAction(newLevel);
    }
  }

  handleXpStore = () => {
    localStorage.setItem('xp', this.props.currXp);
    let tableString = JSON.stringify(this.props.table.table);
    localStorage.setItem('table', tableString);
  }

  render () {
    if(this.props.currLevel){

      let currXp = this.props.currXp - this.props.currLevel.xpFloor;
      let goal = this.props.currLevel.nextLevel - this.props.currLevel.xpFloor

      let percent = (currXp/goal) * 100;
      if(percent > 100){
        percent = 100;
      }

      if(this.props.currXp >= 0 && this.props.currLevel){
        return (
            <Bar>
              <Bar.Level>Level <b>{this.props.currLevel.level ? this.props.currLevel.level : null}</b></Bar.Level>
              <Emblem />
              <Bar.FillContainer>
                  <Bar.CurrXp>{this.props.currXp} / {this.props.currLevel.nextLevel}</Bar.CurrXp>
                  <Bar.Fill isReseting={this.props.isReseting} percent={percent + "%"} />
              </Bar.FillContainer>
            </Bar>
        )
      }
      else {
        return <Loading />
      }
    }
    else return <Loading />
  }
}

export default connect(
  (props) => ({
    currXp: props.xpBarReducer.currXp,
    currLevel: props.xpBarReducer.currLevel,
    table: props.authenticationReducer.currentLog.table
  }),
  {
    setCurrLevelAction,
    setCurrXpAction,
    toggleModalAction,
    setCurrentLogAction
  }
)(XpBarComp);;
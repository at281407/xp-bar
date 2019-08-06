import React, { Component } from 'react'
import {connect} from 'react-redux'
import firebase from '../../firebase';

import FanFare from '../../Assets/Sounds/LevelUp.wav';

import {setCurrLevelAction} from '../../Redux/actions/XpBar/setCurrLevelAction'
import {setCurrXpAction} from '../../Redux/actions/XpBar/setCurrXpAction'
import {toggleModalAction} from '../../Redux/actions/toggleModalAction';

import {getCurrentLevel} from '../../Services/getCurrentLevel';

import Header from '../Header/index';

import {Bar} from './index.sc';
import {Emblem} from './Emblem.sc';

class XpBarComp extends Component {

  state = {
    newXpInput: 0,
    fanFare: new Audio(FanFare)
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.handleXpStore);
    const rootRef = firebase.database().ref();
    const xpRef = rootRef.child('xp');
    xpRef.on('value', snap => {
      this.props.setCurrXpAction(snap.val());
      if(snap.val() >= this.props.currLevel.nextLevel){
        let newXp = this.props.currLevel.nextLevel;
        this.props.setCurrXpAction(newXp);
        setTimeout(function() {
          console.log("Before Levelup", snap.val());
          let leftOverXp = getCurrentLevel(snap.val());
          this.props.setCurrLevelAction(leftOverXp);
          this.props.setCurrXpAction(snap.val());
          this.props.toggleModalAction("levelUp", true);
        }.bind(this), 1000);
      }
      else {
         let reLevel = getCurrentLevel(snap.val());
         this.props.setCurrLevelAction(reLevel);
      }
    })
  }

  componentWillMount() {

    let localXp = localStorage.getItem('xp');
    console.log("Getting current xp", localXp);
    /* If local XP is stored, get current XP from local storage) */
    if(localXp){
      console.log("setting curr xp and level");
      this.props.setCurrXpAction(localXp);

      let newLevel = getCurrentLevel(localXp);
      this.props.setCurrLevelAction(newLevel);
    }
  }

  componentWillUnmount() {
    window.removeEventListener('beforeunload', this.handleXpStore);
  }

  handleXpStore = () => {
    localStorage.setItem('xp', this.props.currXp);
  }

  render () {
    if(this.props.currLevel){

      let currXp = this.props.currXp - this.props.currLevel.xpFloor;
      let goal = this.props.currLevel.nextLevel - this.props.currLevel.xpFloor
      
      console.log("Curr XP " + currXp, "goal " + goal);

      let percent = (currXp/goal) * 100;
      console.log(percent); 

      if(this.props.currXp && this.props.currLevel){
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
        return <h1>Loading</h1>
      }
    }
    else return <h1>Loading</h1>
  }
}

export default connect(
  (props) => ({
    currXp: props.xpBarReducer.currXp,
    currLevel: props.xpBarReducer.currLevel
  }),
  {
    setCurrLevelAction,
    setCurrXpAction,
    toggleModalAction
  }
)(XpBarComp);;
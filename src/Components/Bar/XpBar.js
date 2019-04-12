import React, { Component } from 'react'
import {connect} from 'react-redux'
import firebase from '../../firebase';

import FanFare from '../../Assets/Sounds/LevelUp.wav';

import {setCurrLevelAction} from '../../Redux/actions/XpBar/setCurrLevelAction'
import {setCurrXpAction} from '../../Redux/actions/XpBar/setCurrXpAction'

import {getCurrentLevel} from '../../Services/getCurrentLevel';

import Header from '../Header/index';

import {Bar} from './index.sc';

import ShipSvg from './Ship.svg';

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
      console.log("Snapshot", snap.val());
      this.props.setCurrXpAction(snap.val());

      if(snap.val() >= this.props.currLevel.nextLevel){
        let newXp = this.props.currLevel.nextLevel;
        let reLevel = getCurrentLevel(snap.val());
        this.props.setCurrXpAction(newXp);
        setTimeout(function() {
          this.state.fanFare.play();
          this.props.setCurrLevelAction(reLevel);
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


    /* If props from local store exists{
         get props from localStorage
      }
      else {
        create local storage
      }
      fetch json from api
      .then(result => {
          let level = getCurrLevel(reult.currXp);
          this.setprops({
            currXp: result.currXp
            currLevel: getCurrLevel(result.currXp)
          })
      })
    */ 
  }

  componentWillUnmount() {
    this.handleClick();
    window.removeEventListener('beforeunload', this.handleXpStore);
  }

  handleClick = () => {
    let newXp = this.state.newXpInput;
    console.log("NewXp",newXp, typeof this.props.currXp);
    // Leveling Up
    if(newXp >= this.props.currLevel.nextLevel){
      alert("Leveling up soon");
      newXp = this.props.currLevel.nextLevel;
      let reLevel = getCurrentLevel(newXp);
      this.props.setCurrXpAction(newXp);
      setTimeout(function() {
        alert("Level Up!");
        this.props.setCurrLevelAction(reLevel);
      }.bind(this), 2000);
    } else {
      this.props.setCurrXpAction(newXp);

      let reLevel = getCurrentLevel(newXp);
      this.props.setCurrLevelAction(reLevel);
    }
    const itemsRef = firebase.database().ref('xp');
    itemsRef.push(newXp);
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

      return (

          <Bar>
            <Bar.Level width="80%">Level: {this.props.currLevel.level ? this.props.currLevel.level : null}</Bar.Level>
            <ShipSvg margin="0 auto" display="block" />
            <Bar.FillContainer>
                <Bar.CurrXp>{this.props.currXp} / {this.props.currLevel.nextLevel}</Bar.CurrXp>
                <Bar.Fill isReseting={this.props.isReseting} percent={percent + "%"} />
            </Bar.FillContainer>
          </Bar>
      )
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
    setCurrXpAction
  }
)(XpBarComp);;
import React, { Component } from 'react'
import {connect} from 'react-redux'
import firebase from '../../firebase';

import {setCurrLevelAction} from '../../Redux/actions/XpBar/setCurrLevelAction'
import {setCurrXpAction} from '../../Redux/actions/XpBar/setCurrXpAction'

import {getCurrentLevel} from '../../Services/getCurrentLevel';

import Header from '../Header/index';

import {Bar} from './index.sc';

import ShipSvg from './Ship.svg';

class XpBarComp extends Component {

  state = {
    newXpInput: 0
  }

  componentDidMount() {
    window.addEventListener('beforeunload', this.handleXpStore);
  }

  componentWillMount() {

    let localXp = localStorage.getItem('xp');
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
    if(newXp >= this.props.currLevel.nextLevel){
      newXp = this.props.currLevel.nextLevel;
      let reLevel = getCurrentLevel(newXp);
      this.props.setCurrXpAction(newXp);
      setTimeout(function() {
        this.props.setCurrLevelAction(reLevel);
      }.bind(this), 1000);
    } else {
      this.props.setCurrXpAction(newXp);

      let reLevel = getCurrentLevel(newXp);
      this.props.setCurrLevelAction(reLevel);
    }
  }

  handleXpStore = () => {
    localStorage.setItem('xp', this.props.currXp);
  }

  render () {
    if(this.props.currLevel.level){

      let currXp = this.props.currXp - this.props.currLevel.xpFloor;
      let goal = this.props.currLevel.nextLevel - this.props.currLevel.xpFloor

      let percent = (currXp/goal) * 100;
      console.log(percent); 

      return (
          
          <Bar>
            <h1>Level: {this.props.currLevel.level}</h1>
            <ShipSvg margin="0 auto" display="block" />
            <Bar.FillContainer>
                <Bar.CurrXp>{this.props.currXp} / {this.props.currLevel.nextLevel}</Bar.CurrXp>
                <Bar.Fill isReseting={this.props.isReseting} percent={percent + "%"} />
            </Bar.FillContainer>
            <input 
                type="text" 
                value={this.state.newXpInput} 
                onChange={(e) => this.setState({newXpInput: e.target.value})} />
            <button onClick={this.handleClick}>Inc XP +100</button>
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
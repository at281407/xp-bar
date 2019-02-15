import React, { Component } from 'react'

import {getCurrentLevel} from '../../Services/getCurrentLevel';

import {Bar} from './index.sc';

import ShipSvg from './Ship.svg';

class XpBarComp extends Component {

  state = {
    currXp: 0,
    isReseting: false,
    currLevel: {
      level: null,
      xpFloor: null,
      nextLevel: null
    }
  }

  componentWillMount = () => {

    let localXp = localStorage.getItem('xp');
    if(localXp){
      this.setState({
        currXp: localXp,
        currLevel: getCurrentLevel(localXp)
      });
    }

    /* If state from local store exists{
         get state from localStorage
      }
      else {
        create local storage
      }
      fetch json from api
      .then(result => {
          let level = getCurrLevel(reult.currXp);
          this.setState({
            currXp: result.currXp
            currLevel: getCurrLevel(result.currXp)
          })
      })
    */ 
    if(!this.state.currLevel.level){
      console.log(this.state.currXp);
      let level = getCurrentLevel(this.state.currXp);
      console.log(level);
      this.setState({
        currLevel: level
      })
    }
  }


  handleClick = () => {
    let newXp = this.state.currXp + 100;
    if(newXp >= this.state.currLevel.nextLevel){
      newXp = this.state.currLevel.nextLevel;
      let reLevel = getCurrentLevel(newXp);
      this.setState({ currXp: newXp });
      setTimeout(function() {
        alert("Level Up!");
        this.setState({
          currLevel: reLevel,
          isResting: true
        });
      }.bind(this), 1000);
    } else {
      let reLevel = getCurrentLevel(newXp);
      this.setState({
        currXp: newXp,
        currLevel: reLevel
      })
    }
  }

  render () {
    if(this.state.currLevel.level){

      let currXp = this.state.currXp - this.state.currLevel.xpFloor;
      let goal = this.state.currLevel.nextLevel - this.state.currLevel.xpFloor

      let percent = (currXp/goal) * 100;
      console.log(percent); 

      return (
          
          <Bar>
            <h1>Level: {this.state.currLevel.level}</h1>
            <h3>XP: {this.state.currXp}</h3>
            <h3>Next: {this.state.currLevel.nextLevel}</h3>
            <ShipSvg margin="0 auto" display="block" />
            <Bar.FillContainer>
                <Bar.CurrXp>{this.state.currXp} / {this.state.currLevel.nextLevel}</Bar.CurrXp>
                <Bar.Fill isReseting={this.state.isReseting} percent={percent + "%"} />
            </Bar.FillContainer>
            <button onClick={this.handleClick}>Inc XP +100</button>
          </Bar>
      )
    }
    else return <h1>Loading</h1>
  }
}

export default XpBarComp;
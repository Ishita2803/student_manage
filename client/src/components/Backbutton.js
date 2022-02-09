import React, { Component } from 'react'

export default class Backbutton extends Component {
    handleBack=(back)=>{
        back.goBack();
    }
  render() {
    return (
      <div>
          <button onClick={()=>this.handleBack(this.props.back)}><i class="fad fa-fire-alt"></i><i class="fa-solid fa-square-arrow-left"></i></button>
      </div>
    )
  }
}

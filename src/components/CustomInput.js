import React from "react";

class CustomInput extends React.Component {
  render() {
    return (
      <div style={{width: "200px", background: "purple"}}>
        <label>{this.props.label}</label>
        <input value={this.props.valor} onChange={this.props.mudanca}/>
      </div>
    );
  }
}

export default CustomInput
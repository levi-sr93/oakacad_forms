import React from "react";
import axios from "axios";
import SearchInput from "./SearchInput";
// import CustomInput from "./CustomInput";
class App extends React.Component {
  // state = {
  //   inputState: "",
  //   // nomePessoa: "Joao",
  // };

  state = {
    images: []
  }

   onSearchSubmit = async (entry) => {
    console.log(entry);
    const response = await axios.get(
      `https://pixabay.com/api/?key=18458794-1e2941ea594f101a4f9214914&q=${entry}&image_type=photo&pretty=true`
    );

    this.setState({images: response.data.hits})
  };

  onChangeInput = (event) => {
    this.setState({
      inputState: event.target.value,
    });
  };

  // onChangePessoa = (event) => {
  //   this.setState({ nomePessoa: event.target.value });
  // };

  render() {
    return (
      <div className="ui container" style={{ marginTop: "30px" }}>
        {/* {this.state.inputState}
        <br></br>
        {this.state.nomePessoa} */}
        <SearchInput onSearchSubmit={this.onSearchSubmit} />

        {/* <CustomInput
           label="Input"
          valor={this.state.inputState}
          mudanca={this.onChangeInput}
        />
        <CustomInput
        label={"Nome"}
          valor={this.state.nomePessoa}
          mudanca={this.onChangePessoa}
        /> */}

        {/* <button onClick={this.onChangeInput(this.state.inputState)}>Enviar</button> */}

        We have {this.state.images.length} images
      </div>
    );
  }
}

export default App;

import React, { Component } from "react";
import { View } from "react-native";
import axios from "axios";
import ListDetail from "./ListDetail";

class List extends Component {
  state = { lists: [] };

  componentDidMount() {
    axios
      .get("https://rallycoding.herokuapp.com/api/music_albums")
      .then(response => this.setState({ lists: response.data }));
  }

  renderLists() {
    return this.state.lists.map(list => (
      <ListDetail key={list.title} list={list} />
    ));
  }

  render() {
    console.log(this.state);

    return <View>{this.renderLists()}</View>;
  }
}

export default List;

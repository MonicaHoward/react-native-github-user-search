import React from "react";
import { StyleSheet, Text, TextInput, View } from "react-native";

export default class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userQuery: ""
    };
  }
  render() {
    return (
      <View>
        <TextInput
          style={styles.input}
          placeholder="Search by Github UserName..."
          placeholderTextColor="#DDD"
          onChangeText={text => {
            this.setState({ userQuery: text });
          }}
        />
        <Text
          style={{
            marginTop: 60,
            fontSize: 25
          }}
        >
          Showing results for: {this.state.userQuery}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  input: {
    borderColor: "#CCC",
    borderRadius: 5,
    borderWidth: 2,
    height: 40,
    width: 200,
    padding: 5
  }
});

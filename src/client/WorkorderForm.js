import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { Typography, Paper, Table, TableHead, TableRow, TableCell, TableBody } from "@material-ui/core";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { withStyles } from "@material-ui/styles";

const styles = {
  "@global": {
    body: {
      backgroundColor: "#white"
    }
  }
};

class WorkorderForm extends Component {
  constructor(props) {
    super(props);

    this.handleInputChange = this.handleInputChange.bind(this);
    this.onClick = this.onClick.bind(this);

    this.state = {
      tempTitle: "",
      tempDescription: ""
    };
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({ [name]: value });
  }

  componentDidMount() {
    this.setState({ ["id"]: this.props.workorder.id });
    this.setState({ ["teamId"]: this.props.workorder.teamId });
    this.setState({ ["tempTitle"]: this.props.workorder.title });
    this.setState({ ["tempDescription"]: this.props.workorder.description });
  }

  onClick() {
    this.props.handleSave({
      id: this.state.id,
      teamId: this.state.teamId,
      title: this.state.tempTitle,
      description: this.state.tempDescription
    });
  }

  render() {
    return (
      <Fragment>
        <form>
          <TextField
            margin="normal"
            required
            fullWidth
            id="title"
            label="Title"
            name="tempTitle"
            type="text"
            value={this.state.tempTitle}
            onChange={this.handleInputChange}
          />
          <TextField
            margin="normal"
            required
            fullWidth
            id="description"
            label="Description"
            name="tempDescription"
            type="text"
            value={this.state.tempDescription}
            onChange={this.handleInputChange}
          />
          <Button color="primary" onClick={this.onClick}>
            Save
          </Button>
        </form>
      </Fragment>
    );
  }
}

export default withStyles(styles)(WorkorderForm);

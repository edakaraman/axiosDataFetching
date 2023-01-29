import React from "react";
import axios from "axios";
import { Table, Container } from "reactstrap";

export default class UserList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isLoading: true, users: [] };
  }

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`).then((response) => {
      this.setState({ users: response.data });
      this.setState({ isLoading: false });
    });
  }

  render() {
    const { isLoading } = this.state;
    if (isLoading) {
      return <div> Loading... </div>;
    }
    return (
      <Container>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>User Name</th>
              <th>Name</th>
              <th>E-Mail </th>
              <th> Company Name </th>
            </tr>
          </thead>
          <tbody>
            {this.state.users.map((user) => (
              <tr>
                <td key={user.id}>{user.id}</td>
                <td key={user.id}>{user.username}</td>
                <td key={user.id}>{user.name}</td>
                <td key={user.id}>{user.email}</td>
                <td key={user.id}>{user.company.name}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </Container>
    );
  }
}

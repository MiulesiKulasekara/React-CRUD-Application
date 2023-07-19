import React, { useEffect, useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Table from "react-bootstrap/Table";
import axios from "axios";
import { Link } from "react-router-dom";

const Viewall = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => {
        // console.log(res.data);
        setUser(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const handleDelete = (id) => {
    const confirm = window.confirm("Do you want to delete this user?");

    if (confirm) {
      axios
        .delete("http://localhost:3000/users/" + id)
        .then((res) => {
          alert("User " + id + " is deleted.");
          // navigate("/");
          window.location.reload(false);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <Container fluid>
      <Row>
        <Col>
          <Link className="btn btn-primary" to={"/adduser"}>
            Add a User
          </Link>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>index</th>
                <th>id</th>
                <th>Name</th>
                <th>Email</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {user.map((user, index) => {
                return (
                  <tr key={index}>
                    <td>{index + 1}</td>
                    <td>{user.id}</td>
                    <td>{user.name}</td>
                    <td>{user.email}</td>
                    <td>
                      <Link
                        className="btn btn-success"
                        to={`/updateuser/${user.id}`}
                      >
                        Update
                      </Link>
                      {/* <Button variant="danger"><Link to={"/deleteauser"}>Delete</Link></Button> */}
                      <Link
                        onClick={(e) => handleDelete(user.id)}
                        className="btn btn-danger"
                      >
                        Delete
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default Viewall;

import React, { useState, useEffect } from "react";
import Button from "@material-ui/core/Button";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import { Modal } from "react-bootstrap";
import Typography from "@material-ui/core/Typography";
import Edit from "./Edit";

function Home({ name, email }) {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  const [update, setUpdate] = useState("");
  const [show, setShow] = useState(false);
  const classes = useStyles();

  // for dialogue box
  const handleShow = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  useEffect(() => {
    handleClose();
  }, []);
  

  const deleteData = (id) => {
    console.log(id, "asaasass");
    axios.delete(`http://localhost:3000/users/${id}`).then(function (res) {
      fetchData();
    });
  };


  const fetchData = () => {
    axios.get("http://localhost:3000/users").then(function (res) {
      setData([...res.data]);
    });
  };
  const editTask = (item) => {
    setUpdate(item);
  };

  return (
    <div>
      <Button onClick={() => navigate("/")}>Back To Header</Button>
      <div>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quo ipsa unde
        fugit est impedit labore, distinctio corporis voluptatem laborum nulla
        esse officia a, rem eveniet at voluptate, nostrum provident animi sed
        tempora quod atque quaerat natus hic? Illum exercitationem eaque fugit
        in debitis! Illo dolorem perspiciatis vero, quibusdam aliquid
        exercitationem.
      </div>
      <Button
        onClick={() => fetchData()}
        type="submit"
        width="50px"
        variant="contained"
        color="primary"
      >
        fecth Data
      </Button>
      {data.map((item) => {
        console.log(item, "hhh");
        const { _id, name, email } = item;
        return (
          <div key={_id}>
            <Card className={classes.root}>
              <CardContent>
                <Typography
                  className={classes.title}
                  color="textSecondary"
                  gutterBottom
                >
                  {name}
                </Typography>
                <Typography variant="body2" component="p">
                  {email}
                </Typography>
              </CardContent>
              <CardActions>
                <Button onClick={() => deleteData(_id)} size="small">
                  Delete
                </Button>
                <Button
                  onClick={() => {
                    handleShow();
                    editTask(item);
                  }}
                >
                  Edit
                </Button>
              </CardActions>
            </Card>
          </div>
        );
      })}

      <Modal show={show} onHide={handleClose}>
        <Modal.Header>
          <Modal.Title>Edit Task</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Edit update={update} handleClose={handleClose} fetchData={fetchData}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}
const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: "inline-block",
    margin: "0 2px",
    transform: "scale(0.8)",
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

export default Home;

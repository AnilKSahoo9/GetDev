import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
// import Title from "./Title";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import Swal from "sweetalert2";

// Generate Order Data
// function createData(id, date, name, shipTo, paymentMethod, amount) {
//   return { id, date, name, shipTo, paymentMethod, amount };
// }

const rows = [
  {
    id: 1,
    name: "Anil",
    image: "D:PhotosHomeMeIMG_0987",
  },
  {
    id: 2,
    name: "Ankur",
    image: "D:PhotosHomeMeIMG_0987",
  },
  {
    id: 3,
    name: "Himanshu",
    image: "D:PhotosHomeMeIMG_0987",
  },
  {
    id: 4,
    name: "Anil",
    image: "D:PhotosHomeMeIMG_0987",
  },
  {
    id: 5,
    name: "Ankur",
    image: "D:PhotosHomeMeIMG_0987",
  },
  {
    id: 6,
    name: "Himanshu",
    image: "D:PhotosHomeMeIMG_0987",
  },
  {
    id: 7,
    name: "Anil",
    image: "D:PhotosHomeMeIMG_0987",
  },
  {
    id: 8,
    name: "Ankur",
    image: "D:PhotosHomeMeIMG_0987",
  },
  {
    id: 9,
    name: "Himanshu",
    image: "D:PhotosHomeMeIMG_0987",
  },
  {
    id: 10,
    name: "Anil",
    image: "D:PhotosHomeMeIMG_0987",
  },
  {
    id: 11,
    name: "Ankur",
    image: "D:PhotosHomeMeIMG_0987",
  },
  {
    id: 12,
    name: "Himanshu",
    image: "D:PhotosHomeMeIMG_0987",
  },
];

function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles((theme) => ({
  seeMore: {
    marginTop: theme.spacing(3),
  },
  button: {
    margin: theme.spacing(0.2),
  },
}));

export default function UserList(props) {
  const classes = useStyles();
  const handleAccept = () => {
    Swal.fire({
      icon: "success",
      title: "",
      text: "Request Accepted",
      showConfirmButton: false,
      timer: 2000,
    });
  };
  return (
    <React.Fragment>
      {/* <Title>Recent Orders</Title> */}
      <Table size="small">
        <TableHead>
          <TableRow>
            {/* <TableCell>Date</TableCell> */}

            {/* <TableCell>Ship To</TableCell> */}
            <TableCell>Serial No.</TableCell>
            <TableCell>Image</TableCell>
            <TableCell>Name</TableCell>
            {/* <TableCell align="right">Sale Amount</TableCell> */}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.id}>
              <TableCell>{row.id}</TableCell>

              {/* <TableCell>{row.shipTo}</TableCell> */}
              <TableCell>
                <AccountCircleIcon />
              </TableCell>
              <TableCell>{row.name}</TableCell>
              {props.isAcceptSection ? (
                <Button
                  //type="submit"
                  fullWidth
                  variant="outlined"
                  color="primary"
                  className={classes.button}
                  onClick={handleAccept}
                >
                  Accept
                </Button>
              ) : null}
              {/* <TableCell align="right">{row.amount}</TableCell> */}
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <div className={classes.seeMore}>
        {props.isChatSection ? (
          <Link color="primary" href="#" onClick={preventDefault}>
            Chat with more developers
          </Link>
        ) : (
          <Link color="primary" href="#" onClick={preventDefault}>
            See more developer's requests
          </Link>
        )}
      </div>
    </React.Fragment>
  );
}

import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Title from "../Title";

const useStyles = makeStyles((theme) => ({
  wrapper: {
    marginTop: theme.spacing(2),
  },
  seeMore: {
    marginTop: theme.spacing(3),
  },
}));

const TransactionsTable = ({ data }) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.wrapper}>
      <Paper>
        <Title>Transactions Table</Title>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell>Id</TableCell>
              <TableCell>Date</TableCell>
              <TableCell>Username</TableCell>
              <TableCell>Amount</TableCell>
              <TableCell align="right">Balance</TableCell>
            </TableRow>
          </TableHead>
          {data && (
            <TableBody>
              {data.map(({ id, date, username, amount, balance }) => (
                <TableRow key={id}>
                  <TableCell>{id}</TableCell>
                  <TableCell>{date}</TableCell>
                  <TableCell>{username}</TableCell>
                  <TableCell>{amount}</TableCell>
                  <TableCell align="right">{balance}</TableCell>
                </TableRow>
              ))}
            </TableBody>
          )}
        </Table>
      </Paper>
    </Grid>
  );
};

export default TransactionsTable;

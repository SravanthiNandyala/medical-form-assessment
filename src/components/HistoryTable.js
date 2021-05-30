import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

export function HistoryTable({ rows }) {
    const classes = useStyles();
    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Surname</TableCell>
                        <TableCell>DOB</TableCell>
                        <TableCell>Phone</TableCell>
                        <TableCell>PCP Check</TableCell>
                        <TableCell>PCP Name</TableCell>
                        <TableCell>Concerns And Symptoms</TableCell>
                        <TableCell>Current Health Concerns</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                    rows.map((row, index) => (
                        <TableRow key={index}>
                            <TableCell>{row.fname}</TableCell>
                            <TableCell>{row.lname}</TableCell>
                            <TableCell>{row.dob}</TableCell>
                            <TableCell>{row.phone}</TableCell>
                            <TableCell>{row.pcpCheck}</TableCell>
                            <TableCell>{row.pcpname ? row.pcpname : 'NA'}</TableCell>
                            <TableCell>{row.concernsAndSymp ? row.concernsAndSymp : 'NA'}</TableCell>
                            <TableCell>{row.currHealthConcerns ? row.currHealthConcerns : 'NA'}</TableCell>
                        </TableRow>
                    ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}

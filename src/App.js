import React, { useState, useEffect } from "react";
import { MedicalForm } from "./components/MedicalForm";
import { Container, Grid, Button } from "@material-ui/core";
import { HistoryTable } from "./components/HistoryTable";
import { addRow, loadHistory } from './actions';
import { useDispatch, useSelector } from "react-redux";

function App() {
  const rows = useSelector(state => state.table.rows);
  const dispatch = useDispatch();
  const [showHistory, setShowHistory] = useState(false);
  useEffect(() => {
    dispatch(loadHistory());
  }, [dispatch]);

  return (
    <div className="App">
      <MedicalForm
        title="Assessment Form"
        subTitle1="Patient Information"
        subTitle2="Care Information"
        subTitle3="PCP Name"
        onSubmit={row => dispatch(addRow(row))}
      />
      <Container component="main" maxWidth="md">
        <Grid container spacing={0}>
          <Grid item xs={12}>
            {rows.length > 0 && <Button style={{ margin: 10 }}
              type="submit"
              variant="contained"
              color="primary"
              className="primary"
              onClick={() => setShowHistory(!showHistory)}
            >
              {showHistory ? 'Hide History' : 'Show History'}
            </Button>}
          </Grid>
          <Grid item xs={12}>
            {showHistory && <HistoryTable rows={rows} />}
          </Grid>
        </Grid>
      </Container>
    </div>

  );
}

export default App;

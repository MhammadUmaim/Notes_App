import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars(props) {
  return (
    <div>
      <Snackbar open={props.visibility} autoHideDuration={3000} >
        <Alert
          severity="error"
          variant="filled"
          sx={{ width: '100%' , bgcolor: 'red' }}
        >
          Enter text to add a note
        </Alert>
      </Snackbar>
    </div>
  );
}
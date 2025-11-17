import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars(props) {
  return (
    <div>
      <Snackbar open={props.visibility} autoHideDuration={3000} >
        <Alert
          severity="success"
          variant="filled"
          sx={{ width: '100%' , bgcolor: 'green' }}
        >
          Your Note has been added!
        </Alert>
      </Snackbar>
    </div>
  );
}
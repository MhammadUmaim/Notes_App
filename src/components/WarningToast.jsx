import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars(props) {
  return (
    <div>
      <Snackbar open={props.visibility} autoHideDuration={3000} >
        <Alert
          severity="warning"
          variant="filled"
          sx={{ width: '100%' , bgcolor: 'orange' }}
        >
          Title must be 3-10 characters and Text must be 5-50 characters long
        </Alert>
      </Snackbar>
    </div>
  );
}
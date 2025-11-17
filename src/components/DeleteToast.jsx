import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars(props) {
  return (
    <div>
      <Snackbar open={props.visibility} autoHideDuration={3000} className=' sm:w-[30vw] w-[90vw] position-fixed transform z-50'>
        <Alert
          severity="error"
          variant="filled"
          sx={{ width: '100%' , bgcolor: 'red' }}
        >
          Your note has been deleted
        </Alert>
      </Snackbar>
    </div>
  );
}
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars(props) {
  return (
    <div>
      <Snackbar open={props.visibility} autoHideDuration={3000} className=' sm:w-[30vw] w-[90vw] position-fixed transform z-50'>
        <Alert
          severity="warning"
          variant="filled"
          sx={{ bgcolor: 'orange' }}
        >
          
          Title must be 3-10 characters and Text must be 5-50 characters long
        </Alert>
      </Snackbar>
    </div>
  );
}
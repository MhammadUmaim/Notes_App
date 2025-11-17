import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';

export default function CustomizedSnackbars(props) {
  return (
    <div>
      <Snackbar open={props.visibility} autoHideDuration={3000} className=' sm:w-[30vw] w-[90vw] position-fixed transform z-50'>
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
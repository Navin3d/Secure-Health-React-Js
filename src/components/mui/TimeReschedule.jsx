import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import '../../styles/pages/Doctorappoinmentlist.css';

export default function TimeReschedule() {
  const [open, setOpen] = React.useState(false);
  const [selectedTime, setSelectedTime] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    console.log()
    setOpen(false);
  };

  const handleSubscribe = () => {
    console.log('Selected Time:', selectedTime);
    handleClose();
  };

  return (
    <div>
     
      <button id='buton-font' onClick={handleClickOpen} className='btn btn-warning'>RESCHEDULE</button>
      <div>
      <Dialog open={open} onClose={handleClose} >
        <DialogTitle id='dialogue-title' >RESCHEDULE</DialogTitle>
        <DialogContent>
          <DialogContentText id='dialogue-subtext'>
                Fix your Patients Re-visit Time.
          </DialogContentText>
          <TextField 
             autoFocus
             margin="dense"
             id="time"
             label="Appointment Time"
             type="time" 
             fullWidth
             variant="standard"
             value={selectedTime}
             onChange={(e) => setSelectedTime(e.target.value)}
        />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>CANCEL</Button>
          <Button onClick={handleSubscribe}>SUMBIT</Button>
        </DialogActions>
      </Dialog>
      </div>
    </div>
  );
}
import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  Typography,
  DialogActions,
} from "@material-ui/core";

type ErrorDialogPropsT = {
  onClose: () => void;
  title: string;
  message: string;
  open: boolean;
};

const ErrorDialog: React.FC<ErrorDialogPropsT> = ({
  onClose,
  title,
  message,
  open,
}) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>
        <Typography variant="body2" component="p">
          {message}
        </Typography>
      </DialogContent>
      <DialogActions></DialogActions>
    </Dialog>
  );
};

export default ErrorDialog;

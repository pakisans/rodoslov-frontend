import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from "@mui/material";
import HelpDialogResult from "../../Constants/HelpDialogResult";

const HelpDialog = ({ payload, handleResult, title, text, show, yesText, noText }) => {
    const selected = (result) => {
        if(handleResult){
            handleResult(result, payload);
        }
    }

    return <Dialog className={'help-dialog'}
            open={show}
            onClose={() => selected(HelpDialogResult.CANCEL)}
        >
            <DialogTitle className="dialog-title">
                {title}
            </DialogTitle>
            <DialogContent>
                <DialogContentText>
                    {text}
                </DialogContentText>
            </DialogContent>
            <DialogActions>
                <Button className="help-submit-button" onClick={() => selected(HelpDialogResult.YES)} variant="contained">
                    {yesText}
                </Button>
                <Button className="help-cancel-button" onClick={() => selected(HelpDialogResult.NO)} variant="contained">
                    {noText}
                </Button>
            </DialogActions>
    </Dialog>
}

export default HelpDialog;
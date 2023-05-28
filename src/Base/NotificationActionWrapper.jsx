import {Alert, Snackbar} from "@mui/material";
import React, {useState} from "react";
import NotificationActionContext from "../Context/NotificationActionWrapper";

const NotificationActionWrapper = ({children}) => {
    const [showSnackbar, setShowSnackbar] = useState(false);
    const [messageSnackbar, setMessageSnackbar] = useState('');
    const [alertType, setAlertType] = useState('success');
    const [autoHideDuration, setAutoHideDuration] = useState(3000);

    const handleCloseSnackbar = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setShowSnackbar(false);
    };

    const showNotification = (message, alertType = 'success', autoHideDuration = 3000) => {
        setAlertType(alertType)
        setMessageSnackbar(message)
        setShowSnackbar(true);
        setAutoHideDuration(autoHideDuration);
    }

    const value = {showNotification}

    return <NotificationActionContext.Provider value={value}>
        <Snackbar open={showSnackbar} autoHideDuration={autoHideDuration} onClose={handleCloseSnackbar}>
            <Alert severity={alertType} onClose={handleCloseSnackbar}>
                {messageSnackbar}
            </Alert>
        </Snackbar>

        {children}

    </NotificationActionContext.Provider>
}

export default NotificationActionWrapper;

//Start signature to Callback event to CM_TMMBYPTP_06P
task.executeCommandCallback.CM_TMMBYPTP_06P = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_DC48_NRT63');
    executeCommandCallbackEventArgs.commons.api.navigation.closeModal({});
};

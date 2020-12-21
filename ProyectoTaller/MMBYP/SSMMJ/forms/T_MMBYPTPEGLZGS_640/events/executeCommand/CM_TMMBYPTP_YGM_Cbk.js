
//Start signature to Callback event to CM_TMMBYPTP_YGM
task.executeCommandCallback.CM_TMMBYPTP_YGM = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_IP48_CFD88');
    executeCommandCallbackEventArgs.commons.api.navigation.closeModal({});


};


//Start signature to Callback event to CM_TMMBYPDI_5BM
task.executeCommandCallback.CM_TMMBYPDI_5BM = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_IP48_CFD88');
    executeCommandCallbackEventArgs.commons.api.navigation.closeModal({});

};

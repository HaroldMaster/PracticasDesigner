
//Start signature to Callback event to CM_TMMBYPDI_FF4
task.executeCommandCallback.CM_TMMBYPDI_FF4 = function(entities, executeCommandCallbackEventArgs) {
     //here your code
    executeCommandCallbackEventArgs.commons.api.grid.refresh('QV_ZF41_UEL20');
    executeCommandCallbackEventArgs.commons.api.navigation.closeModal({});
};

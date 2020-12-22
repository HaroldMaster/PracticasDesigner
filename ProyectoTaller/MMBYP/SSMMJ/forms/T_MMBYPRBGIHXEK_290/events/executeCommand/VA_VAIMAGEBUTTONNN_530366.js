

//Entity: FiltroBusquedaPersona
//FiltroBusquedaPersona. (ImageButton) View: formFiltro
//Evento ExecuteCommand: Permite personalizar la acción a ejecutar de un command o de un ActionControl.
task.executeCommand.VA_VAIMAGEBUTTONNN_530366 = function(  entities, executeCommandEventArgs ) {

    executeCommandEventArgs.commons.execServer = false;
    let valor  = entities.FiltroBusquedaPersona.filtro;
    if(valor === "PE"){
       executeCommandEventArgs.commons.api.grid.refresh('QV_PY48_YYU52');
       }
    if(valor ==="CL"){
       executeCommandEventArgs.commons.api.grid.refresh('QV_FF41_QCK89');
       }
};
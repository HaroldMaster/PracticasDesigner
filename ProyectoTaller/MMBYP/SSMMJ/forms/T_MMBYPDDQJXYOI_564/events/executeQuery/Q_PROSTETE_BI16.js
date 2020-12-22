
//ProspectoQuery Entity: Prospecto
task.executeQuery.Q_PROSTETE_BI16 = function(executeQueryEventArgs){
    executeQueryEventArgs.commons.execServer = true;
    //executeQueryEventArgs.commons.serverParameters.Prospecto = true;
    executeQueryEventArgs.parameters.estado = executeQueryEventArgs.commons.api.vc.model.FiltroBusquedaPersona.filtro;
    executeQueryEventArgs.parameters.tipo = executeQueryEventArgs.commons.api.vc.model.FiltroBusquedaPersona.tipo;

};


//Entity: Persona
//Persona.estadoCivil (ComboBox) View: formRegistro
//Evento Change: Se ejecuta al cambiar el valor de un InputControl.
task.change.VA_ESTADOCIVILTYTS_605867 = function(  entities, changedEventArgs ) {

    changedEventArgs.commons.execServer = false;
    let estado = changedEventArgs.newValue;

    if(estado == "SO"){
		changedEventArgs.commons.api.viewState.hide('VA_NOMBRECONYUGUUU_311867');
		changedEventArgs.commons.api.viewState.hide('VA_APELLIDOCONYUUE_364867');

	}else{
		changedEventArgs.commons.api.viewState.show('VA_NOMBRECONYUGUUU_311867');
		changedEventArgs.commons.api.viewState.show('VA_APELLIDOCONYUUE_364867');
	}


};
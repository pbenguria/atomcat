'use strict';

app.factory('UserSrv', function($resource, API_URL){
  var url = API_URL + 'user/:id';
  return $resource(url, {id: '@id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('ClienteSrv', function($resource, API_URL){
  var url = API_URL + 'owners/:id';
  return $resource(url, {id: '@id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('InformesSrv', function($resource, API_URL){
  var url = API_URL + 'reports/:id';
  return $resource(url, {id: '@id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('MascotaSrv', function($resource, API_URL){
  var url = API_URL + 'pets/:id';
  return $resource(url, {id: '@id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('EspeciesSrv', function($resource, API_URL){
  var url = API_URL + 'species/:id';
  return $resource(url, {id: '@id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('RazasSrv', function($resource, API_URL){
  var url = API_URL + 'races/:id';
  return $resource(url, {id: '@id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('VisitasSrv', function($resource, API_URL){
	var url = API_URL + 'pets/:id/visits/:visit_id';
	return $resource(url, {id: '@id', visit_id: '@visit_id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('NotasSrv', function($resource, API_URL){
  var url = API_URL + 'pets/:id/notes/:note_id';
  return $resource(url, {id: '@id', note_id: '@note_id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('AlergiasSrv', function($resource, API_URL){
  var url = API_URL + 'pets/:id/allergies/:allergie_id';
  return $resource(url, {id: '@id', allergie_id: '@allergie_id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('VacunasSrv', function($resource, API_URL){
  var url = API_URL + 'pets/:id/vaccines/:vaccine_id';
  return $resource(url, {id: '@id', vaccine_id: '@vaccine_id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('MascotasVacunasSrv', function($resource, API_URL){
  var url = API_URL + 'pets/:id/pets_vaccines/:petvaccine_id';
  return $resource(url, {id: '@id', petvaccine_id: '@petvaccine_id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('MedidasSrv', function($resource, API_URL){
  var url = API_URL + 'pets/:id/sizes/:size_id';
  return $resource(url, {id: '@id', size_id: '@size_id'}, {update: {method: 'PUT'}, isArray: false});
});

app.factory('ChatSrv', function(){
  var chats = [
    {
      'pregunta': ['cre', 'alta', 'a??ad', 'agreg'],
      'respuesta': 'Para crear un cliente o una mascota pulsa en el bot??n situado en el men?? lateral. Una vez rellenes todos los campos se activar?? el bot??n para crearlo'
    },
    {
      'pregunta': ['modific', 'cambi'],
      'respuesta': 'Para modificar un elemento basta con pulsar en el bot??n naranja con el icono de un l??piz.'
    },
    {
      'pregunta': ['busc', 'filtr'],
      'respuesta': 'Para buscar pulsa el bot??n circular blanco con el icono de la lupa y se mostrar?? un campo para introducir los t??rminos de la b??squeda.'
    },
    {
      'pregunta': ['foto', 'imagen'],
      'respuesta': 'Para crear o modificar la foto de perfil, pulsa el bot??n de SELECCIONAR IMAGEN, selecciona la foto y pulsa en el bot??n con el icono de una nube.'
    },
    {
      'pregunta': ['vacuna'],
      'respuesta': 'En el apartado de Vacunas, en la parte superior se muestran todas vacunas de la especie a la que pertenece la mascota, debajo las vacunas que tiene y a la derecha las siguientes.'
    },
    {
      'pregunta': ['agenda', 'calendario'],
      'respuesta': 'En el apartado de Agenda se visualizan las vacunas y las visitas de la mascota seleccionada.'
    },
    {
      'pregunta': ['nota'],
      'respuesta': 'El apartado de Notas permite visualizar, crear y modificar notas sobre la mascota seleccionada.'
    },
    {
      'pregunta': ['alergia'],
      'respuesta': 'El apartado de Alergias permite visualizar, crear y modificar las alergias que tenga una mascota, las cuales se mostrar??n con un mensaje flotante cada vez que se entre en el perfil de la misma.'
    },
    {
      'pregunta': ['visita', 'cita'],
      'respuesta': 'El apartado de Visitas permite visualizar, crear y modificar las visitas de la mascota seleccionada a la cl??nica.'
    },
    {
      'pregunta': ['medida', 'mide', 'pes', 'altura'],
      'respuesta': 'El apartado de Medidas permite visualizar, crear y modificar las medidas de la mascota seleccionada.'
    },
    {
      'pregunta': ['informe', 'lista', 'carta', 'avis'],
      'respuesta': 'El apartado de Informes permite generar un listado de las vacunas que las mascotas tienen pendientes, y generar las correspondientes cartas de aviso para enviar a los due??os.'
    },
    {
      'pregunta': ['agresiv', 'caracter', 'car??cter'],
      'respuesta': 'El car??cter de cada mascota se representa con icono de un perro ladrando, siendo uno muy manso y cinco muy agresivo.'
    }
  ];
  return chats;
});

app.factory('ProvinciasSrv', function(){
	var provincias = [
		'??lava', 'Albacete', 'Alicante', 'Almer??a',
    'Asturias', '??vila', 'Badajoz', 'Barcelona', 'Burgos',
    'C??ceres', 'C??diz', 'Cantabria', 'Castell??n', 'Ciudad Real',
    'C??rdoba', 'La Coru??a', 'Cuenca', 'Gerona', 'Granada',
    'Guadalajara', 'Guip??zcoa', 'Huelva', 'Huesca', 'Baleares',
    'Ja??n', 'Le??n', 'L??rida', 'Lugo', 'Madrid', 'M??laga',
    'Murcia', 'Navarra', 'Orense', 'Palencia', 'Las Palmas',
    'Pontevedra', 'La Rioja', 'Salamanca', 'Segovia',
    'Sevilla', 'Soria', 'Tarragona', 'Santa Cruz de Tenerife',
    'Teruel', 'Toledo', 'Valencia', 'Valladolid', 'Vizcaya',
    'Zamora', 'Zaragoza', 'Ceuta', 'Melilla'
	];
	return provincias;
});

app.factory('EstadosSrv', function(){
  var estados = [
    'Vivo', 'Muerto', 'Sacrificado'
  ];
  return estados;
});


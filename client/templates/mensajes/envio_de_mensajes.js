/* No descomentar hasta el paso 7 */
Template.envioDeMensajes.events({
  'submit #enviarMensaje': function(event){
    var f = new Date();
    var fechaFormateada = formatearFecha(f);
    Mensajes.insert({
      texto: event.target.textoMensaje.value,
      usuario: Meteor.userId(),
      nombreUsuario: Meteor.user().username,
      fecha: f,
      fechaFormateada: fechaFormateada
    });
    event.target.textoMensaje.value="";
    return false;
  }
});

function formatearFecha(fecha) {
    var h = fecha.getHours();
    var m = fecha.getMinutes();
    var s = fecha.getSeconds();
    // add a zero in front of numbers<10
    m = checkTime(m);
    s = checkTime(s);
    var fechaFormateada = h + ":" + m + ":" + s;
    return fechaFormateada;
}

function checkTime(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

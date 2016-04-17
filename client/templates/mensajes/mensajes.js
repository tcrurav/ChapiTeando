Template.mensajes.helpers({
  mensajes: Mensajes.find({}, {sort: {fecha: -1}})
});

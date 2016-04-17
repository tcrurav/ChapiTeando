/* No descomentar hasta el paso 6 */
Template.mensajes.helpers({
  mensajes: Mensajes.find({}, {sort: {fecha: -1}})
});

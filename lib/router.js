Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'inicio'});
/* No descomentar hasta el paso 6 */
Router.route('/mensajes', {name: 'mensajes'});

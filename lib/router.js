Router.configure({
  layoutTemplate: 'layout'
});

Router.route('/', {name: 'inicio'});
Router.route('/mensajes', {name: 'mensajes'});

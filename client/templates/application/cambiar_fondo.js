/* No descomentar hasta el paso 4 */
Template.cabecera.events({
  'click #ladrillos': function(){
    $("body").css("background-image","url(/ladrillos.jpg)");
  },
  'click #cosasVerdes': function(){
    $("body").css("background-image","url(/cosasVerdes.jpg)");
  },
  'click #annoNuevo': function(){
    $("body").css("background-image","url(/annoNuevo.png)");
  },
  'click #madera': function(){
    $("body").css("background-image","url(/madera.jpg)");
  },
  'click #chino': function(){
    $("body").css("background-image","url(/chino.png)");
  }
});

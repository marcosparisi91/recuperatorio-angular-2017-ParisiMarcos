var routes = ($stateProvider, $urlRouterProvider) => {

  $stateProvider
    .state('tareas', {
      url: "/tareas",
      templateUrl: "partials/main_tareas.html",
      controller: "TareaController as tareaCtrl"
    })

    .state('editarTarea', {
      url: "/editarTarea/:id",
      templateUrl: "partials/editar_tarea.html",
      controller: "EditarController as editarCtrl"
    })

  $urlRouterProvider.otherwise("/tareas")

}
const app = angular.module('todoListApp', ['ui.router'])

app.service("TareaService",TareaService )
app.controller("TareaController",TareaController)
app.controller("EditarController",EditarController)
app.config(routes)

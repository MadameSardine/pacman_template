'use strict';

/* Services */
var pacmanServices = angular.module('pacmanServices',[])




pacmanServices.factory('Cell', [  function() {

  var Cell = function() {
    this.content
    this.name = "empty"
    this.isAvailable = true
    // this.changeContent = cell.changeContent

  }

  Cell.prototype.changeContent = function(obj) {
    var self = this
    if (self.isAvailable) {
      self.content = obj
      self.isAvailable = false}
  }
  return Cell
}])


pacmanServices.factory('Pacman', [  function() {

  var Pacman = function() {
    this.currentCell
    this.move = pacman.move
    this.name = 'pacman'
    this.user
  }

  Pacman.prototype.move = function(keyDirection) {
    var self = this
    var row = parseInt(self.currentCell.substring(0,self.currentCell.indexOf(':')))
    var column = parseInt(self.currentCell.substring(self.currentCell.indexOf(':') + 1,self.currentCell.length))
    
    if(keyDirection == "down" && row > 1)
    {
      self.currentCell = (row - 1).toString() + ':' + column.toString()
    }

    if(keyDirection == "up" && row < 30)
    {
      self.currentCell = (row + 1).toString() + ':' + column.toString()
    }
    if(keyDirection == "left" &&  column > 1)
    {
      self.currentCell = row.toString() + ':' + (column - 1).toString()
    }
    if(keyDirection == "right" && column < 30)
    {
      self.currentCell = row.toString() + ':' + (column + 1).toString()
    }

  }

  return Pacman

}])


pacmanServices.factory('Grid', [  function() {

  var Grid = function() {
    DEFAULT_SIZE = 900
    this.size = DEFAULT_SIZE
    this.factory = grid.factory
    this.placing = grid.placing
    this.removeContent = grid.removeContent
  }

  Grid.prototype.factory = function(object) {
    var self = this
    for(var i = 1; i < 31; i++) {
      for(var j = 1; j < 31; j++) {
        self[i + ':' + j] = new object
      }
    }
  }

  Grid.prototype.placing = function(object,position) {
    var self = this
    if (self[position].isAvailable) {
    self[position].changeContent(object)
    object.currentCell = position 
    self[position].name = object.name}
  }

  Grid.prototype.removeContent = function(Cell,position) {
    var self = this
    self[position] = new Cell
  }

  return Grid

}])















$(document).ready(function(){
  trilloModel = new Trillo();
  trilloModel.fetchCards()
  trilloView = new TrilloView(trilloModel);
});

function Shape() {
	this.positions = []
}

Shape.prototype.addPoint = function(id) {
	$("#container").append("<div class='point' id='point_" + id + "' />")
};

Shape.prototype.positionPoint = function(x, y) {
	$(".point").last().css({top: y, left: x})
};

Shape.prototype.getPointsPos = function() {
	var that = this
	$.each($(".point"), function(index, point){
		that.positions.push($(point).position())
	})
	return(this.positions)
};

Shape.prototype.generateSquare = function(positions) {
	console.log(positions)
};
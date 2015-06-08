function Shape() {
	this.positions = []
	this.width = 0
	this.height = 0
	this.hor = []
	this.vert = []
	this.top=[]
	this.left=[]
}

Shape.prototype.addPoint = function(id) {
	$("#container").append("<div class='point' id='point_" + id + "' />")
};

Shape.prototype.positionPoint = function(x, y) {
	console.log(x, y)
	$(".point").last().css({top: y, left: x})
};

Shape.prototype.getPointsPos = function() {
	var that = this
	$.each($(".point"), function(index, point){
		that.positions.push($(point).position())
	})
	return(this.positions)
};

Shape.prototype.generateSquare = function(id) {
	$("#container").append("<div class='shape' id='shape_" + id + "' />")
};

Shape.prototype.sizeSquare = function(width, height) {
	$(".shape").last().css({width: (Math.abs(width)) + "px", height: (Math.abs(height)) + "px"})
};

Shape.prototype.getSize = function(positions) {
	this.height = positions[2] - positions[0]
	this.width = positions[3] - positions[1]
	return [this.width,this.height]
};

Shape.prototype.alignSquare = function(positions) {
	var that = this
	$.each(positions, function(index, value) {
		that.top.push(value["top"])
		that.left.push(value["left"])
	})
	return [Math.min.apply(Math,this.top), Math.min.apply(Math, this.left), Math.max.apply(Math,this.top), Math.max.apply(Math,this.left)]
};

Shape.prototype.positionShape = function(positions) {
	var top = (positions[0] + positions[2])/2
	var left = (positions[1] + positions[3])/2
	$(".shape").last().css({top: top, left: left})
};

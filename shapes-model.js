function Shape() {
}

Shape.prototype.addPoint = function(id) {
	$("#container").append("<div class='point' id='point_" + id + "' />")
};

Shape.prototype.positionPoint = function(x, y) {
	$('.point').last().css({top: y, left: x})
};

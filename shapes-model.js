function Shape() {
	this.positions = []
	this.width = 0
	this.height = 0
	this.topLeft= 0
	this.topRight= 0
	this.bottomLeft= 0
	this.bottomRight= 0
}

Shape.prototype.addPoint = function(id) {
	$("#container").append("<div class='point' id='point_" + id + "' ></div>")
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

Shape.prototype.generateSquare = function(id) {
	$("#container").append("<div class='shape' id='shape_" + id + "' />")
};

Shape.prototype.sizeSquare = function(width, height) {
	console.log(height)
	$(".shape").last().css({width: (Math.abs(width)) + "px", height: (Math.abs(height)) + "px"})
};

Shape.prototype.getSize = function(positions) {
	console.log(positions)
	this.height = positions["bottomRight"]["top"] - positions["topLeft"]["top"]
	this.width = positions["topLeft"]["left"] - positions["bottomRight"]["left"]
	return [this.width,this.height]
};

Shape.prototype.alignSquare = function(positions) {
	var that = this
	$.each(positions, function(index, value) {
		if (index === 0) {
			that.topLeft = value
			that.topRight = value
			that.bottomLeft = value
			that.bottomRight = value
		} else if (value.top <= that.topLeft.top && value.left <= that.topLeft.left) {
			that.topLeft = value
		} else if (value.top <= that.topLeft.top && value.left >= that.topLeft.left) {
			that.topRight = value
		} else if (value.top >= that.topLeft.top && value.left <= that.bottomRight.left) {
			that.bottomLeft = value
		} else if (value.top >= that.topRight.top && value.left >= that.topLeft.left){
			that.bottomRight = value
		} 
	})
	console.log({"topLeft":this.topLeft, "topRight":this.topRight, "bottomLeft":this.bottomLeft, "bottomRight":this.bottomRight })
	return {"topLeft":this.topLeft, "topRight":this.topRight, "bottomLeft":this.bottomLeft, "bottomRight":this.bottomRight }
};

Shape.prototype.positionShape = function(positions) {
	$(".shape").last().css({top: positions["topLeft"]["top"], left: positions["topLeft"]["left"]})
};

// Sorry project, this is the end

Shape.prototype.deprecation = function() {
	for (i = 0; i < 100; i++) {
		$("#container").append("THIS PROJECT HAS BEEN DEPRECATED BECAUSE THE CODE CONFUSED ME  ")
	}
};


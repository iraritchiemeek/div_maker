$(document).ready(function() {

	var shape = new Shape
	var pointID = 0
	var shapeID = 0

	$(document).on("click", "#container", function(e) {
		if ($(".point").length < 4) {
			var x = e.pageX
	      	var y = e.pageY
			pointID += 1
			shape.addPoint(pointID)
			shape.positionPoint(x, y)
		} else {
			shape.deprecation()
			shapeID += 1
			var positions = shape.getPointsPos()
			var alignedPos = shape.alignSquare(positions)
			var size = shape.getSize(alignedPos)
			shape.generateSquare(shapeID)
			shape.sizeSquare(size[0], size[1])
			shape.positionShape(alignedPos)
		}
	})

})
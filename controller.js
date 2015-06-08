$(document).ready(function() {

	var shape = new Shape
	var pointID = 0

	$(document).on("click", "#container", function(e) {
		if ($(".point").length < 4) {
			var x = e.pageX
	      	var y = e.pageY
			pointID += 1

			shape.addPoint(pointID)
			shape.positionPoint(x, y)
		} else {
			// shape.getPointsPos()
			// shape.getPointsPos().then(console.log('yes'))
			shape.generateSquare(shape.getPointsPos())
		}
	})

})
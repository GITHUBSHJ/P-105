Webcam.set(
	{
		width: 500,
		height:500,
		image_format : 'png',
		png_quality:90,
	}
);

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot()
{
	Webcam.snap(function(data_uri)
	{
		document.getElementById("result").innerHTML = '<img id ="image_captured" src = "'+data_uri+'"/>';
	})
}

console.log('ml5 version', ml5.version);

classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/Oq2P3AjOA/model.json", modelLoaded);


//functions for detecting images..// 
function modelLoaded()
{
	console.log('Model Loaded yay!!!');
}

function check()
{
	img = document.getElementById("image_captured");
	classifier.classify(img, gotResult);
}

function gotResult(error, results) {
	if (error)
	{
		console.error(error);
	} else {
		console.log(results);
		document.getElementById("result_object_name").innerHTML = results[0].label;
		document.getElementById("result_object_accuracy").innerHTML = results[0].confidence.toFixed(3);
	}

}
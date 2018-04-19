var questions = [
{
	question: "Which of the following code snippets is the optimal way to print each item in array = ['dogs', 'cats', 'fish', 'turtles', 'penguins']?",
	choices: ["i = 0 \n while (true): \n print(array[i]) \n i++", 
			"i = 0 \n while (true):\n print(array[i])\ni++\nif (i > 4):\n break", 
			"for i in range 0, 5:\nprint(array[i])", 
			"for i in range 0, len(array): \nprint(array[i])"],
	correct: 1

}]

document.getElementById("question").innerHTML =questions[0].question;
var c1 =document.getElementById("C1");
var c2 = document.getElementById("C2");
var c3 = document.getElementById("C3");
var c4 = document.getElementById("C4");
var choice_boxes = [c1,c2,c3,c4];

for (i = 0; i < 4; i++){
	choice_boxes[i].innerHTML = questions[0].choices[i];

	///choice_boxes[i].onclick = function(){if i == questions[0].correct[0]
										///{choice_boxes[i].style.background-color = 'green';}
										///else{choice_boxes[i].style.background-color = 'red';}};
}

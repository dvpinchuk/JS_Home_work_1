alert("hello please open developer console and select task")
// Задание № 1
function task1 (){
	alert("Задание № 1");
	var a, b, c, d, e, f;
	a = prompt("write coordinate x1");
	b = prompt("write coordinate y1");
	c = prompt("write coordinate x2");
	d = prompt("write coordinate y2");
	e = (b - d) / (a - c);
	f = d - (e * c);
	console.log("y " + "= " + e + "x " + "+ " + f);
	console.log("-=The End=-");
}
// Задание № 2
function task2 (){
	alert("Задание № 2");
	var a, b, c;
	a = 5;
	b = 7;
	console.log("a = " + a + " b= " + b);
	c = a;
	a = b;
	b = c;
	console.log("a = " + a + " b= " + b);
	console.log("-=The End=-");
}
// Задание № 3
function task3 (){
	alert("Задание № 3");
	var admin, name = "Василий";
	admin = name;
	console.log(admin);
	console.log("-=The End=-");
}
// Задание № 4
function task4 (){
	alert("Задание № 4");
	var a, b, c;
	a = prompt("write first name");
	b = prompt("write sure name");
	c = prompt("write you age");
	console.log("you first name " + a + " " + "you sure name " + b + " " + "you age " + c);
	console.log("-=The End=-");
}
// Задание № 5
function task5 (){
	alert("Задание № 5");
	var a, b;
	a = prompt("write you age");
	b =confirm("you age " + a + "?");
	alert(b);
	console.log("-=The End=-");
}


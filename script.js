// var i,$,q,p;
// i=-0;
// for(i=0;i<10;i++){
// 	$=-i;
// }
// if(true){
// 	p="foo"
// }
// else{
// 	q="bar";
// }
//
// // let user = prompt("Enter username");
// // if(user=="admin"){
// // 	let pass = prompt("enter password");
// // 	if(pass == "12345"){
// // 		alert("enter pesmissoned");
// // 	}
// // 	else{
// // 		alert("wrong pass");
// // 	}
// // }
// // else{
// // 	alert("wrong user");
// // }
// // let a = prompt("enter a");
// // let b = prompt("enter b");
// // let c = prompt("enter c");
//
// // if( a > 2 && a < 11){
// // 	if( b >= 6 && b <= 14){
// // 		if( c < 14 || c > 90){
// // 			alert("ok");
// // 		}
// // 		else if(a > 2 && a < 11){
// // 		alert("not ok.wrong is a");
// // 		}
// // 		else if(b >= 6 && b <= 14){
// // 		alert("not ok.wrong is b");
// // 		}
// // 		else{
// // 			alert("not ok is C")
// // 		}
// // 	}
// // }
// // var array = ["aaa","bbb","ccc","dddd","aaa","aaaa","ddddd"];
// // for(i=0;i<array.length;i++){
// //	if(array.indexOf(array[i])!=i)
// // 	if(array[i].length>3){
// // 		delete array[i];
// // 	}
// // }
// // console.log(array);
// // var array = [1,2,3,4,5];
// // for(i=1;i<array.length;i++){
// // 	array[i] = array[i] + array[i-1];
// // }
// // console.log(array);
// // var first_arr=[1,2,3,4,5]
// // var second_arr=[2,3,4]
// // var result_arr=[]
// // for(i=0;i<first_arr.length;i++){
// // 	if(second_arr[i]== undefined ){
// // 		second_arr[i]=0;
// // 	}
// // 	result_arr.push(first_arr[i]+second_arr[i])
// // }
// // console.log(result_arr)
// var person1={
// 	name:"Alex",
// 	age:28,
// 	career:"teacher",
// 	hobbies:"guitar"
// }
// var person2={
// 	name:"kiriLL",
// 	age:30,
// 	city:"kharkov",
// 	sex:"male",
// 	hobbies:"table games"
// }
// // for(key in person2){
// // 	if(person2.key == person1.key){
// // 		person2.key = person1[key]
// // 	}
// // 	if(person2.noSuchProperty === person1.key){
// // 		person2.key = person1[key];
// // 	}
// // 	console.log(person2.key)
// // }
// // console.log(person2)
// // Object.assign(person2,person1);
// // console.log(person2)
//
// // for(let key in person1){
// // 	if(!(key in person2)) {
// // delete person1.key
// // 	}
//
// // 	console.log(person1.key)
// // }
// // console.log(person1);
//
//
// function summ(multiplyer,...rest){
// 	let result = 0;
// 	for (i=0;i<rest.length;i++){
// 		result =result + rest[i]
// 	}
// 	result = result*multiplyer
// 	return result;
// }
// summ(2,2,2,2)
//
// const readers = [{name:"Anna",books:["bible","harry potter"],age:21},
// {name:"bob",books:["war and peace","romeo and juliet"],age:26},
// {name:"alice",books:["the lord of the rings","the shining"],age:18}
// ];
// function get_books(readers){
// 	let books = ""
// 	for(i=0;i<readers.length;i++){
// 		books = books + "" + readers[i].books + "";
// 	}
// 	return books;
// }
// get_books(readers);
//
// function get_array(...arrays){
// 	let result =  [];
// 	for(i=0;i<arrays.length;i++){
// 		for(j=0;j<arrays[i].legth;j++){
// 			// if(arrays[i] != arrays[i+1][j] && arrays[i][j] != arrays[i+2][j]){
// 			// 	result.push(arrays[i][j])
// 			// }
// 			if(!(arrays[i].includes(arrays[i+1][j]) && arrays[i].includes(arrays[i+2][j]))){
// 				result.push(arrays[i][j])
// 			}
// 			// if(!(arrays.lastIndexOf(arrays[i][j])!=i)){
// 			// 	//delete arrays[i][j]
// 			// 	result.push(arrays[i][j])
// 			// }
// 			// if(!(arrays.includes(arrays[i][j]))){
// 			// 	result.push(arrays[i][j]);
// 			// }
// 			// if ((!arrays.contains(arrays[i][j]))) {
//    //    			result.push(arrays[i][j]);
//    // 			}
//
// 		}
//
// 	}
// 	return result
// }
// get_array([1,2,3],[2,3,4],[3,4,5]);
//
// let arr = [5,10,18,46,24,76,51,87,45,21]
// let result = arr.filter((elem)=>{
// 	return arr.indexOf(elem,2) % 2 == 0 && elem % 2 == 0
// })
// console.log(arr)
// console.log(result)
// let sorted = arr.sort((a,b)=> b - a)
// console.log(sorted)
// let mixed = arr.sort((a,b)=>{
//
// })
// console.log(mixed);
//
// try{
// try{
// 	throw new Error("oops");
// }
// finally {
// 	console.log("finl");
// }
// }catch(e){
// 	console.log("outer" , e.message);
// }
//
// try{
// 	console.log("1")
// 	try{
// 		console.log("2");
// 		throw new Eror(888, 'my eror')
// 	}
// 	catch(e){
// 		console.log('3' + e.message)
// 		throw e
// 	}
// 	finally{
// 		console.log('4')
// 	}
// }
// catch(e){
// 	console.log('5' , +e.message)
// }
// finally{
// 	console.log('6')
// }
//
//
// class foot_player{
// 	constructor(surname,name){
// 		this.surname = surname;
// 		this.name = name;
// 		this.skill = Math.random()*100;
// 		this.skill.toFixed(2)
// 	}
// }
// class  team extends foot_player{
// 	constructor(team_name,players_list){
// 		super();
// 		this.team_name = team_name
// 		this.players_list = players_list
// 		this.players_skills = []
// 	};
// 	 add_player = (name,surname,skill) =>{
// 		this.name = name
// 		this.surname = surname
// 		this.skill = skill
// 		this.players_skills +=this.skill
// 	}
// }
// class game extends team{
// 	constructor(first_team,second_team){
// 		super()
// 		this.one = first_team
// 		this.two = second_team
// 	}
// 	 game_result = () =>{
// 		if(this.one.players_skills/this.two.players_skills * 10 <= 10){
// 			console.log('nichiya')
// 		}
// 		if(this.one.players_skills>this.two.players_skills){
// 			console.log('first team won')
// 		}
// 		else{
// 			console.log('second team won')
// 		}
// 	}
// }
// var ron  = new foot_player("ron" , "ch")
// console.log(ron)
// var ars = new team ("ars" , "ron")
// console.log(ars)
// ars.add_player("chris" , "ron " , "64")
// console.log(ars)
// var bar =  new team ("bar" , "mes" ,)
// bar.add_player("ch" , "mes" , "20")
// console.log(bar)
// var match = new game ("ars","bar")
// match.game_result



//script

// document.addEventListener('DOMContentLoaded',function(){
// 	let allevents = document.getElementsByTagName('*');
// 	for(var i=0;i<allevents.length;i++){
// 		allevents[i].addEventListener('click',function(){
// 			console.log(this.tagName);
// 		},false);
// 	};
// 	document.addEventListener('click', function(){console.log(this);},true);
// 	window.addEventListener('click',function(){console.log(this);},false);
// });


var table = document.querySelector('#table')
var button = document.querySelector('#btn')

function createtable(){
	let body = document.querySelector('body')
	table.innerText =""
	var row = document.getElementById('row').value
	var col = document.getElementById('col').value
	var reg = /\D\0?/
	if(reg.test(row) || reg.test(col)){
		let text = document.createElement('div')
		text.innerText = "Eror unreadable element"
		body.appendChild(text);
	}
	for(let i=0;i<col;i++){
		let column = document.createElement("tr")
		for(let j = 0;j<row;j++){
			let rows = document.createElement("td")
			column.appendChild(rows)
		}
		table.appendChild(column)
	}
}

function countcells(){
	let tr = document.getElementsByTagName('tr')
	for(i=0;i<tr.length;i++){
		let td = tr[i].getElementsByTagName('td')
		for(j=0;j<td.length;j++){
			let text = document.createElement('div')
			text.innerText = `${i+1}${j+1}`
			td[j].appendChild(text)
		}
	}

}

button.addEventListener('click',createtable)
button.addEventListener('click',countcells)

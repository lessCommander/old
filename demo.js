/*
var box={
	name: 'Lee',
	age: 10,
	color: 'red',
	width: 55
};



for (var x in box){
	document.write('<p>' + box[x] + '</p>');
};

//日期
var box1=new Date();
document.write(box1 + '<br />');

//正则
var pattern=new RegExp('box','i');
var str='boX'
document.write(pattern.test(str) + '<br />');
document.write(typeof /BOx/i.test('box') + '<br />');
document.write(/BOx/i.exec('boX') + '<br />' + '<br />');

var p=/Box/ig;
var str='This is  boX! That is a box!'
document.write(str.match(p)[0] + '<br />');
document.write(str.search(p) + '<br />' + '<br />');

//Function函数

var js = function(num1){
	if (num1==1){
		return num1;
	}else{
		return num1 + arguments.callee(num1 - 1);
	}
}

document.write(js(100) + '<br />' + '<br />');

function createCat(color,age){		//工厂模式
	var obj = new Object();
	obj.color = color;
	obj.age = age;
	obj.run = function(){
		return "This cat's color is " + this.color + ". It has been " + this.age + " years old.";
	};
	return obj;
}

var cat1 = new createCat('black',2);
document.write('<p>' + cat1.run() + '</p>');


function CreateNewCat(size,age){	//构造函数
	this.size = size;
	this.age = age;
	this.run = function(){
		return "This is a " + this.size + " cat. It has been " + this.age + " years old.";
	};
}

var cat2 = new CreateNewCat('small',1)
document.write('<p>' + cat2.run() + '</p>');
*/

function CreateDog(){};			//原型对象
CreateDog.prototype.name = 'hy';
CreateDog.prototype.run = function(){
	return this.name + '狗奔跑中……';
};

var dog1 = new CreateDog()
document.write('<p>' + dog1.__proto__ + '</p>');



/*
function CreateDog(name){		//构造函数+原型
	this.name = name;

	if (typeof this.run != 'function'){			//原型在new时自动会运行一次
		//alert(typeof this.run);
		CreateDog.prototype.run = function(){
			return this.name + '狗奔跑中……';
		};
		//alert(typeof this.run);
	}
}

var dog1 = new CreateDog('hy');
document.write('<p>' + dog1.run() + '</p>');

var dog2 = new CreateDog('lj');
document.write('<p>' + dog2.run() + '</p>');

*/




















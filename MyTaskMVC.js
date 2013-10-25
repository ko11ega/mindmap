/**
 * User: kollega
 * Date: 23.10.13
 * Time: 16:32
 * To change this template use File | Settings | File Templates.
 */
var Task = (function(){  //Базовый объект - Задача
    var path1=   "1";        // Путь до задачи в дереве формата MaterializedPath
    var level1 =  1;          // Уровень элемента в дереве
    var name1 =   "Test";     // Описание задачи
    var pathArray1 = ["1"];   // Путь до задачи в виде элементов массива

    var innerCreateTask = function(path, name) {
        var tmpArr =[];
        var p= path+"";
        this.path =path;
        this.name =name;
        tmpArr = p.split("."); //Разбиваем строку в массив значений
        return {path: p, name: name, level: tmpArr.length, pathArray: tmpArr };
    };
    return { innerCreateTask() };
    }
)();

function Calculator() {
    this.calculate = function (in1) {
        var tmpArr = [];
        tmpArr = in1.split(" ");
        alert(tmpArr);
        switch (tmpArr[1]) {
            case "+":
                return +tmpArr[0] + (+tmpArr[2])
                break
            case "-":
                return (+tmpArr[0] - (+tmpArr[2]))
                break
            default:
                return this[tmpArr[1]](tmpArr[0],tmpArr[2])
        };
    };
    this.addMethod = function (operation, func){
        this[operation] = func;
    };
};


var calc = new Calculator;

alert(calc.calculate("30 - 17")); // 10

var powerCalc = new Calculator;
powerCalc.addMethod("*", function (a, b) {
    return a * b;
});
powerCalc.addMethod("/", function (a, b) {
    return a / b;
});
powerCalc.addMethod("**", function (a, b) {
    return Math.pow(a, b);
});

var result = powerCalc.calculate("2 ** 3");
alert(result); // 8


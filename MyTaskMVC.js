/**
 * User: kollega
 * Date: 23.10.13
 * Time: 16:32
 * To change this template use File | Settings | File Templates.
 */
var Task = (function(){  //Базовый объект - Задача
    var path=   "1";        // Путь до задачи в дереве формата MaterializedPath
    var level =  1;          // Уровень элемента в дереве
    var name =   "Test";     // Описание задачи
    var pathArray = ["1"];   // Путь до задачи в виде элементов массива

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
)
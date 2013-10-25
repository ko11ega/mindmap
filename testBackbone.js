/**
 * User: kollega
 * Date: 15.10.13
 * Time: 16:05
 * To change this template use File | Settings | File Templates.
 */
var Task = Backbone.Model.extend({  //Базовый объект - Задача
    defaults: {// Свойства экземпляра
    path:   "1",        // Путь до задачи в дереве формата MaterializedPath
    level:  1,          // Уровень элемента в дереве
    name:   "Test",     // Описание задачи
    pathArray: ["1"]},      // Путь до задачи в виде элементов массива

    initialize: function(attr) {
        var tmpArr =[];
        var p= attr.path+"";
                tmpArr = p.split("."); //Разбиваем строку в массив значений

        this.set({path: p, name: attr.name, level: tmpArr.length, pathArray: tmpArr });

    }

    });

var TasksTT = Backbone.Collection.extend({ //Задачи одного ТТ
    model: Task,
    initialize: function()
    {
        //this.add({path: "1", name: "Root"});
        //this.length = 1;
        //this.name = "Initialized"
    },

    addTask: function(parentPath, newName)  { //Добавляет новую дочернюю подзадачу к задаче parentPath
        var maxMinorNumber = "0";
        var newPath = "0";
        var tmpArr =[];

<<<<<<< HEAD


        for (var i = 0; i < this.length; i++) {
            if (((this.models[i].get("path")).indexOf(parentPath) == 0) &&
                (((this.models[i].get("path")).split(".")).length - parentPath.split(".").length  == 1) &&
                (this.models[i].get("path") > maxMinorNumber)
                ){  //  Ищем все дочерние элементы parentPath. При помощи split расщепляем строку на массив из строк, разделитель "."
                maxMinorNumber = (this.models[i].get("path"));
=======
        for (var i = 0; i < this.length; i++) {
            if ((this.models[i].path.indexOf(parentPath) == 0) &&
                (this.models[i].path.split(".").length - parentPath.split(".").length  == 1) &&
                (this.models[i].path > maxMinorNumber) ){  //  Ищем все дочерние элементы parentPath. При помощи split расщепляем строку на массив из строк, разделитель "."
                maxMinorNumber = this.models[i].path;
>>>>>>> c95b6f929914913aed8be4efe43f9adf68914f86
            };

            console.log(i+ " : " + this.models[i].path + " : " +  maxMinorNumber);
        }
        if (maxMinorNumber-0 > 0){ //Если нашлись потомки
        tmpArr = maxMinorNumber.split("."); //Разбиваем строку в массив значений
        tmpArr[tmpArr.length-1] = (+tmpArr[tmpArr.length-1] +1).toString(); //Номер новой задачи на 1 больше чем у дочерней задаче parentPath с максимальным номером(maxMinorNumber)
        newPath=tmpArr.join("."); //Собираем массив в строку
        } else { //Если потомков нет
            newPath = parentPath + ".1";
        }
        this.add({path: newPath, name: newName});
    }
});







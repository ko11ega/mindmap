/**
 * User: Toshiba
 * Date: 03.11.13
 * Time: 23:13
 * To change this template use File | Settings | File Templates.
 */


var TreeOfTasks = [
    { path: "1", name: "Test" },
    { path: "1.1", name: "Test 1.1" },
    { path: "1.1.1", name: "1.1.1" },
    { path: "1.1.2", name: "1.1.2" },
    { path: "1.2", name: "1.2" },
    { path: "1.3", name: "1.3м" },
    { path: "1.8.1", name: "1.8.1" },
    { path: "1.8.3", name: "1.8.3" }];

TreeOfTasks.addTask = function(task){        //Добавляет новую дочернюю подзадачу к задаче task.parentPath  в массиве TreeOfTasks
    var maxMinorNumber = "0";
    var tmpArr =[];
    var newPath="";

    for (var i = 0; i < this.length; i++) {
        if (( this[i].path.indexOf(task.parentPath) == 0) &&
        (this[i].path.split(".").length - task.parentPath.split(".").length  == 1) &&
        (this[i].path > maxMinorNumber) ){  //  Ищем все дочерние элементы parentPath. При помощи split расщепляем строку на массив из строк, разделитель "."
            maxMinorNumber = this[i].path;
        };
        console.log(i+ " : " + this[i].path + " : " +  maxMinorNumber);
        }
    tmpArr = maxMinorNumber.split("."); //Разбиваем строку в массив значений
    tmpArr[tmpArr.length-1] = (+tmpArr[tmpArr.length-1] +1).toString(); //Номер новой задачи на 1 больше чем у дочерней задаче parentPath с максимальным номером(maxMinorNumber)
    newPath=tmpArr.join("."); //Собираем массив в строку
    this.push({path: newPath, name: task.newName});
};
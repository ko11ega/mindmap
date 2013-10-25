/**
 * Created with JetBrains WebStorm.
 * User: kollega
 * Date: 08.10.13
 * Time: 18:32
 * To change this template use File | Settings | File Templates.
 */
//схема структуры базы данных
var mindmap_store_schema = { //схема базы данных
    name: "mindmap_db1",  //название таблицы
    keyPath: 'id', // ключ по которому мы будем искать данные,
    autoIncrement: false
};

var schema = { //все схемы таблиц
    stores: [mindmap_store_schema]
};

/*
var task = { //описываем атрибуты задачи на примере
    "1": { ttId: 1, path: "1", name: "Test" },
    "2": { ttId: 1, path: "1.2", name: "Изучим" }
};

var tasks = [
    { path: "1", name: "Test" },
    { path: "1.1", name: "Изучим" },
    { path: "1.1.2", name: "Изучим" },
    { path: "1.2", name: "Изучим" },
    { path: "1.3", name: "Изучим" },
    { path: "1.8.1", name: "Изучим" },
    { path: "1.8.3", name: "Изучим" },
];

function addTask(parentPath, newName)  { //Добавляет новую дочернюю подзадачу к задаче parentPath
    var maxMinorNumber = "0";
    var tmpArr =[];

    for (var i = 0; i < tasks.length; i++) {
        if (( tasks[i].path.indexOf(parentPath) == 0) &&
            (tasks[i].path.split(".").length - parentPath.split(".").length  == 1) &&
            (tasks[i].path > maxMinorNumber) ){  //  Ищем все дочерние элементы parentPath. При помощи split расщепляем строку на массив из строк, разделитель "."
            maxMinorNumber = tasks[i].path;
        };

        console.log(i+ " : " + tasks[i].path + " : " +  maxMinorNumber);
    }
    tmpArr = maxMinorNumber.split("."); //Разбиваем строку в массив значений
    tmpArr[tmpArr.length-1] = (+tmpArr[tmpArr.length-1] +1).toString(); //Номер новой задачи на 1 больше чем у дочерней задаче parentPath с максимальным номером(maxMinorNumber)
    newPath=tmpArr.join("."); //Собираем массив в строку
    tasks.push({path: newPath, name: newName});
}; */


if( navigator.userAgent.toLowerCase().indexOf("android") !=-1 ) {
    var options = {mechanisms: ['websql', 'indexeddb']};  //предпочитать websql в андроид
} else {
    var options = {}; //предпочитать indexeddb он быстрый и асинхронный), а потом уже все остальные
}

db1 = new ydn.db.Storage('_all_mindmap', schema, options); //инициализируем базу данных браузера в глобальную переменную db1


///////////////////////запускается после загрузки html страницы////////////////////////

jQuery(function($){
    var t = new Task({path : "1.1", name: "First"});
    var t1 = new Task({});
    var b= new TasksTT;
    b.add({path: "1", name: "Root"});
    b.add({path: "1.1", name: "R2", level: 2, pathArray : ["1", ".", "1"]});
    b.addTask("1","New");
    console.info(JSON.stringify(b.models[0]));
    console.info(JSON.stringify(b.models[1]));
    console.info(JSON.stringify(b.models[2]));
})


/*function jsDoFirst() {
    console.info("Все загрузилось"+ Backbone.toString()); //выводим в консоль браузера
    console.info(tasks[3].path.split("."));
    addTask("1.8", "NewTask");
};

function onResize() {
    var i = 1;
    //console.info(i++);
    //console.info("OnResize"); //выводим в консоль браузера
    //console.info(task[i].path + " - " + task[i].name); //выводим в консоль браузера
    //document.write(onResize.toString());
    //addTask("1.1.2", "NewTask");

} */
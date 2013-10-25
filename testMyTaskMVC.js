/**
 * User: kollega
 * Date: 23.10.13
 * Time: 17:13
 * To change this template use File | Settings | File Templates.
 */
///////////////////////запускается после загрузки html страницы////////////////////////

jQuery(function($){
    var testTask = new Task();
    var testTask1 = new Task("1.1", "Task1");

    console.info(JSON.stringify(testTask));
    console.info(JSON.stringify(testTask1));

})
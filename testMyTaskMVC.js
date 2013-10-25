/**
 * User: kollega
 * Date: 23.10.13
 * Time: 17:13
 * To change this template use File | Settings | File Templates.
 */
///////////////////////запускается после загрузки html страницы////////////////////////

jQuery(function($){


    console.info(JSON.stringify(TreeOfTasks));
    TreeOfTasks.addTask({parentPath:"1.1", newName:"Task1"});
    console.info(JSON.stringify(TreeOfTasks));

})
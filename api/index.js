//                       _oo0oo_
//                      o8888888o
//                      88" . "88
//                      (| -_- |)
//                      0\  =  /0
//                    ___/`---'\___
//                  .' \\|     |// '.
//                 / \\|||  :  |||// \
//                / _||||| -:- |||||- \
//               |   | \\\  -  /// |   |
//               | \_|  ''\---/''  |_/ |
//               \  .-\__  '-'  ___/-. /
//             ___'. .'  /--.--\  `. .'___
//          ."" '<  `.___\_<|>_/___.' >' "".
//         | | :  `- \`.;`\ _ /`;.`/ - ` : | |
//         \  \ `_.   \_ __\ /__ _/   .-` /  /
//     =====`-.____`.___ \_____/___.-`___.-'=====
//                       `=---='
//     ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
const server = require('./src/app.js');
<<<<<<< HEAD
const { conn, Products} = require('./src/db.js');
const { showAllCategory } = require('./src/methods/showAllCategory.js')
const { showAll } = require('./src/methods/showAll.js')
=======
const { conn, Product} = require('./src/db.js');
const {showAll} = require('./src/methods/index.js')
>>>>>>> 3e9fc2bc09754e816791f6f68a0e8845e2edc823

// Syncing all the models at once.
conn.sync({ force: true }).then(() => {
  server.listen(process.env.PORT || 3001 , async () => {
    console.log('%s listening at 3001'); // 
    await showAllCategory();
    await showAll();
  });
});

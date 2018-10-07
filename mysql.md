// 使用 NPM
$ npm install --save sequelize

# 还有以下之一:
$ npm install --save pg pg-hstore
$ npm install --save mysql2
$ npm install --save sqlite3
$ npm install --save tedious // MSSQL

// 使用 Yarn
$ yarn add sequelize

# 还有以下之一:
$ yarn add pg pg-hstore
$ yarn add mysql2
$ yarn add sqlite3
$ yarn add tedious // MSSQL

全局安装sequelize-auto命令：
    打开cmd，输入 npm install -g sequelize-auto

自动生成models
sequelize-auto -h 192.168.31.142 -d newdb -u root -x 123456 -p 3306 -t zh_user -e mysql
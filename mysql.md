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
sequelize-auto -h 192.168.31.142 -d newdb -u root -x 123456 -p 3306 -t zh_user -e mysql --camel --camel-file-name --output src

  -h, --host             IP/Hostname for the database.                [required]
  -d, --database         Database name.                               [required]
  -u, --user             Username for database.
  -x, --pass             Password for database.
  -p, --port             Port number for database.
  -c, --config           JSON file for Sequelize's constructor "options" flag
                         object as defined here: https://sequelize.readthedocs.org/en/latest/api/sequelize/
  -o, --output           What directory to place the models.
  -e, --dialect          The dialect/engine that you're using: postgres, mysql,
                         sqlite, mssql
  -a, --additional       Path to a json file containing model definitions (for all tables) which are to be defined within a model's configuration parameter. 
                         For more info: https://sequelize.readthedocs.org/en/latest/docs/models-definition/#configuration
  -t, --tables           Comma-separated names of tables to import
  -T, --skip-tables      Comma-separated names of tables to skip
  -C, --camel            Use camel case to name models and fields
  -n, --no-write         Prevent writing the models to disk.
  -s, --schema           Database schema from which to retrieve tables
  -z, --typescript       Output models as typescript with a definitions file
  -f, --camel-file-name  Use camel case for file name
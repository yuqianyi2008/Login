# Login

### 增

`INSERT INTO 表名(字段一,字段二...) VALUES(值一,值二…)`

#### 插入多条数据

` ``*INSERT INTO user1(name,age,sex) VALUES("老鞠","18","男"),("老丁","16","女")`

### 删

删除表中所有数据,但是不删除表格

`  DELETE FROM user1`

DELETE FROM 表名  WHERE 条件

同时满足两个条件用AND连接条件

`  DELETE FROM user WHERE id=1`

###  改

UPDATE 表名 SET 字段1=值1,字段2=值2 WHERE 条件

` UPDATE user1 SET name="方姐",age=18 WHERE id=5`

`查找所有数据`

` ``* SELECT * FROM 表名`

### 查

` ``* SELECT * FROM user1 WHERE age!=18`

` ``* SELECT * FROM user1 WHERE age<>18`

模糊查询

 %代表零个或多个字符

查找表中name的值  以老字开头

`  SELECT * FROM `user1` WHERE name like "%老"`

只要有老都查出来

` ``* SELECT * FROM `user1` WHERE name like "%老%"`

按照年龄降序排列(不加DESC(降序)就是默认的升序(ASC))

` SELECT * FROM user1 ORDER BY AGE DESC`

 按拼音升序排列

` SELECT * FROM user1 ORDER BY CONVERT(name using gbk)`

查找表中所有name age字段

` SELECT name,age FROM user1`

从表的第2条开始查,查3条

从0开始数

` SELECT * FROM `user1` LIMIT 2,3`
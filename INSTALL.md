# Prerequisite

1. Node.js(>0.10)

2. MongoDB (>3.0)


# Install

1. Download package

```
git clone  git@gitlab.com:sam.co.ltd/NodeBB.git

```

2. Install Modules
```
cd NodeBB && npm install
```

3. Create MongoDB Database User

   example:

```
HollydeMacBook-Pro:Downloads holly$ mongo
MongoDB shell version: 3.2.4
connecting to: test
Server has startup warnings:
2016-03-24T16:28:55.277+0800 I CONTROL  [initandlisten]
2016-03-24T16:28:55.277+0800 I CONTROL  [initandlisten] ** WARNING: soft rlimits too low. Number of files is 256, should be at least 1000
> use nodebb
switched to db nodebb
> db.createUser( { user: "nodebb", pwd: "nodebb123", roles: [ "readWrite" ] } )
Successfully added user: { "user" : "nodebb", "roles" : [ "readWrite" ] }

```

4. Setup



```
./nodebb setup
```

按步骤设置相关参数

访问控制台输出的网址,加入/admin ,登陆后台,注意设置修改以下内容:
* 设置语言为简体中文  General => Languages => Language Setting
* 手动设置板块名字以及说明 翻译为中文  Manage => Categories
* 设置网站标题 说明 图标等  Settings => General
* 设置修改页脚HTML  Extend => Widgets => Global Footer
* 发表帖子奖励规则策略等设置  Extend => Rewards

5.后期可能工作(二次开发)
* 添加分享组件  General => Social 可以考虑直接引入第三方分享组件 或搜索NodeBB社交分享插件

# Reference

* [NodeBB Official Introduce](https://docs.nodebb.org/en/latest/index.html)

* [NodeBB Official Community](https://community.nodebb.org/)
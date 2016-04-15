# NodeBB Install Guide

## Prerequisite

1. Node.js(>0.10)

2. MongoDB (>3.0)


## Install

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
* 手动修改config.json 文件,添加site ,reqSmsUrl ,signinUrl ,const_pwd,holeSite,creditUrl等参数
* 访问控制台输出的网址,加入/admin ,登陆后台,注意设置修改以下内容:
* 设置语言为简体中文  General => Languages => Language Setting
* 手动设置板块名字图标以及说明 翻译为中文  Manage => Categories
* 设置网站标题 说明 图标等  Settings => General
* 设置修改页脚HTML  Extend => Widgets => Global Footer
* 发表帖子奖励规则策略等设置  Extend => Rewards
* 隐藏注册按钮 Settings =>Users => Authentication =>Registration Type   修改为No Registration
* 设置用户Session保存时间 Settings => Users =>Account Protection =>Days to remember user login sessions =>30
* 设置Head Navigation Background Image,Apperence => Custome HTML & CSS

````
/**设置导航条背景和高度*/
body > main> nav{
    background-image: url('/images/community-banner@2x.png');
    background-size: contain;
    height: 100px;
}
````

````
/**设置发表主题时话题框大小*/
div.tags-container > div.bootstrap-tagsinput > input.ui-autocomplete-input {
     width :300px;
}
````

Enable Custome CSS

5.后期可能工作(二次开发)
* 添加分享组件  General => Social 可以考虑直接引入第三方分享组件 或搜索NodeBB社交分享插件

## Plugin

1. 自己开发的插件
    * nodebb-plugin-auth-overridelogin 登录逻辑重写
    * nodebb-plugin-essence  帖子加精
    * nodebb-theme-persona-v1 主题的登录页面修改
    * nodebb-plugin-freebacking 积分逻辑


2. 需要使用的第三方开发的插件
    * nodebb-plugin-question-and-answer
    * nodebb-plugin-recent-cards
    * nodebb-plugin-qn


## Reference

* [NodeBB Official Introduce](https://docs.nodebb.org/en/latest/index.html)

* [NodeBB Official Community](https://community.nodebb.org/)
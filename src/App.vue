<!--
 * @Author: 米叔 849299509@qq.com
 * @Date: 2022-12-09 08:36:25
 * @LastEditors: 米叔 849299509@qq.com
 * @LastEditTime: 2022-12-10 17:40:34
 * @FilePath: \leaf\src\App.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 米叔 849299509@qq.com, All Rights Reserved. 
-->
<template>
  <div class="common-layout">
    <el-container>
      <el-header class="main">
        <el-row class="row-bg" justify="center">
          
          <el-col :span="5" >
            🍃🍃落叶信息管理
          </el-col>
          <el-col :span="2">
            <!-- 路由进入 -->
            <router-link active-class="active" to="/">main</router-link> 
          </el-col>
          <el-col  :span="2">
            <!-- 路由进入 -->
            <router-link active-class="active" to="/login">登录</router-link>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row justify="center" >
          <el-col :span="20"><div class="grid-content ep-bg-purple" />
            <!-- 渲染位置 -->
            <router-view/>
          </el-col>
        </el-row>
      </el-main>
    </el-container>
  </div>
</template>
<style >
  *{
    padding: 0;
    margin: 0;
  }
  a{
    text-decoration: none;
    color:   #a0cfff;
  }
  .active{
    color:  #2075cf;
  }
  .main{
    background-color:    #d9ecff;
    height: 30px !important;
  }
</style>
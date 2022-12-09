<template>
  <div class="common-layout">
    <el-container>
      <el-header class="main">
        <el-row class="row-bg" justify="center">
          <el-col :span="2">
            <router-link active-class="active" to="/">main</router-link> 
          </el-col>
          <el-col  :span="2">
            <router-link active-class="active" to="/login">登录</router-link>
          </el-col>
        </el-row>
      </el-header>
      <el-main>
        <el-row justify="center" >
          <el-col :span="20"><div class="grid-content ep-bg-purple" />
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
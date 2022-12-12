<!--
 * @Author: 米叔 849299509@qq.com
 * @Date: 2022-12-09 10:21:55
 * @LastEditors: 米叔 849299509@qq.com
 * @LastEditTime: 2022-12-11 16:08:28
 * @FilePath: \leaf\src\views\MainView.vue
 * @Description: 
 * 
 * Copyright (c) 2022 by 米叔 849299509@qq.com, All Rights Reserved. 
-->

<template>
  <!-- 修改 -->
  <el-dialog
    v-model="dialogVisible"
    title="Edit"
    width="30%"
    @close="handleClose"

  >
  <el-input v-model="part.name" placeholder="Please input">
    <template #prepend>name</template>
  </el-input>
  <el-input v-model.number="part.Telephone" placeholder="Please input">
    <template #prepend>Telephone</template>
  </el-input>
  <el-input v-model="part.address" placeholder="Please input">
    <template #prepend>address</template>
  </el-input>
  <el-input v-model="part.date" placeholder="Please input">
    <template #prepend>date</template>
  </el-input>
  <el-input v-model="part.motto" placeholder="Please input">
    <template #prepend>motto</template>
  </el-input>
  <h3>Friends</h3>
  <el-table :data="part.friends" border="true">
    <el-table-column label="Name" prop="name" />
    <el-table-column label="Address" prop="address" />
    <el-table-column label="Telephone" prop="Telephone" />
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button
          size="small"
          type="danger"
          @click="friendshandleDelete(scope.$index)"
          >Delete</el-button
        >
      </template>
    </el-table-column>
  </el-table>
  <el-row justify="center">
    <el-col :span="8">
      <el-input v-model="name" placeholder="name"/>
    </el-col>
    <el-col :span="8">
      <el-input v-model="address" placeholder="address"/>
    </el-col>
    <el-col :span="8">
      <el-input v-model.number="Telephone" placeholder="Telephone"/>
    </el-col>
  </el-row>
  <el-button class="mt-4" style="width: 100%" @click="onAddItem">Add Friend</el-button>
    <template #footer>
      <span class="dialog-footer">
        <el-button   @click="dialogVisible = false">返回</el-button>
        <el-button type="primary" @click="put">
          确定
        </el-button>
      </span>
    </template>
  
  </el-dialog>
  <!-- 添加 -->
  <el-dialog
  v-model="adddialogVisible"
  title="Collect"
  width="30%"
  @close="handleClose"

>
<el-input  v-model="part.name" >
  <template #prepend>name</template>
</el-input>
<el-input v-model.number="part.Telephone">
  <template #prepend>Telephone</template>
</el-input>
<el-input v-model="part.address">
  <template #prepend>address</template>
</el-input>
<el-input  v-model="part.motto">
  <template #prepend>motto</template>
</el-input>
<el-input type="date" v-model="part.date">
  <template #prepend>date</template>
</el-input>


<h3>Friends</h3>
  <el-table :data="friends" border="true">
    <el-table-column label="Name" prop="name" />
    <el-table-column label="Address" prop="address" />
    <el-table-column label="Telephone" prop="Telephone" />
  </el-table>
  <el-row justify="center">
    <el-col :span="8">
      <el-input v-model="name" placeholder="name"/>
    </el-col>
    <el-col :span="8">
      <el-input v-model="address" placeholder="address"/>
    </el-col>
    <el-col :span="8">
      <el-input v-model.number="Telephone" placeholder="Telephone"/>
    </el-col>
  </el-row>
  <el-button class="mt-4" style="width: 100%" @click="addonAddItem">Add Friend</el-button>
  
  <template #footer>
    <span class="dialog-footer">
      <el-button   @click="adddialogVisible = false">返回</el-button>
      <el-button type="primary" @click="add">
        确定
      </el-button>
    </span>
  </template>
</el-dialog>
<!-- 添加 -->
  <el-button type="primary" @click="adddialogVisible = true">搜集</el-button> <el-divider direction="vertical" /> 风中，落叶旋转，久久不肯落地，似乎不明白自己过早凋零的生命为何会在夏末初秋是就走想完结。
  <el-button style="float:right;" @click="loginOut">退出登录</el-button>
  <!-- 数据到渲染表格中 -->
  <el-table :data="copyTable" border="true" style="width: 100%">
    <el-table-column type="expand">
      <template #default="props">
        <div>
          <el-row >
            <el-col :span="12">
              <h1><el-tag  type="success">name</el-tag> {{ props.row.name }}</h1>
            </el-col>
            <el-col :span="12">
              <el-tag type="info">Telephone</el-tag>{{ props.row.Telephone }}
            </el-col>
            <el-col :span="12">
              <el-tag type="warning">Address</el-tag>{{ props.row.address }}
            </el-col>
            <el-col :span="12">
              <el-tag type="danger">date</el-tag> {{ props.row.date }}
            </el-col>
          </el-row>
          <el-divider border-style="dashed" />
          <el-row >
            <el-col >
              <el-tag>墓志铭</el-tag>
              <el-divider direction="vertical" /> 
              <span>{{props.row.motto}}</span>
            </el-col>
          </el-row>
          <el-divider border-style="dashed" /> 
          <h3>Friends</h3>
          <el-table :data="props.row.friends" border="true">
            <el-table-column label="Name" prop="name" />
            <el-table-column label="Address" prop="address" />
            <el-table-column label="Telephone" prop="Telephone" />
          </el-table>
        </div>
      </template>
    </el-table-column>
    <el-table-column prop="id" label="ID" width="50px"/>
    <el-table-column prop="name" label="名字" width="100px"/>
    <el-table-column prop="Telephone" label="电话" />
    <el-table-column prop="address" label="凋零地址" />
    <el-table-column prop="date" label="凋零日期" />
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button size="small"  @click="handleEdit(scope.row)">Edit</el-button>
        <el-button
          size="small"
          type="danger"
          @click="handleDelete(scope.row)"
          >Delete</el-button>
          <el-button @click="goDetail(scope.row)" size="small" type="success">Detail</el-button>
      </template>
    </el-table-column>
  </el-table>
  <!-- 简易分页 -->
  <el-pagination background layout="prev, pager, next"
  @current-change="handleCurrentChange" 
  @next-click="ppage(1)" @prev-click="ppage(-1)"
  :total="totle" />
</template>

<script>
import axios from 'axios'
import {onMounted, reactive , toRefs }  from 'vue'
import router from '../router/index'
export default {
  setup(){
    const vue = reactive({
        tableData:[],
        copyTable:[],
        // 数据总数
        totle:0,
        // 当前页数
        page :1,
        // 模态框的显示与否
        dialogVisible:false,
        adddialogVisible:false,
        // 放入模态框的信息
        part:[],
        // 朋友信息
        friends:[],
        // 
        name: '',
        address: '',
        Telephone: 0,
    }) 
    // 页数发生变化调用
    const handleCurrentChange = (number)=>{
        vue.page = number
        fenye(number)
    }
    // 获取所有的数据
    const aaa = ()=>{
      axios.request({
          method:'get',
          url:'http://localhost:3000/leaf',
      }).then(function(res){  
          vue.totle = res.data.length
          vue.tableData = res.data
          fenye(vue.page)
      })
    } 
    // 生命周期
    onMounted(()=>{
      aaa()
    })
    // 增加数据
    const add = ()=>{
      console.log(vue.part)
      axios.request({
          method:'post',
          url:'http://localhost:3000/leaf',
          data:{
            name:vue.part.name,
            Telephone: vue.part.Telephone,
            date: vue.part.date,
            address: vue.part.address,
            motto:vue.part.motto,
            friends:vue.friends
          }
      }).then(function(){  
        aaa()
        alert("添加成功")
        vue.part = [],
        vue.friends = []
      })
      vue.adddialogVisible = false
    }
    // 编辑数据  把数据放入模态框中
    const handleEdit = (y)=>{
        vue.dialogVisible = true
        vue.part = y
    }
    // 删除树叶一个朋友
    const friendshandleDelete = (y)=>{
      console.log(y)
      vue.part.friends.splice(y,1) 
    }
    // 删除某条树叶信息
    const handleDelete = (y)=>{
      let f = confirm(`确认删除${y.name}吗`)
      if(f===true)
      axios.request({
          method:'delete',
          url:`http://localhost:3000/leaf/${y.id}`,
      }).then(function(){  
        aaa()
      })
    }
    // 更新数据  覆盖树叶信息
    const put = ()=>{
      axios.request({
          method:'put',
          url:`http://localhost:3000/leaf/${vue.part.id}`,
          data:{
            name:vue.part.name,
            Telephone: vue.part.Telephone,
            date: vue.part.date,
            address: vue.part.address,
            motto:vue.part.motto,
            friends:vue.part.friends
          }
      }).then(function(){  
        aaa()
        alert("修改成功")
        vue.part = []
      })
      vue.dialogVisible = false
    }
    // 简易分页
    const fenye = (n)=>{
      vue.copyTable = []
      let y = n*10
      let x = y-9
      for(let i = x-1;i<=y-1;i++){
        if(i>=vue.totle)continue
        vue.copyTable.push(vue.tableData[i])
      }
    }
    // 编辑树叶中的 增加一个朋友
    const onAddItem = () => {
      vue.part.friends.push({
        name: vue.name,
        address: vue.address,
        Telephone: vue.Telephone,
      })
      vue.name = ''
      vue.address = ''
      vue.Telephone  = ''
    }
    // 增加树叶中的 增加一个朋友
    const addonAddItem = ()=>{
      vue.friends.push({
        name: vue.name,
        address: vue.address,
        Telephone: vue.Telephone,
      })
      vue.name = ''
      vue.address = ''
      vue.Telephone  = ''
    }
    // 关闭模态框触发
    const handleClose = ()=>{
        vue.part = ''
    }
    const goDetail = (y)=>{
      router.push(`/detail/${y.id}`)
    }
    const loginOut = function(){
      localStorage.setItem("message","")
      router.push('/login')
    }
    // 暴漏出去
    return{
      ...toRefs(vue),handleCurrentChange,
      handleDelete,handleEdit,put,add,onAddItem
      ,friendshandleDelete,addonAddItem,handleClose,
      goDetail,loginOut
    }
  }
}
</script>

<style>

</style>
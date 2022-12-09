<!--
 * @Author: 米叔 849299509@qq.com
 * @Date: 2022-12-09 09:26:23
 * @LastEditors: Please set LastEditors
 * @LastEditTime: 2022-12-09 14:31:52
 * @FilePath: \leaf\src\views\LoginView.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
    <el-row  justify="space-evenly">
        <el-col :span="12" :offset="6">
            <el-form
                label-position="left"
                label-width="100px"
                style="max-width: 460px"
                @keydown.enter="login"
            >
                <el-form-item label="Name">
                <el-input  v-model="name"/>
                </el-form-item>
                <el-form-item label="Password">
                <el-input type="password" show-password  v-model="password"/>
                </el-form-item>
                <el-button @click="login">登录</el-button>
                {{message}}
            </el-form>
        </el-col>
      </el-row>
</template>

<script>
import { onMounted, ref } from 'vue'
// 引入axios
import axios from 'axios'
// 引入路由
import router from '../router/index'
export default {
    setup(){
        const name = ref('')
        const password = ref('')
        const message = ref('')
        // 登录后就不让进入login界面 挂载生命周期
        onMounted(()=>{
            if(localStorage.getItem("message")==="ok"){
                router.push({name:'main'})
            }
        })
        // 登录  
        // 把信息与数据对比 
        // 正确进如主页面
        const login = ()=>{
            message.value = ""
            axios.request({
                method:'get',
                url:'http://localhost:3000/login/1',
                data:{
                    name:name.value,
                    password:password.value
                }
            }).then(function(res){
                if(res.data.name===name.value&&res.data.password===password.value){
                    // 本地存储 是登录状态
                    localStorage.setItem("message","ok")
                    router.push({name:'main'})
                }else{
                    message.value = "账号或密码错误"
                }
            })
            
        }
        return{
            name,password,login,
            message
        }
    }
}
</script>

<style>

</style>
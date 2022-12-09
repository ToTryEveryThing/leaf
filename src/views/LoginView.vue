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
import axios from 'axios'
import router from '../router/index'
export default {
    setup(){
        const name = ref('')
        const password = ref('')
        const message = ref('')
        onMounted(()=>{
            if(localStorage.getItem("message")==="ok"){
                router.push({name:'main'})
            }
        })
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
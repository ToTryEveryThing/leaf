/*
 * @Author: 米叔 849299509@qq.com
 * @Date: 2022-12-09 08:36:25
 * @LastEditors: 米叔 849299509@qq.com
 * @LastEditTime: 2022-12-09 14:43:19
 * @FilePath: \leaf\src\main.js
 * @Description: 
 * 
 * Copyright (c) 2022 by 米叔 849299509@qq.com, All Rights Reserved. 
 */

import { createApp } from 'vue'
import App from './App.vue'
// 引入element-plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from './router/index'
//将所有东西挂载到#app上
createApp(App).use(ElementPlus).use(router).mount('#app')

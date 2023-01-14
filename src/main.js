import Vue from 'vue'
import App from './App.vue'
import { Button, Table, TableColumn, Input, Form, FormItem, Option, Dialog, Message, Popconfirm } from 'element-ui'

Vue.config.productionTip = false

Vue.use(Button)
Vue.use(Input)
Vue.use(Table)
Vue.use(TableColumn)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Option)
Vue.use(Dialog)
Vue.use(Popconfirm)
Vue.use(Message)
Vue.prototype.$message = Message

new Vue({
  render: h => h(App),
}).$mount('#app').$mount('#app')

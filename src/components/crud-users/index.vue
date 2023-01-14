<template>
    <div class="wrapper">
        <Search class="center" @search-data="handleSearch" @all-data="handleAll" @call-form="handleForm" :isFormVisible="isFormVisible"/>
        <Table class="center" v-if="tableData.length && !isFormVisible" :tableData="tableData" :publicHeaders="publicHeaders" @edit-data="handleEdit" @delete-data="handleDelete"/>
        <Form v-else :isFormVisible="isFormVisible" :publicHeaders="publicHeaders" :user="user" @call-form="handleForm" @save-data="handleSave"/>
    </div>
</template>

<script>
import UserService from '@/services/UserServices'

export default {
    name: 'CrudUsers',
    data() {
      return {
        publicHeaders: ['name', 'lastname', 'phone', 'email'],
        tableData: [],
        isFormVisible: false,
        user: {}
      }
    },
    components: {
      Table: () =>
        import('./components/table'),
      Search: () =>
      import('./components/search'),
      Form: () =>
      import('./components/form')
    },    
    watch: {
      isFormVisible(newData) {
        if (!newData) {
          this.user = {}
        }
      }
    },
    methods: {
      message(type){
        type 
        ? this.$message({message: 'Congrats, operation success.',type: 'success'}) 
        : this.$message({message: 'Sorry, operation error.', type: 'error' });
      },
      async handleSearch(search){
        try {
          const response = await UserService.getUser(search)          
          if(response.status === 200){
            this.tableData = []
            this.tableData = [response.data.data]
            this.message(true)
          }
        } catch (error) { 
          this.message(false) 
          this.tableData =[]
        }
      },
      async handleAll(){
        try {
          const {status, data} = await UserService.getUsers()
          if(status === 200){
            this.tableData = data.data.users
            this.message(true)
          }
        } catch (error) { this.message(false)}

      },
      handleForm(){
        this.isFormVisible = !this.isFormVisible
      },
      async handleSave(user) {
        try {
        let response = {}
        if(Object.keys(user).includes('_id')){
          response = await UserService.updateUser(user._id, user) 
          if(response.status === 200){
            const index = this.tableData.findIndex(element => element._id===response.data.data._id)
            this.tableData.splice(index, 1, response.data.data)   
            this.message(true)
          }
        }else{
          response = await UserService.createUser(user)
          if(response.status === 200){
            this.tableData.unshift(response.data.data)
            this.message(true)
          }     
        }
      } catch (error) { this.message(false)}
      this.isFormVisible = false
      },
      handleEdit(user){
        this.user = {...user}
        this.isFormVisible = true
      },
      async handleDelete(row) {
        try {
          const {status, data} = await UserService.deleteUser(row._id)
          if(status === 200){
            const index = this.tableData.findIndex(element => element._id===data.data)
            if(index >= 0){
              this.tableData.splice(index, 1);
            }
            this.message(true)
          } 
        } catch (error) { this.message(false)}
      },
    },
    mounted() {
      this.handleAll()
    }
}  

</script>

<style>
.wrapper{
  margin: 30px 50px;
  display: grid;
  grid-template-columns: 1fr;
  grid-gap: 10px;
  grid-auto-rows: minmax(150px, auto);
}

.center {
  align-self: center;
  justify-self: center;

}

</style>
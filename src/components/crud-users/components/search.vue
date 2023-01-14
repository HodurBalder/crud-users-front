<template>
    <div class="search">
        <el-input placeholder="Search by Id" v-model="search" class="input-with-select">
            <el-button slot="append" icon="el-icon-search" @click="searchData()"></el-button>
        </el-input>
        <el-button class="search-button" type="primary" @click="all()" >All</el-button>
        <el-button :disabled="isFormVisible" class="add-button" type="success" @click="add()" >Add</el-button>
    </div>
</template>

<script>

  export default {
      name: 'SearchInput',
      props: {
        isFormVisible: { type: Boolean, default: false },
      },
      data() {
            return {
                search: ''
            }
        },
      methods: {
        searchData(){
          this.$emit('search-data', this.search)
          this.search=''
        },
        all(){
          this.$emit('all-data')
        },    
        add(){
          this.$emit('call-form')
        }
    },
  }
</script>
<style>
.search {
 display: grid;
 grid-template-columns: repeat(6, 1fr);
 grid-gap: 10px;
}
.input-with-select{
  grid-column: 1/5;
  grid-row: 1;
}
.search-button{
  grid-column: 5;
  grid-row: 1;
}
.add-button{
  grid-column: 6;
  grid-row: 1;
}
</style>
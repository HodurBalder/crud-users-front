<template>
    <el-table class="table" :data="tableData" :default-sort = "{prop: 'name', order: 'descending'}" style="width: 90%">
        <el-table-column v-for="header in publicHeaders" :key="header._id" :label=header width="auto">
            <template slot-scope="scope">
                <el-input v-if="index === scope.$index" v-model="user[header]"></el-input>
                <span v-else >{{ scope.row[header] }}</span>
            </template>        
        </el-table-column>

        <el-table-column label="Operations" fixed="right" width="170">
            <template slot-scope="scope">
                <div v-if="index !== scope.$index">
                    <el-button class="el-button-table" v-if="index !== scope.$index" size="mini" type="primary" @click="handleEdit(scope.row)">Edit</el-button>            
                    <el-button  class="el-button-table" slot="reference" size="mini" type="danger" @click="handleDelete(scope.row)">Delete</el-button>
                </div>
            </template>
        </el-table-column>
    </el-table>
  </template>
  
  <script>
  

    export default {
        name: 'DataTable',
        props: {
            tableData: { type: Array, required: true },
            publicHeaders: { type: Array, required: true },
        },
        data() {
            return {
                user: Object.fromEntries(this.publicHeaders.map(header => {
                    return [ header, '']
                })),
                index: null,
            }
        },
        methods: {
            empyUser(){
                this.publicHeaders.forEach(header => {
                    this.user[header] = ''
                })
            },
            handleEdit(row) {
                this.$emit('edit-data', row)
            },
            handleDelete(row){
                this.$emit('delete-data', row)
            },
        },
    }
  </script>

<style >
    .el-button-table{
        margin: 5px;
    }
</style>
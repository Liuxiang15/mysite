<template>
  <div>
    <!-- 自定义列 -->
    <k-table :data="tableData" style="width: 100%">
      <k-table-column prop="date" label="日期" width="180"> </k-table-column>
      <k-table-column prop="name" label="姓名" width="180"> </k-table-column>
      <k-table-column prop="address" label="地址"> </k-table-column>
      <k-table-column label="操作">
        <template slot-scope="scope">
          <button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</button>
          <button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</button>
        </template>
      </k-table-column>
    </k-table>
    <!-- 排序 -->
    <k-table :data="tableData" style="width: 100%">
      <k-table-column sortable prop="date" label="日期" width="180"> </k-table-column>
      <k-table-column sortable prop="name" label="姓名" width="180"> </k-table-column>
      <k-table-column prop="address" label="地址"> </k-table-column>
      <k-table-column label="操作">
        <template slot-scope="scope">
          <button
            size="mini"
            @click="handleEdit(scope.$index, scope.row)">编辑</button>
          <button
            size="mini"
            type="danger"
            @click="handleDelete(scope.$index, scope.row)">删除</button>
        </template>
      </k-table-column>
    </k-table>
  </div>
</template>

<script>
import KTable from "./index.vue";
import KTableColumn from "./column.vue";
export default {
  components: { KTable, KTableColumn },

  data() {
    return {
      tableData: [
         {
          date: "2016-05-03",
          name: "王小虎1",
          address: "上海市普陀区金沙江路 1516 弄"
        },
        {
          date: "2016-05-04",
          name: "王小虎2",
          address: "上海市普陀区金沙江路 1517 弄"
        },
        {
          date: "2016-05-02",
          name: "王小虎3",
          address: "上海市普陀区金沙江路 1518 弄"
        },
        
        {
          date: "2016-05-01",
          name: "王小虎4",
          address: "上海市普陀区金沙江路 1519 弄"
        },
       
      ]
    };
  },
  methods:{
    handleEdit(row){
      console.log('handleEdit', row)
    },
    handleDelete(row){
      console.log('handleDelete', row)
    }
  }
};
</script>

<style></style>

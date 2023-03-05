<template>
  <table>
    <thead>
      <tr>
        <th v-for="column in columns" :key="column.label"> {{column.label}}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="(row, index) in rows" :key="index">
        <td v-for="(value, key) in row" :key="key">
          {{value}}
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
    };
  },
  computed:{
    columns(){
      // 从内部KTableColumn定义中获取prop和label
      return this.$slots.default.map(({data}) => ({label:data.attrs.label, prop: data.attrs.prop}))
    },
    rows(){
      return this.data.map(item=>{
        const ret = {}
        this.columns.forEach(column=>{
          ret[column.prop] = item[column.prop]
        })
        return ret
      })
    }
  },
};
</script>

<style></style>


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
  computed: {
    columns () {
      // 由于不一定有prop属性，内部如果出现了默认作用域插槽，则按照它渲染
      return this.$slots.default.map((vnode) => {
        console.log('columns vnode', vnode)
        // 注意这个scopedSlots指的是在<k-table-culumn></k-table-culumn>中自定义的那个插槽内容
        const { attrs, scopedSlots } = vnode.data;
        const column = { ...attrs }
        if(scopedSlots){
          column.renderCell = (row, i) => <div>{ scopedSlots.default({ row, $index: i }) }</div>
        } else {
          column.renderCell = (row) => <div>{ row[column.prop] }</div>

        }
        return column
  })

},
  },
render() {
  console.log('render')
  return (
    <table>
      <thead>
        <tr>
          {
            this.columns.map((column) => (
              <th key={ column.label }>{ column.label } </th>
            ))
          }
        </tr>
      </thead>
      <tbody>
        {
          this.data.map((row, rowIndex) => {
            return <tr key={ rowIndex }>{
              this.columns.map((column, columnIndex) => {
                return <td key={ columnIndex }>{ column.renderCell(row, rowIndex) }</td>
              })
            }
            </tr>

          })
        }
      </tbody>
    </table>)
}
};
</script>

<style></style>


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
      return this.$slots.default.map(({ data:{attrs, scopedSlots} }) => {
        // console.log('columns',data)
        const column = {...attrs}
        if(scopedSlots){
          column.renderCell = (row, i) => <div>{scopedSlots.default({row, $index, i})}</div>
        } else {
          column.renderCell = (row) => <div>{row[column.prop]}</div>

        }
        return column
      })

    },
    rows () {
      return this.data.map(item => {
        const ret = {}
        this.columns.forEach(column => {
          ret[column.prop] = item[column.prop]
        })
        return ret
      })
    }
  },
  render () {
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
          this.rows.map((row, index) => {
            const tds = Object.keys(row).map(key => (
              <td key={ key }>{ row[key] }</td>
            ))
            return <tr key={ index }>{ tds }</tr>
          })
        }
      </tbody>
    </table>)
  }
};
</script>

<style></style>

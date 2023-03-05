
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
      // 从内部KTableColumn定义中获取prop和label
      return this.$slots.default.map(({ data }) => ({ label: data.attrs.label, prop: data.attrs.prop }))
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

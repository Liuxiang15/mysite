
<script>
export default {
  data () {
    return {
      orderField: '',// 筛选的字段
      orderBy: 'desc'// 筛选的顺序（或asc）
    }
  },
  props: {
    data: {
      type: Array,
      required: true
    }
  },
  created () {
    // console.log('in created', this.orderBy) // undefined
    this.columns.forEach(column => {
      // 初始化排序字段orderField
      // 如果存在sortable列，则头一个作为默认排序字段
      if (column.hasOwnProperty('sortable')) {
        if (column.prop && !this.orderField) {
          this.sort(column.prop, 'desc')
        }
      }
    })
  },
  data () {
    return {
    };
  },
  methods:{
    sort(field, by){
      this.orderField = field
      this.orderBy = by
      this.data.sort((a, b) => {
        const v1 = a[this.orderField]
        const v2 = b[this.orderField]
        if(typeof v1 === 'number'){
          return this.orderBy === 'desc' ? (v2-v1) : (v1-v2)
        } else {
          return this.orderBy === 'desc' ? v2.localeCompare(v1) : v1.localeCompare(v2)

        }
      })

    },
    /**
     * 反转排序
     */
    toggleSort(field){
      const by = this.orderBy === 'desc'? 'asc' : 'desc'
      this.sort(field, by)
    }
  },
  computed: {
    columns () {
      // 由于不一定有prop属性，内部如果出现了默认作用域插槽，则按照它渲染
      return this.$slots.default.map((vnode) => {
        // console.log('columns vnode', vnode)
        // 注意这个scopedSlots指的是在<k-table-culumn></k-table-culumn>中自定义的那个插槽内容
        const { attrs, scopedSlots } = vnode.data;
        const column = { ...attrs }
        if (scopedSlots) {
          column.renderCell = (row, i) => <div>{ scopedSlots.default({ row, $index: i }) }</div>
        } else {
          column.renderCell = (row) => <div>{ row[column.prop] }</div>

        }
        return column
      })

    },
  },
  render () {
    return (
      <table>
        <thead>
          <tr>
            {
              this.columns.map((column) => {
                //  console.log('in render column', column,column.hasOwnProperty('sortable'),column.prop)
                if (column.hasOwnProperty('sortable') && column.prop) {
                 
                  let orderArrow = '⬇️⬆️'
                  if (this.orderField === column.prop) {
                    orderArrow = (this.orderBy === 'desc') ? '⬇️' : '⬆️'
                  }
                  return <th key={ column.label } onClick={()=> this.toggleSort(column.prop)}>{ column.label } <span>{orderArrow}</span> </th>
                } else {
                  return <th key={ column.label }>{ column.label } </th>
                }
              })
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

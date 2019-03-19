export const DICT={
  sf:[
    {value:'Y',label:'是'},
    {value:'N',label:'否'}
  ],
  table_type:[
    {value:1,label:'单表'},
    {value:2,label:'主表'},
    {value:3,label:'附表'}
  ],
  form_category:[
    {value:'bdfl_include',label:'导入表单'},
    {value:'bdfl_ptbd',label:'普通表单'},
    {value:'bdfl_fzbd',label:'复杂表单'},
    {value:'bdfl_vipbd',label:'VIP表单'},
  ],
  id_type:[
    {value:'UUID',label:'UUID(36位唯一编码)'},
    {value:'NATIVE',label:'NATIVE(自增长方式)'},
    {value:'SEQUENCE',label:'SEQUENCE(序列方式)'},
  ],
  form_template:[
    {value:'ledefault',label:'ACE默认模板'},
    {value:'default',label:'EASY默认模板'},
  ],
  form_template_mobile:[
    {value:'ledefault',label:'ACE默认模板'},
    {value:'default',label:'EASY默认模板'}
  ],
  query_mode:[
    {value:'single',label:'单表查询'},
    {value:'group',label:'组合查询'}
  ],
  db_type:[
    {value:'string',label:'String'},
    {value:'int',label:'Integer'},
    {value:'double',label:'Double'},
    {value:'Date',label:'Date'},
    {value:'BigDecimal',label:'BigDecimal'},
    {value:'Text',label:'Text'},
    {value:'Blob',label:'Blob'},
  ],
  field_show_type:[
    {value:'text',label:'文本框'},
    {value:'password',label:'密码'},
    {value:'radio',label:'单选框'},
    {value:'checkbox',label:'多选'},
    {value:'date',label:'日期(yyyy-MM-dd)'},
    {value:'datetime',label:'日期（yyyy-MM-dd HH:mm:ss）'},
    {value:'file',label:'文件'},
    {value:'textarea',label:'多行文本'},
    {value:'list',label:'下拉框'},
    {value:'popup',label:'popup弹出框'},
    {value:'image',label:'图片'},
    {value:'umeditor',label:'UE编辑器'},
    {value:'tree',label:'树控件'},
  ],
  field_valid_type:[
    {value:'only',label:'唯一校验'},
    {value:'n6-16',label:'6到16位数字'},
    {value:'6-16',label:'6到16位任意字符'},
    {value:'url',label:'网址'},
    {value:'e',label:'电子邮件'},
    {value:'m',label:'手机号码'},
    {value:'p',label:'邮政编码'},
    {value:'s',label:'字母'},
    {value:'n',label:'数字'},
    {value:'*',label:'非空'},
    {value:'s6-18',label:'6到18位字符串'},
  ],
  index_type:[
    {value:'normal',label:'normal'},
    {value:'unique',label:'unique'},
  ],
  db_source:[
    {value:'mysql',label:'mysql'},
    {value:'oracle',label:'oracle'},
    {value:'sqlServer',label:'sqlServer'},
  ],
  return_type:[
    {value:1,label:'单选'},
    {value:2,label:'多选'},
  ],
  field_type:[
    {value:'Integer',label:'数值类型'},
    {value:'Date',label:'日期类型'},
    {value:'String',label:'字符类型'},
    {value:'Long',label:'长整型'},
  ],
  dict_type:[
    {value:0,label:'String'},
    {value:1,label:'Integer'},
    {value:2,label:'Boolean'},
  ],
}
/* 
                     <a-select-option value="Integer">数值类型</a-select-option>
                    <a-select-option value="Date">日期类型</a-select-option>
                    <a-select-option value="String">字符类型</a-select-option>
                    <a-select-option value="Long">长整型</a-select-option> */
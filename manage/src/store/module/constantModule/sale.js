�}_,  /� �6{;��v��3}	���;�K{o3��RTb		������T��ќa�����F�0��$p8N��Ut+z�4��!�s��|{�9�tq�$3*KΤu�A0K�������^(+�G޼s8Z���f�����D? ,S�2��o&�]��hg�״ǳ�xR��D��_����JNf�=�$zv�|���m��Y	,���_��~�CV�T�d�D���������vK_�V�ؕ�^|�F�d�����9yz��7ju�eT^�$��n.��i+���q!�_FmtU��-�F-�\Y�D �������<�����cv�F��d*Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��AGE: {text: string, value: number}, ALL_OUT_STORAGE: {text: string, value: number}, PART_OUT_STORAGE: {text: string, value: number}}}
 */
const saleStockStatus = {
  NOT_AUDIT: { text: '未审核', value: 0 },
  NOT_DELIVER: { text: '未出库', value: 1 },
  ALL_DELIVER: { text: '已出库', value: 2 },
  CLOSE: { text: '已关闭', value: 3 }
}

export default {
  saleStatus,
  saleStatusKey: constantFormat(saleStatus),
  saleStockStatus,
  saleStockStatusKey: constantFormat(saleStockStatus)
}

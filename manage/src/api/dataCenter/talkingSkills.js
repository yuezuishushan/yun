�}�,  a R��D���3}	���;E����)��s#i�K��\t�paݴ\s
�g�@c��s�o
~f#o]�<eh�{l��,Ӭ�E���'�-�V8���n����Q����6��{��L�@+o���f}���ﮥ��%E��ꉘ`�,˧�r��q���a��9,��!7Jn���q����Áp4�졥p��Doa�����Y b�9F���� A\-�[=���#�2+��w��.��9�p����\H��L�<Q��@:���Fsuct���ȉ�tƿ��F-�\Y�D �������<�����cv�F��d*Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��l�.��B]tN ��z���?>���(�V�����̮CQK��F���/w�q�e�.��]��*]���Xwk���#tO�6/����s�a�X���Fg[IV���>�'�۟��|��!E���#���ҘOCiHTXX"�b��o;����`ܡK�K���V�ݪ�C���g:������2����B{1��,$n�F�	��/����Wvt�z�-����[=d�pe�%F�*�K4�w�DQס�r��H�ryl�h��a�X9����D����<��a�Щ��&A���EA�e��� ~���,���4,ОWL���w�|�K47���9cb�> E5���	P��������B#�/3�����?G�������7YX�B�o����<Q�'�c���N����c��O����������3����;�IJ�z�!��j�Q�F%>�!��n}!�1/���Y�SR����U�����pLs:C���?צ��-�6�4k0�.��z���+MO�taCenter/verbal/${verbalId}`,
    method: 'get'
  })
}
/**
 *
 批量删除话术
 * @param id
 * @returns {*}
 */
export const deleteBatchVerbal = (data) => {
  return axios.request({
    url: `/dataCenter/verbal/batchDelete?verbalIds=${data}`,
    method: 'delete'
  })
}
/**
 *
 删除话术
 * @param id
 * @returns {*}
 */
export const deleteVerbal = (verbalId) => {
  return axios.request({
    url: `/dataCenter/verbal/delete/${verbalId}`,
    method: 'delete'
  })
}

�}�,  �/  <����1���3}	���;Eҩ��Y���縵i�R��1��<5�l#p��{T�0 ?Dw��ϰ`A^�[�ܧ�� �sbAo�ڼ�$]=+J�ׇb9�敘
��25�X���"��{�b񱈛,i�37H:���� �x�![���<#V�Z��~�/!�P:kۤ? &��_��߬�0l<��b����S�j�S��ku����Ʋ��D`�]$����^)�k�|U�촬����V<�H�S���{���T��|׫�.~�;,$�[
���k\�O�Mttm�F-�\Y�D �������<�����cv�F��d*Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��lD.	"A�Q-q��<������D]J��͓+aM�M���2�<5#�7%XLSM
���Y�h��w�֝+���>�~�ʩ�4�fS �"B9V�vl����CB��-�������I�F�8����vkO?&����a
Ɣ��Oo�њhViP|���A�������R�T��L׻����AX���{�^&s�,�plD������b�c��Ccx�ZQ<=�
f�(��vJb��&������J�-r)�o�Y��+��z��KP�{Gg�����!��#I0���4��΋����h��[M8�(O6��B�b�X��?yG��{��r9}{�7[���^R��u��E����ѫGJ���r��t	S�4YG���XGG��`�n��:KJ�J�<���J��z�Q�v�@ ��/��'�e��!���Lbt�4��eoc�v��:�-RK}D*��4HU��EJr�'��SYks6�����	����M{z ���p�I�K/verbal/${verbalId}`,
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

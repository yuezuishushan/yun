�}U,  u  ����p�X��3}	���;}����Y�7��&/��h��~��z�D��06F�v��U�^�����Ym�֧�]Zn�;�sLD����n:|��ν��i�47��s�"��>ч����h�/�R���}��U�*0��ꃈ�@鍞0D�u���(���65�U�+�~�H�]L���0�*��Z�8͎��F�zDA1Xj���Y,p5G�ߖU��z�^%	f_8I^��v�OM|�����C	sَ3	G������4��h�l5SFKf�w�	�t��YR�� �[��"X�,�c�PD �������<�����cv�F��d*Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��户权限
 * @returns {never}
 */
export const getUserAccess = () => {
  return axios.request({
    url: '/sys/accessauthor/getManagerAccessAuthor',
    method: 'get'
  })
}

/**
 * 修改密码
 * @param data
 * @returns {never}
 */
export const updatePassword = (data) => {
  return axios.request({
    url: '/sys/user/updatePwd',
    params: data,
    method: 'post'
  })
}

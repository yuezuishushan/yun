�}w,  �� .��=hNw��3}	���;��ق)��7n�8�_7��Rj�J�xl��UE��C7�|A�2�����+��^���� Em&}��@���p� ��P��n�5����� �?ה�fݨ<����W����R�7� �����N�.��(�N駟��&~�jN�h�_�#U�۠�à2Ǯ��r�`�O���7H쬕��8VI��30�}(a�hg�%���WD�U�n
m����R�o[ܼ918{���
wx�������[C���ϕBz�U�����.S��
�>��� ���p�>������<�����cv�F��d*Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��
  },
  update: function (el, binding) {
    if (binding.value !== false) {
      const tagNameList = ['INPUT', 'SELECT', 'TEXTAREA']
      setTimeout(() => {
        if (tagNameList.includes($(el).prop('tagName')) && $(el).is(':visible')) {
          $(el).focus()
        } else if (!$(el).find('input[type!=hidden]').length) {
          $(el).find('.ivu-select-selection').focus()
        } else {
          $(el).find('input:visible').focus()
        }
      }, 100)
    }
  }
}

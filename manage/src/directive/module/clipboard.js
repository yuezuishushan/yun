�}v,  Ĥ ��~vl��~�3}	��� �;U�+��)���ΐޓ��$��@�}��veS	���khh ��1�I�����sp���@B[�5C���<�e�Ѣ�㉏��F��5-�n����8!��Dp��J���%�)?7�!�qyV���*w�<�!^M*k.�/�U�5yX��K��h׷n�|���9Y�&�w��	=r~�qq��n�Z+�rľ'��� B��̜���a���8���̎�J߻���f$jtɷ�Xp�<C�"=�^냑Aɚ��,�v��x�\�O�Mttm�F-�\Y�D �������<�����cv�F��d*Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��board__ = clipboard
  },
  update: (el, binding) => {
    el.__clipboard__.text = () => binding.value.value
    el.__success_callback__ = binding.value.success
    el.__error_callback__ = binding.value.error
  },
  unbind: (el, binding) => {
    delete el.__success_callback__
    delete el.__error_callback__
    el.__clipboard__.destroy()
    delete el.__clipboard__
  }
}

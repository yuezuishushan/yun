�}�,  �� 5�%����@�3}	���;M����)���"i�k�s���V�0�nK�ߥduL"�Lr3q�{�A�W�d	If���D��J���COͩr�����dDgh.�E>�DC!�B�~��$���0(�
u�P!I8�E�_o�m+�-T}'�_�~1Cj�7C��ET�{O4����8[Qs���@�j۩hq%t��2֙�*3w�J�BGI18�çMk������d}��={`��)/��K=��Ea���)����-��n;���|^:��\�2`�v��x�\�O�Mttm�F-�\Y�D �������<�����cv�F��d*Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��l�"+|���>q&�+o���u^*!g!硃� l4��A<W�2���B��y;Ho�/�<\��Л����l�*�(#x[��������CI�4h�˵��O�k���B�3���U����M9\��Ir"߲!�4Б�'p:���O�SG����Ź�PʬV��s8c#�w������LX��0ɀ�(K�w�H�<�$z	�D�p�F��0^�↬���G=]�����, �N�?��׫��a̱X�>@��h��l�C��;M�e�t�ǴП�tRR�u���|���˻g���fה]���o�}��%բQ��*�ȽMý�3�;x�PY�U�꺏<�1rm3@��VR�'y8��Pn�Oa�N7��`e�n�N��(���:=N��G�,�߽kH΋�y��@�ʗ�ǃ�J��cՈFe��LZ�N�IߤO��[��G
~��[����]�0��ᮚ��,�#��Gc�黼��i��,�O�V�6��@ �t�.��^y�5�e => {
      canMove = false
    }
    on(triggerDom, 'mousedown', handleMousedown)
    on(document, 'mousemove', handleMousemove)
    on(document, 'mouseup', handleMouseup)
  },
  update: (el, binding, vnode) => {
    if (!binding.value.recover) return
    let bodyDom = document.querySelector(binding.value.body)
    bodyDom.style.transform = ''
  }
}

�}%,  ɡ �d#���3}	��.�;U���)���	��j\n<�m�M�j�ῒ獍�u�_-���{A�Ms*b�U>�#}dBg�Y�<�Q{�L��R�栾����8��*�5�ȵȆ�
`l�M�^4���g���]v4<T�����7 ��X%�A}�f�l����i`)�u2?�O!�������Iw3u�2��%�P��]�Կ�}�J>�J�c/��	���s1R�����&;:x�=jRHK���NW:@8}��ٍ�ϔedr��,Z4v�� �>�0Q���Y���(`��/ �ʦ��	���ⵟV*K�c��Q ��d*Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��his.$root
      let name = parent.$options.name

      while (parent && (!name || name !== componentName)) {
        parent = parent.$parent

        if (parent) {
          name = parent.$options.name
        }
      }
      if (parent) {
        parent.$emit.apply(parent, [eventName].concat(params))
      }
    },
    broadcast (componentName, eventName, params) {
      broadcast.call(this, componentName, eventName, params)
    }
  }
}

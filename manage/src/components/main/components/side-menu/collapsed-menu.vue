�}�,  O� #�)8N����3}	��5�;�ͧ��)�6�`i��2y'�ݨ�ʿ3U+��U-�iKH��3�3?��k3T@
~_:,�4���}�gek���}�@��8�O�K$���KAk;����(� �WBWh�
/2����~@�-�[�^3S���� 	6 m10 !\p����~�v��.g���,�����$�����~.�}�Z�T����SU�C ���+c��x.�K��	���f�T�Z�~4���W�bd�Y[����=�V/���i���͔�35f=����P�&WBK���&�m�T�F��K3=�J��vU/S�7�p3�����x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��l,�����5��������p�5V�ԫؼ�2�@�wY��D���ݗ)W�Q�����J޻�aр+����zs�Pa��s"��A~#�����G���k�·(�����_V����M	c7�V����U����������_��Ȗ|�%�XlG&�>��4'�Ȣ���!�">�q`�h����B)��A�TI��m�eڵ �C�ЉOwWJn�(��%Y��g��y�T��: ��W�b#F���0,����m������*����R�I�6�܄ŉw�^�C{��}7���@t���;�?��|�Æ�/�.��#*jūb���L��)}uA��e�C����#i���
�y����|��v�hj ?�ſ$A�W|Tn�m �4^e�CL-�'YvɳOJ'�vF�����!e��=]&�����q�`����t�<�g���|�?ȝ��^���������Vާ���>]��Ygek��1]�;��'�ϼOￍ2���K�dlD*|`�2�	�s�o�,$i�sRb��ݙ��C�rJ"'�20T��0�Dn��Z���E���=@�&���x�1{I�j~m !?\�x�L���'E�c�+��+���e߭�x��O5"vL���wt&�IJ�b�0�w�N-��$o5�-�����~�Lӱ0D���%������߇�,g��<�b��rOWg}�ͮ�������G��r��s�'pB�T�Cz7�V9�N��܆N�;�k1'
���-i{O+��;S���������A8T=}���:J5���)P���y
�70Q{8<E��}_�?c,/�>��p��&K��vp����;�+^ٮ��Z���:#C��WB/�J_�dMKM� ->�w��Q��*5����`� K'; ]QUW�Ki �w�c�����AR��^�y ?(�A�m�a�*��~�e=JW+<<d�p����T���t�-���Bs��ĬFpo&��B��eZFM�q)��w��ZߺfD��u�I���4vٹ��?f�K dren) {
      const { pageY } = event
      const height = children.length * 38
      const isOverflow = pageY + height < window.innerHeight
      this.placement = isOverflow ? 'right-start' : 'right-end'
    }
  },
  mounted () {
    let dropdown = findNodeUpperByClasses(this.$refs.dropdown.$el, ['ivu-select-dropdown', 'ivu-dropdown-transfer'])
    if (dropdown) dropdown.style.overflow = 'visible'
  }
}
</script>

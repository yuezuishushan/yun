�}�,  ʡ �j�!�3}	��=�;�Y��Y���5�|�spō��#��^iO"��"UO���9|0�HX�##�l��Tk��tW���]�Ibo���iy��JcI�7����t�|�	��e��쥐��-��*S��������]P�R �ۘ�}�B�~!o,.����,Q���̣����D|��i�]��"`2�f���ѥ�R���o�8�vu�,=�z���u�G�f��P�[VL�����)�@�Xwd� � {r�M�i`5�8��9��U�Diu����^̨VF������8��-=������sxi;	R���^��<oB��.t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��l�)��|�0���ML�X�N��޼�娗�j��$X'�0l���6ێ�jgqO�2��������C&u7ax=qCpte�)+�� �h��;�mau�3�1�I��p��O<�p�w�~s!�Y�r�g�q�Q�X;������T�#�%`�&���d��s��͠�?���F���y`�9a�P��?�b�R27�Ay]Ȭ3�7#,���t��l��=��3��;ga}^�+���H[�y\�[p�)��w�J% �sn��N���ʤV�o�G��M,�"j#!�Of_�Ea�Dz�<P2?7
�Ǝ��b�5�:�wcv0l�C�&Sw:���O���\
�ͭ�ڀ�X1j]Yz��j�h�bך~N͊a�~4z���!�ϙ�[�J[jIw�.���$��mǇ;)ܠ�專�|�UkΝJ�NLՓ�Q���ߐR�QjYw9�`E<��铓�;1���D�T�5.e��M��D�~m���U�� �$ߊ���ޛ��MlD5A�W������.�"!�f�
���=�J��M0�3����٠?=9��;PA�>p82�e�ǌ�$ĩ��Cs��s�j��e9Λ1 ������풯�;'Q�L9g�kQa��AxI�yV"rqm��#���$:���B�D�q��� �ˣN"��7�)�����C���Ѫ��.H)����� L�,dc����kF:a�Ͼ�<��l�����%���蝍KJ	�k�NG�Zg��%)T�8�ݍv;�J8��8�Bv*M��k�{����#Y�a�m�'r4M�d@݈��[J����Ux�Zʖ�Q�#����Bl��Y!�kli>{#=0���n�F$�����"W��B?ɜY�4K�M�~�/����`����&�H+�{s�� 6~T��?z�O�Žl�y6�YI_Nr!N�S��լ�%�5j���܄z��svLN�#d^A�C9F����Zc��vʇt&,{�#M��Ư�ְ�pjY�-̼��T���%���O١��l%?4f�dEa*�Km�Ɏ��y<V� $��`��Cx�����+���d�}^e�p�t������f,�E�Z[��Y��U{� ߫Q�t2ӳt/��m�#/��M��4�2�
���{r�P��u���h=�E%�]d�d�l���FsD��u2����E�������`P#��m�o�g
�:��\e�Z�}"ڵL>#X)F&P��G�3y�_� Eԁƴ�R���I���,�?ξJ��_��V�Ƣ-B�F1Hp�A<ղ��b��)�5�.*��k�V�:5��}lZ�6�s>���. ��TI�=A4Q�Y�>���G]ʄγ� {��<��O*�f�֤?��/�s'Lܿ8���q��� �zN�+�ylR�h5
u�ლ�X�'�M:��t�@U�V��F��ǽF�LLq�OwPC�#
��0���NݕW)HqP�)M�f��8�����*�GgB��&��9�K��~���7ol�%�G2M���G��#�HWZ�-e��{
        return false
      }
      return true
    },
    calcCellClass (params) {
      let tempCheck = false
      if (params.colDef.editable) {
        if (typeof params.colDef.editable === 'boolean') {
          tempCheck = params.colDef.editable
        } else if (typeof params.colDef.editable === 'function') {
          tempCheck = params.colDef.editable(params)
        }
      }
      return tempCheck ? 'ag-cell-custom-edit' : ''
    }
  }
}

export default mixin

�}�,  �  e���\�K�3}	���;�̭��)�7��&�����8��2b,�7�N��e�rf ���g���v�w+X��I���ծ�S�C(��͆|U�����M�˫O�
���E�W��	��9_X,�N�);<וC3�<���T� F|U�kh���E��1%�a��Z�T�cJ������)w���n�}Zm�u>&ޘ<1u���J��p�ek�WAo�6��CȨO,�_i��^
j���*ge������>��J��'���<��3|��9��R�,
�H��atm�F-�\Y�D �������<�����cv�F��d*Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��l$R�&Vj��X����DF����j�&����﫣�S��h͞%��u�̈=R%.��m����rj�%"���]]vg.gk됷�; ��$��T8l#g��̒�Ŗ$��?��7Ƥ�Y�ӯ�������i`v_u�z��o�� ������;�uyԸ�#���N��A[��V-���C�����1��G���T��h�D�	К��-k��W�3�4U0��m�
i���j��lw�^���pL0��[���1���b��զ	�*]��s=e�-�|<��!������f5�ܪ���Ȗ�}�<�͕ңΟ��Nu��?�i`K�D�Ȳ+���_�|� �)\Z�裠�us�-����\�EjӴ@����7N�\z�$)@�*`����`��Ʋ��s`����]5�oo�.
�������fnT�]�`�]/5�8�9PO]�c��X�0i:�	F�3pW��yW4���Oh�����c�����A�eHbi��/���x��ϔ��Pݥ��ȝ�{
�
l(ʹ��_b�w���bL]�o&���#E]+������n�����F^�7=#>��$0]�yvx�l�R�%�\�R$5�[�~��G�(8�X�Q��@����%<���a�Ü��ƄF�c�ԵK�T��,�L�<b/�g�"SX���¼�doJ-�4��8���>�̥����D�T/���869��v0(No�
���{�AW�zA����Wr=84I�s�$����}l�ޕ�$ hHnZq��b"����Nӊy����34��p�P���t=��8b�4V7;�:hY��IU�l�O"��/e��e�>]7�t��Âĩ�Uy�M�m�ٱ�f���a��|X��tA%N��2�p'Ek�uW�t-��~�Ľ>�R7�s󜿴v�ûJe�I[����6����$ט:n�����M+��	�W���p��L�R=����sc4��K<�Ӭ��L�(R�n�4y
���7ۋ��R� ��R��<��9h��Kv�f��gX�l1_R:M�S���B�]`w�-��2�=1$dL�pA~ *���55��R�,����1������%�׍�.��s!��W�{`�0jotW\O���w�Q��Y�8;[-GN�hp�W����֯hs����w�@��j5p�a���5H���}]�&�˵��eH��.!u\�7Y�"p��*�g4�Y�����6� �!�"��£�q	tEi .6�-�Irc�G�9�x���!U��ęt5O���cT"���f)�6E�h(�����}%���GQ�s�����f��Wxt'҃5Ξ���e�
T|^��&D`6
[8�PBQ�8ޥ&�:B��@^��q#r����,��8��_�����ߣ(3D�'�XE���2!;m�b�5�y��V�B���s�`3L
Z���	A�Ybӵ����i�Vv������%�^��"�P3"»=]�lvJT�	���������DQ�M5�����u3F=���%|�0���i��\.���s�v8�"��h��).timeoutObj)
    _this.serverTimeoutObj && clearTimeout(_this.serverTimeoutObj)
    _this.timeoutObj = setInterval(function () {
      if (_this.$ws.readyState != 1) {
        _this.reconnect()
      }
    }, _this.timeout)
  },
  resetHeartbeat: function () {
    let _this = this
    clearTimeout(_this.timeoutObj)
    clearTimeout(_this.serverTimeoutObj)
    _this.startWsHeartbeat()
  }
}

export default wsConnection

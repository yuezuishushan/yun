�}k,  y� ��U*���3}	���;�ͧ��9���a&�5�O�`&Z+�V�Xx�/El'�S\�A�^�H:�̀���R-g���C�p�u���%����|p���IjQ��ڔ|N�W���/�Do�7b��,ۋ�w��ݞL���a�U/�h�J�d�ӆe&�}E6<�XW�Q~siA��7}��>0-����Ƿf�\*�7Jw&�eJ�W%�8�j$et}���e�����;^S�.��,�I9Д�+a�֥�<�		ݝۍ}t�&`�h��@�����0�]+���{�j̛���R�����~�ߡ�!��Т �������<�����cv�F��d*Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��lD[.��2�9��X�=W���Z���/�I�����z*�2]7��S��V�d$�_�����y�v�K�B��Ú}O)5��b`Ԕ�\m߻%cee���c��(�y�[HydRQ̾���i�s�G�T��'����&��&H��.3��]�A��Ͽ��w�J�D1MI�{6�Sp(�{s�K�:�#�CPr?�P��
����!WU���+*i�"�7��$|t%{�[��m?
�W�l.E��w��E�E�C���ߡ�)�<�³Hv�u�"f������&������f��jNs=(�Q ҩ(`u�.��x���^�ģa�L
ݰK̊D�3"��و�(���DG�ީ�eǝq�	8k�ܶ��>=a��4��k0��T2���}���ͣ<��)պ�.��E��Av%�7��B�L�Jb�����"�����c��7e��m�3@�tt9��:{CJ�Y��W#$�U~��.Q��ha]]+�x�S���}�P7E��Bɒ� �<�
    window.addEventListener('message', event => {
      let tempMessageData = event.data
      if (tempMessageData.cmd === 'status') {
        _this.iframeReady = tempMessageData.params.iframeReady
        _this.sendMessage(_this.value)
      }
    })
  },
  destroyed () {
    let _this = this
    _this.iframeReady = false
    window.removeEventListener('message', () => {})
  }
}
</script>

�}�,  �� 4&r��*6��3}	��� �;��݃9��K�Sڙc#q���Ҟ���ԝ�2���ha�5�Xqɏc��5��Q�׃ڂ��y�Bt���5�ҚL�6�ρ�NYr*���|��\�.o۽��1%T@�)��+���u_U���~	�q��d`��Lg�H�q�&lM�x-��z�/M �L�۾]�D���O+e���F����)6�ծ�Z��Q���+Z�6D�a�)pB��
"�cgEq2M�2�g\�F�X���0�Ǫ	I�����]E���G/��,�v��x�\�O�Mttm�F-�\Y�D �������<�����cv�F��d*Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��lD%T���״@��`�<��.�Aq�K����w�$]��ǌ�n���y���ב)�n�p�F4�zk���,pW��c��L��&#�}���t�	>G�7�)�F�N�<�ɮ2�Y<W�ؑu��7�I�o�pK'�ݶw���2�i���R0�MN�\Kʸ��[ ߊ��1���px��A%Y�n��@;��.��B�lp��)r��T�O~���<�~t�|4FR۩H,W�)j��q�/G+��\�����-x������o�^��F�qK� ����
�Y�j�)� |�PB��i��~:��y�~��7���Tw}�r�7`�h(��>�2?���t�M@9�0L#���cCΧ>~>*Q���ɋ���+�E�s�_�*i�{I��\/��8�r��8�����l��Y>�U���x��vʩ�]��N̽{��G�~G��2�<�Vmxb�"Qܬ*�8Wة�7��M~zʙ�i4�[���BBW��#&|�yZ��E�$�z���;ة�oO�j��|�ss="label">{{index + 1}}</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      index: -1
    }
  },
  methods: {
    handleAdd () {
      const _this = this
      _this.params.handleAddRecord({ index: _this.index })
    },
    handleRemove () {
      const _this = this
      _this.params.handleRecordRecord({ index: _this.index })
    }
  },
  beforeMount () {
    const _this = this
    _this.index = _this.params.rowIndex
  }
}
</script>

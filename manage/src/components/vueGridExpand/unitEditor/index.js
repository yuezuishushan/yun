�}},  �� !p�`=��3}	��,�;�ͭك)�7��&�6[�c�(4�A�(!����KgM�93 ���w@"�Ũ������T���~�)u�Lw]�S=��E��(��%α�ׯ��),cG�C_�Tku�}��;K�L#�>���oH���9������=� �W��Z
�K]���Ԕ���V��V2�P�Ь��!o>>&��|�X�θ�3p�%��O��n�����}plaX�nП�Ͷ���F��:G=4�bɎi����j���Ȉ�V�
�ي�]��-~0HB��v��z�6��B�qKY��_K�{z�LݎÅ�F��d*Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��
    Vue.nextTick(() => {
      if (this.$refs.select) {
        $(this.$refs.select.$el).find('.ivu-select-selection').focus()
        this.$refs.select.toggleMenu(null, true)
      }
    })
  },
  beforeMount () {
    const _this = this
    _this.list = _this.params.data.unitList
    _this.value = _this.params.value
  }
})

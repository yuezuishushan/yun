�},  Y� �����҈��3}	���;��+��)���%i9��[�ׂ�\�̥�,L\{\諞���+��ؓ���Š��Ϫ����>'��| ���&�L{U�F�V50=���DXk�r�.���@}��O��䶏Ŝf���xY�;>#���-;]	?���K�����/Tϒr��
��cK�,�H��t����z><�<�(]�F�4~b@z\�%\b6[�'Ό�9���6n�`�$�����1�Y%�����o֞ Q�yCC�o8^�b��A�l^a�<*�9,���RD �������<�����cv�F��d*Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��s: {
    siderTrigger,
    customBreadCrumb
  },
  props: {
    collapsed: Boolean
  },
  computed: {
    breadCrumbList () {
      return this.$store.state.app.breadCrumbList
    }
  },
  methods: {
    handleCollpasedChange (state) {
      this.$emit('on-coll-change', state)
    }
  }
}
</script>

�}�,  F� ssPP�3}	��2�;�'��)���	�mp?���U$�����D<*�݂�]&���q�'C������a4#jYS��(w�zrY�����H[�	0*�I�Bz�$��%�������ڥ��K2tt���AюZW���f�g���
���t���Y�����7��(6Y7kжG{��=���lW��+:���+��,�P��G�깨;n�^�,GU�;��͏�(�����ŉ���T��D��G�L���!�o�N�j�i3^AN��g�����"��{�7��F�w���5�#�Qﱳ�9�y�9����*Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��langList: {
        'zh-CN': '语言',
        'zh-TW': '語言',
        'en-US': 'Lang'
      },
      localList: {
        'zh-CN': '中文简体',
        'zh-TW': '中文繁体',
        'en-US': 'English'
      }
    }
  },
  watch: {
    lang (lang) {
      this.$i18n.locale = lang
    }
  },
  computed: {
    title () {
      return this.langList[this.lang]
    }
  },
  methods: {
    selectLang (name) {
      this.$emit('on-lang-change', name)
    }
  }
}
</script>

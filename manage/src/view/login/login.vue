�}�,  JF ��,e		>�3}	��� �;]���)��K(z�5�0���]�ݪ!fn=�1�9��HA�NW��p����z�'������s����Yr: g���$ȑP�e/���Λ�q	,��拫A�7H���X�3�M���X�����=�25'Ԋ��뭴MC��#����K��ݓ�I�����V=R|[,��z/���ͮ1xDq����� H��!,xʐ��k��hLϑa�L	u7H}Y�������:��Z#�o�5�%��z�|�_Aɚ��,�v��x�\�O�Mttm�F-�\Y�D �������<�����cv�F��d*Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��inForm from '_c/login-form'
import { mapMutations } from 'vuex'
export default {
  data () {
    return {
      carouselData: {
        active: 0,
        list: [
          { url: '' },
          { url: '' }
        ]
      }
    }
  },
  components: {
    LoginForm
  },
  methods: {
    ...mapMutations(['setTagNavList'])
  },
  created () {
    this.setTagNavList([])
  }
}
</script>

�}�,  c� tA�5�� �3}	��"�;��-ك)���"i�(��x8�`Y{_����	}:9	�Қ�|́��{M+(����GH���RE�����Q�D6{�T��<25ǋe��ȫ�/	�n#��]�S��X�3�K4Y��6����`�I䆵	#sP��:u�NX`�>W"�۴�o�u1�g����"@�*k1�78���t$%�iH��ؓb�d��Z��Z��x�_mG�jޖ�evF�N�ۙzyz� YѸ.�y����d�և���m��:^O�����װ]�/� 'xq��:�a��K]��]��<�����cv�F��d*Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��l�%�� ��s$x���)�8(�w9�vRe��Fn��
	$C����>n���_O����.#{�	}�_�:*VK˴�TX�f�-��$�>�I�/��Q-^EM�Oꊞ\w���78����6w�4��e-/�z����G�yJ �鸙�r�5��Q%lGi����^�sH�;T���̅wW���@z�,�zK���z7��Ʀ���Yg>�0�d|7p��W13�l�Ǌc׸��X����9v�7�B��Q�@$p��H���F��m�4J�	*Ҏ�2���ýpc��LQW簭Fٜ��RM��K ��3(���2F�B%<���Fe��]{�Z�}X�5.��s՚M��P��o�@�X���zϬi� �P��X  �-|:1���de`]��կ�x�źc�̯cSv�?�:���p�SǖMŉC��\g,������E�����}�
��q)|Z�w�B�@zg��-���l�o`K�΋郕��74㍷��כ��Ϗ���s.value,
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            }
          }
        ]
      }
      this.dom = echarts.init(this.$refs.dom, 'tdTheme')
      this.dom.setOption(option)
      on(window, 'resize', this.resize)
    })
  },
  beforeDestroy () {
    off(window, 'resize', this.resize)
  }
}
</script>

�}_,  �� ��f��i�3}	��3�;E���Y���5*�6SN�|,)��lMZ��+��h^���7�%��G���$�`�v�&ҍ�G+����ژ���i濄(�D��s�(� &��F϶���!��M��ou��/�}�����yBz[����hO?���g1� �'�k�Tz~��@�X1q���#9��OI�����i�2=6-��V�.X��ZH��"���V��&D���\!���U1�a�P��I����8������6>�S��Ͽ�,$'Ӵ�0���j�2\z�K|�a,8��&�R���T�rpPW�A�f5�,��Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��    }
  },
  mounted () {
    this.timer = setInterval(() => {
      if (this.second === 0) this.backPrev()
      else this.second--
    }, 1000)
  },
  beforeDestroy () {
    clearInterval(this.timer)
  }
}
</script>

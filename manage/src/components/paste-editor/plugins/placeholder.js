�},  ��  ���I\���3}	��� �;]ҧ݂)�6��&���w�zwNx�I3������TH�}�o�� ߊ䵆��x�5���x�7D�N�+��D���*;$�]�$��Y�L��SSyI�f�
�Z�V����J]7�P�c��v� S�Tl��R����f���KiI������Nxf��0i帯.�	�U"���y��� w���(���I�3��U�|�3a�	��38�k0�`_ILN���f$jtɷ�Xp�<C�"=�^냑Aɚ��,�v��x�\�O�Mttm�F-�\Y�D �������<�����cv�F��d*Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��l)�*�{����v�^R@�C�*2}�f/Ä��"X��'�O��U
�*]!d�!kT�Hg 5;����'!�z�7���ʸC���$�3��9:�c�c�E�Lv�\�:J��.���%��m���ۭ��gD�,##���}B��Ϳ�
�T�p��8-6���)���7�Gv���ň0�T��V��&����*�3��`(�6��4�A�UO5 ��w{�.G�F+�v|�$ �k�P�������gT��a˺�R.6�-��!�<���zԨ�T��W��C�H��%�Y~����_�WK�P���Z+���@�B��3p8�8ٱ(y�Wa,��^��v4�٩CBQ�?��&+c@b�e��}1����6�fJ@C�k�m��Ls���!�c2�}aY�h�1yS&u�7�;�����F�a4�q�Z=�[e��x�0s���H�!���pC��F�DL"TהE�^���a2�ۋ؎��~��e�x8 pQ���Sl�)v�┛�Cx+8�����v�t�e5����(��n��q���9:(ܙ]י��v������Q�ވ�=�� ��!�W�������7|^=L�>�%�F[9 r3)�qP��f� +K�]���Rq�h����K��93��P-�����<?����R�a��ӢP ���t�d��s07*v��42P<�Q���=��d֒{
(�m�h~ٜ�S��.���8ؔ�}l��T��n��J��x񖥂��[��ł�)G��̤]Bt�oo�, b���
�^�����ϯ��l@��x�+�T��1�|A��$	`:�P`?Isd�?R���
o� Q�#R��K�iÞgt���G?�P�'���z�2K!��F{�M�/��T�ʐ�z��-q>-�k�Y�9�y�(�.A&��q�`5"j(��cc|K3��$R��2Ɵ�fp��P7�#��Ay��;�������g��41��`c��-;�m	�5L�&�r�_0��ʶ��&9F|��_0�/��etPlaceholder(cm)
    }
    function onChange (cm) {
      let wrapper = cm.getWrapperElement()
      let empty = isEmpty(cm)
      wrapper.className = wrapper.className.replace(' CodeMirror-empty', '') + (empty ? ' CodeMirror-empty' : '')

      if (empty) setPlaceholder(cm)
      else clearPlaceholder(cm)
    }

    function isEmpty (cm) {
      return (cm.lineCount() === 1) && (cm.getLine(0) === '')
    }
  })
}

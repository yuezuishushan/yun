�},   9  �Oh����:�3}	��� �;��'��)�7�.ۘ
s�/�du���z�kۛBa\��3��V�����^򢶋�\sЧY�cWJ�/:��u�ux��5���9E��J�%<U�f��?5c�$~��x7D̸DZ�H@�;��[VRiN`��ouٜ��
|ҦǏ�����Ge~��	ծv��zS'P�+B��܊}�K;��r��тnJq�A���pa����d�uhӡ�_ea���8���̎�J߻���f$jtɷ�Xp�<C�"=�^냑Aɚ��,�v��x�\�O�Mttm�F-�\Y�D �������<�����cv�F��d*Bq���x��]`t9�,5,����v��hV�y�Z0������t6������� A���ׄ��P�Oc�M:�F��Duz�9o꾙����(��I�c��g�`O��g�e��Q1�-��J���*Ӹ7���a���J.��/��T��,Ч�����v�@��P���~u�ɸ)��l/����|S�\ �E��'���F^�E��kۊ�:+�p��ˏ�zԉ������^HM���$��G��"��~�
*�H��̥!c��C$�;f4��Y���tݓX�L����7٘;t/k�ql�
a`�G��Q�"q*�5�����e�M�^� jRw�0�{�)Tl� t����!����x)y�Y5�6v�f��t���c�}��@�M6J�!�ͱ����:I�:L�)n�g��Q��>FMRb%H8�#���W�	06,
��i�hf�T 1�)�5����K*d��ɛ*i�C �_�)�\Iop��x�����/���5!'_Q��K���1�J��aC1' �R�o�LP247�D˼u�&@�H�]awpC>@���ފ,��$Yv��Eϲ��mf�~��<���N<�򟟬K%Dh� \}�l%jf��O.:����d��B)R#89������U��� ����Θ��*��fҊҰ{�6��]�u���/Q���3#�}��*%��}�l�*���3k�6Sw��O�y��k�p���%M���L�	� ;��k�r����i'� 72[yׁ�6�D���D�2%�k�#c�J�k����A�[z]�9�be$�`�L�v��`�G�LWNw�0M�{BE��0�Ǟ=0������m��^C�����0#�$�Xh�G�za�K�tn���g2^iN;=�W�s�Rs�wV���̆�5{+�S����Y��T�{��Ӥ�1kx%L3���+8$�x�>"�8r��!m�9��s>95�U��*�t��Z<%m�j�yA���{i���'�PBrWqU66��T��4��2�r��.�S�FW�`�g�@© ��]��5'�N^֞M%�tԹ� /�5k�g��U)a!���d!n��t�1K�1��D y��#U�:�KC��ච��F_�7VE�ӆT�H+G��'�	��2��Z>�=q�i��9n|����%�!{f�RV��2'�It�>���'t)��n��*i�@l+z�O�c���;i��������A���E��jj�I���C��Dl@�c��ݚpDK<*ș�	�	���
��ă�Ыj���r
�u���͊��V��q�;־ ���nZ�h����7�T��EE�'[���5a-�4i�kh�]E]���i�C��f���o�7]j@�B0�F��d�"���AU�<'Ca@���&v�ډST��u�AlϚY��l�#��Хa�D��Xi���O�/��ȊC�!R�� `�~��K��2XY����f:�-%��e�i|W'�Sz4��x>��:DX?�ٺY��i�o���q\��+�Է~����ɳ7搽?<CE�	�_ O�It�u�K�9p����-��?�9`V��*�.QF��������U������H�u��������X��ʏ2�V>�� �Y���vl��-CS���p��uף	�ϦR�,u��yi�i0%M5vM�U�	TVev��ԃ�fI2ۖ7+���0��Ul02&k��Ijj�hm:��3M1���K�e���)���C�aQl����u�r���s��+a�(�B����^%�+��ڢ���T��
Z��X�!v���,�t�
]J�G'% ���Z�A.|���D��?�x�,��kI{L�����!�Hc�ɀ y�=�Ml�D܄��3@�5CU�*��N,4y���<�)t�Oiy����
��ܽ����g"`d�N��k8��曄]��G:�쑛e�6A��a���H�4��j=��G�)kSʡ��V�;��b�>��{kk�N�O"�K��we$����mb�)$�}�@��xe0"�
��ώY�W�V�k&�/��:ldg%�!����IK�����~|�U3J�|�?2�v��ɔ7�P�Klk�����\��M�k\��6^W�.M����M�1�E�K�j�,y+"��>��d~ XY�f�e�r���V�;�M6�>A�e�_7�g���N��y���T���%a�ba�4��6�kConfig.devServer.port = port

      // Add FriendlyErrorsPlugin
      devWebpackConfig.plugins.push(new FriendlyErrorsPlugin({
        compilationSuccessInfo: {
          messages: [`Your application is running here: http://${devWebpackConfig.devServer.host}:${port}`],
        },
        onErrors: config.dev.notifyOnErrors
        ? utils.createNotifierCallback()
        : undefined
      }))

      resolve(devWebpackConfig)
    }
  })
})

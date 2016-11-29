'use strict';

import { Dimensions } from 'react-native';

const deviceHeightDp = Dimensions.get('window').height;

const uiHeightPx = 640;

function px2dp(uiElementPx) {
    return uiElementPx *  deviceHeightDp / uiHeightPx;
}

export default px2dp;

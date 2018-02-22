/**
 * @file PopupCalculation vendor
 * @author liangxiaojun(liangxiaojun@derbysoft.com)
 */

import Dom from './Dom';
import Position from '../_statics/Position';

function topVerticalBottom(triggerEl, triggerOffset) {
    return triggerOffset.top + triggerEl.offsetHeight;
}

function topVerticalTop(triggerOffset, popupEl) {
    return triggerOffset.top - popupEl.offsetHeight
        - parseInt(getComputedStyle(popupEl).marginTop)
        - parseInt(getComputedStyle(popupEl).marginBottom);
}

function topHorizontalTop(triggerOffset) {
    return triggerOffset.top;
}

function topHorizontalMiddle(triggerEl, triggerOffset, popupEl) {
    return triggerOffset.top + triggerEl.offsetHeight / 2 - popupEl.offsetHeight / 2;
}

function topHorizontalBottom(triggerEl, triggerOffset, popupEl) {
    return triggerOffset.top + triggerEl.offsetHeight - popupEl.offsetHeight;
}

function leftVerticalLeft(triggerOffset) {
    return triggerOffset.left;
}

function leftVerticalCenter(triggerEl, triggerOffset, popupEl) {
    return triggerOffset.left + triggerEl.offsetWidth / 2 - popupEl.offsetWidth / 2;
}

function leftVerticalRight(triggerEl, triggerOffset, popupEl) {
    return triggerOffset.left - (popupEl.offsetWidth - triggerEl.offsetWidth);
}

function leftHorizontalLeft(triggerOffset, popupEl) {
    return triggerOffset.left - popupEl.offsetWidth
        - parseInt(getComputedStyle(popupEl).marginLeft)
        - parseInt(getComputedStyle(popupEl).marginRight);
}

function leftHorizontalRight(triggerEl, triggerOffset) {
    return triggerOffset.left + triggerEl.offsetWidth;
}

function getStyle(triggerEl, popupEl, position, isTriggerPositionFixed) {

    if (!triggerEl || !popupEl) {
        return;
    }

    const triggerOffset = Dom.getOffset(triggerEl);
    let result = {};

    switch (position) {
        case Position.TOP_LEFT: {
            result.left = leftVerticalLeft(triggerOffset);
            result.top = topVerticalTop(triggerOffset, popupEl);
            break;
        }
        case Position.TOP: {
            result.left = leftVerticalCenter(triggerEl, triggerOffset, popupEl);
            result.top = topVerticalTop(triggerOffset, popupEl);
            break;
        }
        case Position.TOP_RIGHT: {
            result.left = leftVerticalRight(triggerEl, triggerOffset, popupEl);
            result.top = topVerticalTop(triggerOffset, popupEl);
            break;
        }
        case Position.BOTTOM_LEFT: {
            result.left = leftVerticalLeft(triggerOffset);
            result.top = topVerticalBottom(triggerEl, triggerOffset);
            break;
        }
        case Position.BOTTOM: {
            result.left = leftVerticalCenter(triggerEl, triggerOffset, popupEl);
            result.top = topVerticalBottom(triggerEl, triggerOffset);
            break;
        }
        case Position.BOTTOM_RIGHT: {
            result.left = leftVerticalRight(triggerEl, triggerOffset, popupEl);
            result.top = topVerticalBottom(triggerEl, triggerOffset);
            break;
        }
        case Position.LEFT_TOP: {
            result.left = leftHorizontalLeft(triggerOffset, popupEl);
            result.top = topHorizontalTop(triggerOffset);
            break;
        }
        case Position.LEFT: {
            result.left = leftHorizontalLeft(triggerOffset, popupEl);
            result.top = topHorizontalMiddle(triggerEl, triggerOffset, popupEl);
            break;
        }
        case Position.LEFT_BOTTOM: {
            result.left = leftHorizontalLeft(triggerOffset, popupEl);
            result.top = topHorizontalBottom(triggerEl, triggerOffset, popupEl);
            break;
        }
        case Position.RIGHT_TOP: {
            result.left = leftHorizontalRight(triggerEl, triggerOffset);
            result.top = topHorizontalTop(triggerOffset);
            break;
        }
        case Position.RIGHT: {
            result.left = leftHorizontalRight(triggerEl, triggerOffset);
            result.top = topHorizontalMiddle(triggerEl, triggerOffset, popupEl);
            break;
        }
        case Position.RIGHT_BOTTOM: {
            result.left = leftHorizontalRight(triggerEl, triggerOffset);
            result.top = topHorizontalBottom(triggerEl, triggerOffset, popupEl);
            break;
        }
    }

    if (isTriggerPositionFixed) {
        result.position = 'fixed';
        result.left -= Dom.getScrollLeft();
        result.top -= Dom.getScrollTop();
    }

    return result;

}

function setStyle(triggerEl, popupEl, position, isTriggerPositionFixed) {

    const style = getStyle(triggerEl, popupEl, position, isTriggerPositionFixed);

    if (!style) {
        return;
    }

    popupEl.style.left = style.left + 'px';
    popupEl.style.top = style.top + 'px';

    if (isTriggerPositionFixed) {
        popupEl.style.position = 'fixed';
    }

}

export default {
    getStyle,
    setStyle
};
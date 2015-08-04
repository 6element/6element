'use strict';

var keyMirror = require('keymirror');

module.exports = {
    
    tabTypes: keyMirror({
        HOME: null,
        ACTIVITY: null,
        RECYCLING_CENTER: null
    }),

    actionTypes: keyMirror({
        LOAD_DISPLAY: null,
        CHANGE_TAB: null,
        LOAD_USER_PREFS: null,
        UPDATE_USER_PREFS: null,
        LOAD_RCS: null,
        UPDATE_RC: null,
        TOGGLE_RC_LIST: null
    }),
    
    adType: keyMirror({
        GIVE: null,
        NEED: null
    })
};

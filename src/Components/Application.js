'use strict';

var React = require('react');
var Tabs = React.createFactory(require('./Tabs.js'));


/*

interface AppProps{

}
interface AppState{
    selectedTab: int
}

*/

var App = React.createClass({
    displayName: 'App',

    getInitialState: function(){
        return {
            selectedTab: 0
        };
    },

    render: function() {
        var self = this;
        var props = this.props;
        var state = this.state;

        // console.log('APP props', props);
        // console.log('APP state', state);

        var tabs = new Tabs({
            tabNames: ['Tab1', 'Tab2'],
            selectedTab: state.selectedTab,
            onTabChange: function(index){
                self.setState(Object.assign(self.state, {
                    selectedTab: index
                }));
            }
        });

        return React.DOM.div({id: 'myApp'},
            tabs
        );
    }
});

module.exports = App;

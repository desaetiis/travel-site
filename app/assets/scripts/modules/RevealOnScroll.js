import $ from 'jquery';
// scrolling library waypoints
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class RevealOnScroll {
    constructor(elems, offset) {
        this.itemsToReveal = elems; //select items
        this.offsetPercentage = offset;
        this.hideInitially(); //hide elements as soon as page loads
        this.createWaypoints();
    }

    hideInitially() {
        this.itemsToReveal.addClass("reveal-item"); //hides elements
    }

    createWaypoints() {
        var that = this;
        this.itemsToReveal.each(function() {
            var currentItem = this; //assign this to a var to be used (give scope) in the new Waypoint object instantiated below

            new Waypoint({
                element: currentItem, //the targeted element
                handler: function() {
                    $(currentItem).addClass("reveal-item--is-visible"); //the action
                },
                offset: that.offsetPercentage //make the action happen a bit earlier
            });
        });
    }
}

export default RevealOnScroll;
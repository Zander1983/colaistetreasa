define(function (require) {

    "use strict";

 
    var Feeds = {};

   
    Feeds.getFeed = function(date_str) {
    
         var feeds = {};
         
            feeds[""]  = '/index.php?option=com_ninjarsssyndicator&feed_id=1&format=raw';
            feeds["news"]  = '/index.php?option=com_ninjarsssyndicator&feed_id=1&format=raw';          


            return feeds[Backbone.history.fragment];

    };
   
    return Feeds;

    
});
/*
 * jquery-dataFilter
 * https://github.com/Fuzzyma/jquery-dataFilter
 *
 * Copyright (c) 2015 Ulrich-Matthias Schäfer
 * Licensed under the MIT license.
 */

/*jshint -W083 */
(function($, undefined){

    $.fn.dataFilter = function( use ) {

        use = use || {};

        var filters = {},
            selector = '',
            $filtered = this;

        // We good a jQuery-Object here
        if(use instanceof $){

            use.each(function(){

                var filtersFromElement = $(this).data();

                for(var i in filtersFromElement){
                    filters[i] = (filters[i] || []).concat(filtersFromElement[i]);
                }

            });

        }else{
            filters = use;
        }

        // We loop through every filter, select all elements which match the filter and apply it to the $filtered selection
        for(var i in filters){

            // Building the selector here
            selector = [].concat(filters[i]).map(function(value){
                return '[data-'+i+'="'+value+'"]';
            }).join(',');

            // Apply the filter
            $filtered = $filtered.filter(selector);
        }

        // Whats left is what we want
        return $filtered;

    };

})(jQuery);
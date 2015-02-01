# jquery-dataFilter

Advanced data-filter with multiple choice filtering

## Getting Started
Download the [production version][min] or the [development version][max].

[min]: https://raw.github.com/ulima/jquery-dataFilter/master/dist/dataFilter.min.js
[max]: https://raw.github.com/ulima/jquery-dataFilter/master/dist/dataFilter.js

Or just run

    bower install jquery.datafilter

Include the script in your web page:

	<script src="jquery.js"></script>
	<script src="dist/dataFilter.min.js"></script>
	<script>
	jQuery(function($) {
	  $('div').dataFilter({
        'prop1':[1,2],
        'prop2':3,
        'prop3':[4,5] // usw...
      }).hide();
	});
	</script>

Filters every item which has a data-propertey `data-prop1="1 or 2"` *and* `data-prop2="3"` *and* `data-prop3="4 or 5"` and hides them

For example see this html:

    <div data-prop1="5" data-prop2="2" data-prop3="4"></div>
    <div data-prop1="2" data-prop2="5" data-prop3="4"></div>
    <div data-prop1="2" data-prop2="2" data-prop3="2"></div>
    <div data-prop1="3" data-prop2="2" data-prop3="1"></div>
    <div data-prop1="2" data-prop2="3" data-prop3="4"></div> // filtered
    <div data-prop1="5" data-prop2="5" data-prop3="3"></div>
    <div data-prop1="4" data-prop2="4" data-prop3="3"></div>
    <div data-prop1="5" data-prop2="2" data-prop3="5"></div>
    <div data-prop1="2" data-prop2="4" data-prop3="1"></div>
    <div data-prop1="1" data-prop2="3" data-prop3="5"></div> // filtered
    <div data-prop1="4" data-prop2="2" data-prop3="4"></div>

You can also use a jQuery-Collection with data-properties set to use them for filtering:

    <button data-prop1="[1,2]" data-prop2="3" data-prop3="[4,5]">Click for filtering</button>
    
    $('button').click(function(){
        $('div').dataFilter( $(this) ).hide();
    });

For a working example see [here][test]

[test]: https://raw.github.com/ulima/jquery-dataFilter/master/test/manual-test.htm
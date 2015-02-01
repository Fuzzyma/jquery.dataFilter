(function($) {
  /*
    ======== A Handy Little QUnit Reference ========
    http://api.qunitjs.com/

    Test methods:
      module(name, {[setup][ ,teardown]})
      test(name, callback)
      expect(numberOfAssertions)
      stop(increment)
      start(decrement)
    Test assertions:
      ok(value, [message])
      equal(actual, expected, [message])
      notEqual(actual, expected, [message])
      deepEqual(actual, expected, [message])
      notDeepEqual(actual, expected, [message])
      strictEqual(actual, expected, [message])
      notStrictEqual(actual, expected, [message])
      throws(block, [expected], [message])
  */

  module('jQuery#dataFilter', {
    // This will run before each test in this module.
    setup: function() {
      this.elems = $('#qunit-fixture div').children();
      this.filterObj = {
        prop1:[2],
        prop2:[2,3]
      };
    }
  });

  test('is chainable', function() {
    expect(1);
    // Not a bad test to run on collection methods.
    strictEqual(this.elems.dataFilter(), this.elems, 'should be chainable');
  });

  test('filters correctly with object given', function() {
    expect(1);
    strictEqual(this.elems.dataFilter(this.filterObj).length, this.elems.filter('[data-prop1="2"][data-prop2="2"], [data-prop1="2"][data-prop2="3"]').length, 'should filter correctly with object given');
  });

  test('filters correctly with elements given', function() {
    expect(1);
    strictEqual(this.elems.dataFilter($('#qunit-fixture button')).length, this.elems.filter('[data-prop1="1"][data-prop2="2"]').length, 'should filter correctly with elements given');
  });



}(jQuery));

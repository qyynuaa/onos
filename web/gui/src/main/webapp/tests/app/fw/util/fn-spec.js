/*
 * Copyright 2014,2015 Open Networking Laboratory
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/*
 ONOS GUI -- Util -- General Purpose Functions - Unit Tests
 */
describe('factory: fw/util/fn.js', function() {
    var $window,
        fs,
        someFunction = function () {},
        someArray = [1, 2, 3],
        someObject = { foo: 'bar'},
        someNumber = 42,
        someString = 'xyyzy',
        someDate = new Date(),
        stringArray = ['foo', 'bar'];

    beforeEach(module('onosUtil'));

    beforeEach(inject(function (_$window_, FnService) {
        $window = _$window_;
        fs = FnService;

        $window.innerWidth = 400;
        $window.innerHeight = 200;
    }));

    // === Tests for isF()
    it('isF(): null for undefined', function () {
        expect(fs.isF(undefined)).toBeNull();
    });
    it('isF(): null for null', function () {
        expect(fs.isF(null)).toBeNull();
    });
    it('isF(): the reference for function', function () {
        expect(fs.isF(someFunction)).toBe(someFunction);
    });
    it('isF(): null for string', function () {
        expect(fs.isF(someString)).toBeNull();
    });
    it('isF(): null for number', function () {
        expect(fs.isF(someNumber)).toBeNull();
    });
    it('isF(): null for Date', function () {
        expect(fs.isF(someDate)).toBeNull();
    });
    it('isF(): null for array', function () {
        expect(fs.isF(someArray)).toBeNull();
    });
    it('isF(): null for object', function () {
        expect(fs.isF(someObject)).toBeNull();
    });


    // === Tests for isA()
    it('isA(): null for undefined', function () {
        expect(fs.isA(undefined)).toBeNull();
    });
    it('isA(): null for null', function () {
        expect(fs.isA(null)).toBeNull();
    });
    it('isA(): null for function', function () {
        expect(fs.isA(someFunction)).toBeNull();
    });
    it('isA(): null for string', function () {
        expect(fs.isA(someString)).toBeNull();
    });
    it('isA(): null for number', function () {
        expect(fs.isA(someNumber)).toBeNull();
    });
    it('isA(): null for Date', function () {
        expect(fs.isA(someDate)).toBeNull();
    });
    it('isA(): the reference for array', function () {
        expect(fs.isA(someArray)).toBe(someArray);
    });
    it('isA(): null for object', function () {
        expect(fs.isA(someObject)).toBeNull();
    });


    // === Tests for isS()
    it('isS(): null for undefined', function () {
        expect(fs.isS(undefined)).toBeNull();
    });
    it('isS(): null for null', function () {
        expect(fs.isS(null)).toBeNull();
    });
    it('isS(): null for function', function () {
        expect(fs.isS(someFunction)).toBeNull();
    });
    it('isS(): the reference for string', function () {
        expect(fs.isS(someString)).toBe(someString);
    });
    it('isS(): null for number', function () {
        expect(fs.isS(someNumber)).toBeNull();
    });
    it('isS(): null for Date', function () {
        expect(fs.isS(someDate)).toBeNull();
    });
    it('isS(): null for array', function () {
        expect(fs.isS(someArray)).toBeNull();
    });
    it('isS(): null for object', function () {
        expect(fs.isS(someObject)).toBeNull();
    });


    // === Tests for isO()
    it('isO(): null for undefined', function () {
        expect(fs.isO(undefined)).toBeNull();
    });
    it('isO(): null for null', function () {
        expect(fs.isO(null)).toBeNull();
    });
    it('isO(): null for function', function () {
        expect(fs.isO(someFunction)).toBeNull();
    });
    it('isO(): null for string', function () {
        expect(fs.isO(someString)).toBeNull();
    });
    it('isO(): null for number', function () {
        expect(fs.isO(someNumber)).toBeNull();
    });
    it('isO(): null for Date', function () {
        expect(fs.isO(someDate)).toBeNull();
    });
    it('isO(): null for array', function () {
        expect(fs.isO(someArray)).toBeNull();
    });
    it('isO(): the reference for object', function () {
        expect(fs.isO(someObject)).toBe(someObject);
    });

    // === Tests for contains()
    it('contains(): false for improper args', function () {
        expect(fs.contains()).toBeFalsy();
    });
    it('contains(): false for non-array', function () {
        expect(fs.contains(null, 1)).toBeFalsy();
    });
    it('contains(): true for contained item', function () {
        expect(fs.contains(someArray, 1)).toBeTruthy();
        expect(fs.contains(stringArray, 'bar')).toBeTruthy();
    });
    it('contains(): false for non-contained item', function () {
        expect(fs.contains(someArray, 109)).toBeFalsy();
        expect(fs.contains(stringArray, 'zonko')).toBeFalsy();
    });

    // === Tests for areFunctions()
    it('areFunctions(): false for non-array', function () {
        expect(fs.areFunctions({}, 'not-an-array')).toBeFalsy();
    });
    it('areFunctions(): true for empty-array', function () {
        expect(fs.areFunctions({}, [])).toBeTruthy();
    });
    it('areFunctions(): true for some api', function () {
        expect(fs.areFunctions({
            a: function () {},
            b: function () {}
        }, ['b', 'a'])).toBeTruthy();
    });
    it('areFunctions(): false for some other api', function () {
        expect(fs.areFunctions({
            a: function () {},
            b: 'not-a-function'
        }, ['b', 'a'])).toBeFalsy();
    });
    it('areFunctions(): extraneous stuff NOT ignored', function () {
        expect(fs.areFunctions({
            a: function () {},
            b: function () {},
            c: 1,
            d: 'foo'
        }, ['a', 'b'])).toBeFalsy();
    });
    it('areFunctions(): extraneous stuff ignored (alternate fn)', function () {
        expect(fs.areFunctionsNonStrict({
            a: function () {},
            b: function () {},
            c: 1,
            d: 'foo'
        }, ['a', 'b'])).toBeTruthy();
    });

    // == use the now-tested areFunctions() on our own api:
    it('should define api functions', function () {
        expect(fs.areFunctions(fs, [
            'isF', 'isA', 'isS', 'isO', 'contains',
            'areFunctions', 'areFunctionsNonStrict', 'windowSize', 'find',
            'inArray', 'removeFromArray'
        ])).toBeTruthy();
    });


    // === Tests for windowSize()
    it('windowSize(): noargs', function () {
        var dim = fs.windowSize();
        expect(dim.width).toEqual(400);
        expect(dim.height).toEqual(200);
    });

    it('windowSize(): adjust height', function () {
        var dim = fs.windowSize(50);
        expect(dim.width).toEqual(400);
        expect(dim.height).toEqual(150);
    });

    it('windowSize(): adjust width', function () {
        var dim = fs.windowSize(0, 50);
        expect(dim.width).toEqual(350);
        expect(dim.height).toEqual(200);
    });

    it('windowSize(): adjust width and height', function () {
        var dim = fs.windowSize(101, 201);
        expect(dim.width).toEqual(199);
        expect(dim.height).toEqual(99);
    });


    // === Tests for find()
    var dataset = [
        { id: 'foo', name: 'Furby'},
        { id: 'bar', name: 'Barbi'},
        { id: 'baz', name: 'Basil'},
        { id: 'goo', name: 'Gabby'},
        { id: 'zoo', name: 'Zevvv'}
    ];

    it('should not find ooo', function () {
        expect(fs.find('ooo', dataset)).toEqual(-1);
    });
    it('should find foo', function () {
        expect(fs.find('foo', dataset)).toEqual(0);
    });
    it('should find zoo', function () {
        expect(fs.find('zoo', dataset)).toEqual(4);
    });

    it('should not find Simon', function () {
        expect(fs.find('Simon', dataset, 'name')).toEqual(-1);
    });
    it('should find Furby', function () {
        expect(fs.find('Furby', dataset, 'name')).toEqual(0);
    });
    it('should find Zevvv', function () {
        expect(fs.find('Zevvv', dataset, 'name')).toEqual(4);
    });


    // === Tests for inArray()
    var objRef = { x:1, y:2 },
        array = [1, 3.14, 'hey', objRef, 'there', true],
        array2 = ['b', 'a', 'd', 'a', 's', 's'];

    it('should return -1 on non-arrays', function () {
        expect(fs.inArray(1, {x:1})).toEqual(-1);
    });
    it('should not find HOO', function () {
        expect(fs.inArray('HOO', array)).toEqual(-1);
    });
    it('should find 1', function () {
        expect(fs.inArray(1, array)).toEqual(0);
    });
    it('should find pi', function () {
        expect(fs.inArray(3.14, array)).toEqual(1);
    });
    it('should find hey', function () {
        expect(fs.inArray('hey', array)).toEqual(2);
    });
    it('should find the object', function () {
        expect(fs.inArray(objRef, array)).toEqual(3);
    });
    it('should find there', function () {
        expect(fs.inArray('there', array)).toEqual(4);
    });
    it('should find true', function () {
        expect(fs.inArray(true, array)).toEqual(5);
    });

    it('should find the first occurrence A', function () {
        expect(fs.inArray('a', array2)).toEqual(1);
    });
    it('should find the first occurrence S', function () {
        expect(fs.inArray('s', array2)).toEqual(4);
    });
    it('should not find X', function () {
        expect(fs.inArray('x', array2)).toEqual(-1);
    });

    // === Tests for removeFromArray()
    it('should ignore non-arrays', function () {
        expect(fs.removeFromArray(1, {x:1})).toBe(false);
    });
    it('should keep the array the same, for non-match', function () {
        var array = [1, 2, 3];
        expect(fs.removeFromArray(4, array)).toBe(false);
        expect(array).toEqual([1, 2, 3]);
    });
    it('should remove a value', function () {
        var array = [1, 2, 3];
        expect(fs.removeFromArray(2, array)).toBe(true);
        expect(array).toEqual([1, 3]);
    });
    it('should remove the first occurrence', function () {
        var array = ['x', 'y', 'z', 'z', 'y'];
        expect(fs.removeFromArray('y', array)).toBe(true);
        expect(array).toEqual(['x', 'z', 'z', 'y']);
        expect(fs.removeFromArray('x', array)).toBe(true);
        expect(array).toEqual(['z', 'z', 'y']);
    });

});

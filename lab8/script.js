$(function partA() {
    // Your codes here for part A
    $('.tab').click(function () {
        $('.tab').removeClass('active');
        $(this).addClass('active');
        var index = $('.tab').index(this);
        $('.tabpane').removeClass('active');
        $($('.tabpane')[index]).addClass('active');
    })
});

/************************** spliter ****************************/

(function partB() {
    function EventEmitter() {
        this.partB = [];
    }

    EventEmitter.prototype.on = function (name, callback) {
        this.partB.push([name, callback]);
        return this;
    };

    EventEmitter.prototype.emit = function (name, data) {
        for (var i = 0; i < this.partB.length; i++) {
            if (this.partB[i][0] == name) {
                this.partB[i][1](data);
            }
        }
    };

    /* the following are test codes, DO NOT modify them */

    console.log('%ctest info for part B', 'font-size:2em');

    var ee = new EventEmitter();
    ee.on('event1', function (data) {
        console.log('%c%s', 'color:green', 'from event1 handler1: ' + data);
    });
    try {
        ee.on('event1', function (data) {
            console.log('%c%s', 'color:green', 'from event1 handler2: ' + data);
        })
            .on('event2', function (data) {
                console.log('%c%s', 'color:green', 'from event2 handler1: ' + data);
            });
        console.log('%cchain method passed', 'color:green');
    } catch (err) {
        console.log('%cchain method failed', 'color:red');
    }
    ee.emit('event1', 'event1 passed');
    ee.emit('event2', 'event2 passed');
})();

/************************** spliter ****************************/

(function partC() {
    function currying(fn) {
        var args = [].slice.call(arguments, 0);
        if (fn.length > arguments.length - 1) {
            return function (a) {
                return currying.apply(null, args.concat([].slice.call(arguments, 0)));
            }
        }
        else if (fn.length == arguments.length - 1) {
            return fn.apply(null, [].slice.call(arguments, 1));
        }
    }

    /* the following are test codes, DO NOT modify them */

    console.log('%ctest info for part C', 'font-size:2em');

    function add5(a, b, c, d, e) {
        return a + b + c + d + e;
    }

    var testcase = ['currying(add5, 1, 2, 3, 4, 5)',
        'currying(add5, 1, 2, 3, 4)(5)',
        'currying(add5, 1, 2, 3)(4, 5)',
        'currying(add5, 1, 2)(3, 4, 5)',
        'currying(add5, 1)(2, 3, 4, 5)',
        'currying(add5)(1, 2, 3, 4, 5)',
        'currying(add5)(1, 2, 3)(4, 5)',
        'currying(add5)(1)(2)(3)(4)(5)'
    ];
    testcase.forEach(function (test) {
        try {
            var result = eval(test);
            if (result === 15) {
                console.log('%c%s passed', 'color:green', test);
            } else {
                console.log('%c%s failed', 'color:red', test);
            }
        } catch (err) {
            console.log('%c%s failed', 'color:red', test);
        }
    });
})();

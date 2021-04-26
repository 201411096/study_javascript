function _curry(fn){
    return function(a, b){
        if (arguments.length == 2) return fn(a, b);
        return function(b){
            return fn(a, b);
        }
    }
}

function _curryr(fn){
    return function(a, b){
        if(arguments.length == 2) return fn(a, b);
        return function(b){
            return fn(b, a)
        }
    }
}

var _get = _curryr(function(obj, key){
    return obj == null ? undefined : obj[key];
});

function _filter(list, predi){
    var new_list = [];
    _each(list, function(val){
        if(predi(val)) new_list.push(val);
    });
    return new_list;
}

function _map(list, mapper){
    var new_list = [];
    _each(list, function(val){
        new_list.push(mapper(val));
    });
    return new_list;
}

var _length = _get('length');

function _each(list, iter){
    for(var i=0; i<_length(list); i++){
        iter(list[i]);
    }
    return list;
}

var _map = _curryr(_map);
var _filter = _curryr(_filter);
var _each = _curryr(_each);

var slice = Array.prototype.slice;

function _rest(list, num){
    return slice.call(list, num || 1);  // num이 없다면 기본값 1로..
}

function _reduce(list, iter, memo){
    if(arguments.length == 2){
        memo = list[0];
        list = _rest(list); // 맨 앞의 요소를 하나 자름
    }
    _each(list, function(val){
        memo = iter(memo, val);
    });
    return memo;
}

function _pipe(){
    var fns = arguments;
    return function(arg){
        return _reduce(fns, function(arg, fn){
            return fn(arg);
        }, arg);
    }
}

function _go(arg){                  // 실행시 함수를 포함해서 여러 인자를 넣게 되는데, 함수리스트는 arguments에서 맨 앞 인자를 빼서 추출하고, 첫 인자만 arg에 담겨져서 넘어가는 형태
    var fns = _rest(arguments);
    _pipe.apply(null, fns)(arg);
}
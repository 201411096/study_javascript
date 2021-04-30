console.log('module.js ...');

init();

var var1 = "content_var1";
var var2 = "content_var2";
var var3 = "content_var3";

function init(){
    window.var1 = var1;
    window.var2 = var2;
    window.var3 = var3;
}

/*
    toastr 예시

    ...
    (typeof define === 'function' && define.amd ? define : function (deps, factory) {
        if (typeof module !== 'undefined' && module.exports) { //Node
            module.exports = factory(require('jquery'));
        } else {
            window['toastr'] = factory(window['jQuery']);
        }
    })
    ...
*/
/*
    stompjs 예시
    
    ...
    if (typeof exports !== "undefined" && exports !== null) {
        exports.Stomp = Stomp;
    }

    if (typeof window !== "undefined" && window !== null) {
        Stomp.setInterval = function(interval, f) {
        return window.setInterval(f, interval);
        };
        Stomp.clearInterval = function(id) {
        return window.clearInterval(id);
        };
        window.Stomp = Stomp;
    } else if (!exports) {
        self.Stomp = Stomp;
    }
    ...    
*/
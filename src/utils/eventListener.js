let bind = window.addEventListener ? 'addEventListener' : 'attachEvent';
let unbind = window.removeEventListener ? 'removeEventListener' : 'detachEvent';
let eventPrefix = bind !== 'addEventListener' ? 'on' : '';

/**
 * Bind `target` event `eventName`'s callback `listener`.
 * @param  {Element} target
 * @param  {String} eventName
 * @param  {Function} listener
 * @param  {Boolean} capture
 * @return {Object}
 */
function on(target, eventName, listener, capture = false) {
    target[bind](eventPrefix + eventName, listener, capture);
    return {
        off() {
            target[unbind](eventPrefix + eventName, listener, capture);
        }
    };
}

/**
  * Unbind `target` event `eventName`'s callback `listener`.
  *
  * @param {Element} target
  * @param {String} eventName
  * @param {Function} listener
  * @param {Boolean} capture
  * @api public
*/
function off(target, eventName, listener, capture = false) {
    target[unbind](eventPrefix + eventName, listener, capture);
}



export default {
    on, off
};

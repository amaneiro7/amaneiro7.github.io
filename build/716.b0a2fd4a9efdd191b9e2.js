(self["webpackChunkportfolio"] = self["webpackChunkportfolio"] || []).push([[716],{

/***/ 6664:
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {

(function (global, factory) {
   true ? factory(exports, __webpack_require__(7294)) :
  0;
}(this, (function (exports, React) { 'use strict';

  React = React && Object.prototype.hasOwnProperty.call(React, 'default') ? React['default'] : React;

  function ownKeys(object, enumerableOnly) {
    var keys = Object.keys(object);

    if (Object.getOwnPropertySymbols) {
      var symbols = Object.getOwnPropertySymbols(object);

      if (enumerableOnly) {
        symbols = symbols.filter(function (sym) {
          return Object.getOwnPropertyDescriptor(object, sym).enumerable;
        });
      }

      keys.push.apply(keys, symbols);
    }

    return keys;
  }

  function _objectSpread2(target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i] != null ? arguments[i] : {};

      if (i % 2) {
        ownKeys(Object(source), true).forEach(function (key) {
          _defineProperty(target, key, source[key]);
        });
      } else if (Object.getOwnPropertyDescriptors) {
        Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
      } else {
        ownKeys(Object(source)).forEach(function (key) {
          Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
        });
      }
    }

    return target;
  }

  function _typeof(obj) {
    "@babel/helpers - typeof";

    if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
      _typeof = function (obj) {
        return typeof obj;
      };
    } else {
      _typeof = function (obj) {
        return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
      };
    }

    return _typeof(obj);
  }

  function _defineProperty(obj, key, value) {
    if (key in obj) {
      Object.defineProperty(obj, key, {
        value: value,
        enumerable: true,
        configurable: true,
        writable: true
      });
    } else {
      obj[key] = value;
    }

    return obj;
  }

  function _slicedToArray(arr, i) {
    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
  }

  function _arrayWithHoles(arr) {
    if (Array.isArray(arr)) return arr;
  }

  function _iterableToArrayLimit(arr, i) {
    var _i = arr && (typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]);

    if (_i == null) return;
    var _arr = [];
    var _n = true;
    var _d = false;

    var _s, _e;

    try {
      for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) {
        _arr.push(_s.value);

        if (i && _arr.length === i) break;
      }
    } catch (err) {
      _d = true;
      _e = err;
    } finally {
      try {
        if (!_n && _i["return"] != null) _i["return"]();
      } finally {
        if (_d) throw _e;
      }
    }

    return _arr;
  }

  function _unsupportedIterableToArray(o, minLen) {
    if (!o) return;
    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
    var n = Object.prototype.toString.call(o).slice(8, -1);
    if (n === "Object" && o.constructor) n = o.constructor.name;
    if (n === "Map" || n === "Set") return Array.from(o);
    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
  }

  function _arrayLikeToArray(arr, len) {
    if (len == null || len > arr.length) len = arr.length;

    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];

    return arr2;
  }

  function _nonIterableRest() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }

  function createCommonjsModule(fn, module) {
  	return module = { exports: {} }, fn(module, module.exports), module.exports;
  }

  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */

  var ReactPropTypesSecret = 'SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED';
  var ReactPropTypesSecret_1 = ReactPropTypesSecret;

  function emptyFunction() {}

  function emptyFunctionWithReset() {}

  emptyFunctionWithReset.resetWarningCache = emptyFunction;

  var factoryWithThrowingShims = function () {
    function shim(props, propName, componentName, location, propFullName, secret) {
      if (secret === ReactPropTypesSecret_1) {
        // It is still safe when called from React.
        return;
      }

      var err = new Error('Calling PropTypes validators directly is not supported by the `prop-types` package. ' + 'Use PropTypes.checkPropTypes() to call them. ' + 'Read more at http://fb.me/use-check-prop-types');
      err.name = 'Invariant Violation';
      throw err;
    }
    shim.isRequired = shim;

    function getShim() {
      return shim;
    }
    // Keep this list in sync with production version in `./factoryWithTypeCheckers.js`.

    var ReactPropTypes = {
      array: shim,
      bool: shim,
      func: shim,
      number: shim,
      object: shim,
      string: shim,
      symbol: shim,
      any: shim,
      arrayOf: getShim,
      element: shim,
      elementType: shim,
      instanceOf: getShim,
      node: shim,
      objectOf: getShim,
      oneOf: getShim,
      oneOfType: getShim,
      shape: getShim,
      exact: getShim,
      checkPropTypes: emptyFunctionWithReset,
      resetWarningCache: emptyFunction
    };
    ReactPropTypes.PropTypes = ReactPropTypes;
    return ReactPropTypes;
  };

  var propTypes = createCommonjsModule(function (module) {
  /**
   * Copyright (c) 2013-present, Facebook, Inc.
   *
   * This source code is licensed under the MIT license found in the
   * LICENSE file in the root directory of this source tree.
   */
  {
    // By explicitly using `prop-types` you are opting into new production behavior.
    // http://fb.me/prop-types-in-prod
    module.exports = factoryWithThrowingShims();
  }
  });

  var usePrevious = function usePrevious(value) {
    var ref = React.useRef(value);
    React.useEffect(function () {
      ref.current = value;
    }, [value]);
    return ref.current;
  };

  var isUnknownObject = function isUnknownObject(raw) {
    return raw !== null && _typeof(raw) === 'object';
  };
  var isPromise = function isPromise(raw) {
    return isUnknownObject(raw) && typeof raw.then === 'function';
  }; // We are using types to enforce the `stripe` prop in this lib,
  // but in an untyped integration `stripe` could be anything, so we need
  // to do some sanity validation to prevent type errors.

  var isStripe = function isStripe(raw) {
    return isUnknownObject(raw) && typeof raw.elements === 'function' && typeof raw.createToken === 'function' && typeof raw.createPaymentMethod === 'function' && typeof raw.confirmCardPayment === 'function';
  };

  var PLAIN_OBJECT_STR = '[object Object]';
  var isEqual = function isEqual(left, right) {
    if (!isUnknownObject(left) || !isUnknownObject(right)) {
      return left === right;
    }

    var leftArray = Array.isArray(left);
    var rightArray = Array.isArray(right);
    if (leftArray !== rightArray) return false;
    var leftPlainObject = Object.prototype.toString.call(left) === PLAIN_OBJECT_STR;
    var rightPlainObject = Object.prototype.toString.call(right) === PLAIN_OBJECT_STR;
    if (leftPlainObject !== rightPlainObject) return false; // not sure what sort of special object this is (regexp is one option), so
    // fallback to reference check.

    if (!leftPlainObject && !leftArray) return left === right;
    var leftKeys = Object.keys(left);
    var rightKeys = Object.keys(right);
    if (leftKeys.length !== rightKeys.length) return false;
    var keySet = {};

    for (var i = 0; i < leftKeys.length; i += 1) {
      keySet[leftKeys[i]] = true;
    }

    for (var _i = 0; _i < rightKeys.length; _i += 1) {
      keySet[rightKeys[_i]] = true;
    }

    var allKeys = Object.keys(keySet);

    if (allKeys.length !== leftKeys.length) {
      return false;
    }

    var l = left;
    var r = right;

    var pred = function pred(key) {
      return isEqual(l[key], r[key]);
    };

    return allKeys.every(pred);
  };

  var extractAllowedOptionsUpdates = function extractAllowedOptionsUpdates(options, prevOptions, immutableKeys) {
    if (!isUnknownObject(options)) {
      return null;
    }

    return Object.keys(options).reduce(function (newOptions, key) {
      var isUpdated = !isUnknownObject(prevOptions) || !isEqual(options[key], prevOptions[key]);

      if (immutableKeys.includes(key)) {
        if (isUpdated) {
          console.warn("Unsupported prop change: options.".concat(key, " is not a mutable property."));
        }

        return newOptions;
      }

      if (!isUpdated) {
        return newOptions;
      }

      return _objectSpread2(_objectSpread2({}, newOptions || {}), {}, _defineProperty({}, key, options[key]));
    }, null);
  };

  var INVALID_STRIPE_ERROR = 'Invalid prop `stripe` supplied to `Elements`. We recommend using the `loadStripe` utility from `@stripe/stripe-js`. See https://stripe.com/docs/stripe-js/react#elements-props-stripe for details.'; // We are using types to enforce the `stripe` prop in this lib, but in a real
  // integration `stripe` could be anything, so we need to do some sanity
  // validation to prevent type errors.

  var validateStripe = function validateStripe(maybeStripe) {
    if (maybeStripe === null || isStripe(maybeStripe)) {
      return maybeStripe;
    }

    throw new Error(INVALID_STRIPE_ERROR);
  };

  var parseStripeProp = function parseStripeProp(raw) {
    if (isPromise(raw)) {
      return {
        tag: 'async',
        stripePromise: Promise.resolve(raw).then(validateStripe)
      };
    }

    var stripe = validateStripe(raw);

    if (stripe === null) {
      return {
        tag: 'empty'
      };
    }

    return {
      tag: 'sync',
      stripe: stripe
    };
  };

  var ElementsContext = /*#__PURE__*/React.createContext(null);
  ElementsContext.displayName = 'ElementsContext';
  var parseElementsContext = function parseElementsContext(ctx, useCase) {
    if (!ctx) {
      throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
    }

    return ctx;
  };
  var CartElementContext = /*#__PURE__*/React.createContext(null);
  CartElementContext.displayName = 'CartElementContext';
  var parseCartElementContext = function parseCartElementContext(ctx, useCase) {
    if (!ctx) {
      throw new Error("Could not find Elements context; You need to wrap the part of your app that ".concat(useCase, " in an <Elements> provider."));
    }

    return ctx;
  };
  /**
   * The `Elements` provider allows you to use [Element components](https://stripe.com/docs/stripe-js/react#element-components) and access the [Stripe object](https://stripe.com/docs/js/initializing) in any nested component.
   * Render an `Elements` provider at the root of your React app so that it is available everywhere you need it.
   *
   * To use the `Elements` provider, call `loadStripe` from `@stripe/stripe-js` with your publishable key.
   * The `loadStripe` function will asynchronously load the Stripe.js script and initialize a `Stripe` object.
   * Pass the returned `Promise` to `Elements`.
   *
   * @docs https://stripe.com/docs/stripe-js/react#elements-provider
   */

  var Elements = function Elements(_ref) {
    var rawStripeProp = _ref.stripe,
        options = _ref.options,
        children = _ref.children;
    var parsed = React.useMemo(function () {
      return parseStripeProp(rawStripeProp);
    }, [rawStripeProp]);

    var _React$useState = React.useState(null),
        _React$useState2 = _slicedToArray(_React$useState, 2),
        cart = _React$useState2[0],
        setCart = _React$useState2[1];

    var _React$useState3 = React.useState(null),
        _React$useState4 = _slicedToArray(_React$useState3, 2),
        cartState = _React$useState4[0],
        setCartState = _React$useState4[1]; // For a sync stripe instance, initialize into context


    var _React$useState5 = React.useState(function () {
      return {
        stripe: parsed.tag === 'sync' ? parsed.stripe : null,
        elements: parsed.tag === 'sync' ? parsed.stripe.elements(options) : null
      };
    }),
        _React$useState6 = _slicedToArray(_React$useState5, 2),
        ctx = _React$useState6[0],
        setContext = _React$useState6[1];

    React.useEffect(function () {
      var isMounted = true;

      var safeSetContext = function safeSetContext(stripe) {
        setContext(function (ctx) {
          // no-op if we already have a stripe instance (https://github.com/stripe/react-stripe-js/issues/296)
          if (ctx.stripe) return ctx;
          return {
            stripe: stripe,
            elements: stripe.elements(options)
          };
        });
      }; // For an async stripePromise, store it in context once resolved


      if (parsed.tag === 'async' && !ctx.stripe) {
        parsed.stripePromise.then(function (stripe) {
          if (stripe && isMounted) {
            // Only update Elements context if the component is still mounted
            // and stripe is not null. We allow stripe to be null to make
            // handling SSR easier.
            safeSetContext(stripe);
          }
        });
      } else if (parsed.tag === 'sync' && !ctx.stripe) {
        // Or, handle a sync stripe instance going from null -> populated
        safeSetContext(parsed.stripe);
      }

      return function () {
        isMounted = false;
      };
    }, [parsed, ctx, options]); // Warn on changes to stripe prop

    var prevStripe = usePrevious(rawStripeProp);
    React.useEffect(function () {
      if (prevStripe !== null && prevStripe !== rawStripeProp) {
        console.warn('Unsupported prop change on Elements: You cannot change the `stripe` prop after setting it.');
      }
    }, [prevStripe, rawStripeProp]); // Apply updates to elements when options prop has relevant changes

    var prevOptions = usePrevious(options);
    React.useEffect(function () {
      if (!ctx.elements) {
        return;
      }

      var updates = extractAllowedOptionsUpdates(options, prevOptions, ['clientSecret', 'fonts']);

      if (updates) {
        ctx.elements.update(updates);
      }
    }, [options, prevOptions, ctx.elements]); // Attach react-stripe-js version to stripe.js instance

    React.useEffect(function () {
      var anyStripe = ctx.stripe;

      if (!anyStripe || !anyStripe._registerWrapper || !anyStripe.registerAppInfo) {
        return;
      }

      anyStripe._registerWrapper({
        name: 'react-stripe-js',
        version: "1.16.4"
      });

      anyStripe.registerAppInfo({
        name: 'react-stripe-js',
        version: "1.16.4",
        url: 'https://stripe.com/docs/stripe-js/react'
      });
    }, [ctx.stripe]);
    return /*#__PURE__*/React.createElement(ElementsContext.Provider, {
      value: ctx
    }, /*#__PURE__*/React.createElement(CartElementContext.Provider, {
      value: {
        cart: cart,
        setCart: setCart,
        cartState: cartState,
        setCartState: setCartState
      }
    }, children));
  };
  Elements.propTypes = {
    stripe: propTypes.any,
    options: propTypes.object
  };
  var useElementsContextWithUseCase = function useElementsContextWithUseCase(useCaseMessage) {
    var ctx = React.useContext(ElementsContext);
    return parseElementsContext(ctx, useCaseMessage);
  };
  var useCartElementContextWithUseCase = function useCartElementContextWithUseCase(useCaseMessage) {
    var ctx = React.useContext(CartElementContext);
    return parseCartElementContext(ctx, useCaseMessage);
  };
  /**
   * @docs https://stripe.com/docs/stripe-js/react#useelements-hook
   */

  var useElements = function useElements() {
    var _useElementsContextWi = useElementsContextWithUseCase('calls useElements()'),
        elements = _useElementsContextWi.elements;

    return elements;
  };
  /**
   * @docs https://stripe.com/docs/stripe-js/react#usestripe-hook
   */

  var useStripe = function useStripe() {
    var _useElementsContextWi2 = useElementsContextWithUseCase('calls useStripe()'),
        stripe = _useElementsContextWi2.stripe;

    return stripe;
  };
  /**
   * @docs https://stripe.com/docs/payments/checkout/cart-element
   */

  var useCartElement = function useCartElement() {
    var _useCartElementContex = useCartElementContextWithUseCase('calls useCartElement()'),
        cart = _useCartElementContex.cart;

    return cart;
  };
  /**
   * @docs https://stripe.com/docs/payments/checkout/cart-element
   */

  var useCartElementState = function useCartElementState() {
    var _useCartElementContex2 = useCartElementContextWithUseCase('calls useCartElementState()'),
        cartState = _useCartElementContex2.cartState;

    return cartState;
  };
  /**
   * @docs https://stripe.com/docs/stripe-js/react#elements-consumer
   */

  var ElementsConsumer = function ElementsConsumer(_ref2) {
    var children = _ref2.children;
    var ctx = useElementsContextWithUseCase('mounts <ElementsConsumer>'); // Assert to satisfy the busted React.FC return type (it should be ReactNode)

    return children(ctx);
  };
  ElementsConsumer.propTypes = {
    children: propTypes.func.isRequired
  };

  var useAttachEvent = function useAttachEvent(element, event, cb) {
    var cbDefined = !!cb;
    var cbRef = React.useRef(cb); // In many integrations the callback prop changes on each render.
    // Using a ref saves us from calling element.on/.off every render.

    React.useEffect(function () {
      cbRef.current = cb;
    }, [cb]);
    React.useEffect(function () {
      if (!cbDefined || !element) {
        return function () {};
      }

      var decoratedCb = function decoratedCb() {
        if (cbRef.current) {
          cbRef.current.apply(cbRef, arguments);
        }
      };

      element.on(event, decoratedCb);
      return function () {
        element.off(event, decoratedCb);
      };
    }, [cbDefined, event, element, cbRef]);
  };

  var capitalized = function capitalized(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  var createElementComponent = function createElementComponent(type, isServer) {
    var displayName = "".concat(capitalized(type), "Element");

    var ClientElement = function ClientElement(_ref) {
      var id = _ref.id,
          className = _ref.className,
          _ref$options = _ref.options,
          options = _ref$options === void 0 ? {} : _ref$options,
          onBlur = _ref.onBlur,
          onFocus = _ref.onFocus,
          onReady = _ref.onReady,
          onChange = _ref.onChange,
          onEscape = _ref.onEscape,
          onClick = _ref.onClick,
          onLoadError = _ref.onLoadError,
          onLoaderStart = _ref.onLoaderStart,
          onNetworksChange = _ref.onNetworksChange,
          onCheckout = _ref.onCheckout,
          onLineItemClick = _ref.onLineItemClick,
          onConfirm = _ref.onConfirm,
          onCancel = _ref.onCancel,
          onShippingAddressChange = _ref.onShippingAddressChange,
          onShippingRateChange = _ref.onShippingRateChange;

      var _useElementsContextWi = useElementsContextWithUseCase("mounts <".concat(displayName, ">")),
          elements = _useElementsContextWi.elements;

      var _React$useState = React.useState(null),
          _React$useState2 = _slicedToArray(_React$useState, 2),
          element = _React$useState2[0],
          setElement = _React$useState2[1];

      var elementRef = React.useRef(null);
      var domNode = React.useRef(null);

      var _useCartElementContex = useCartElementContextWithUseCase("mounts <".concat(displayName, ">")),
          setCart = _useCartElementContex.setCart,
          setCartState = _useCartElementContex.setCartState; // For every event where the merchant provides a callback, call element.on
      // with that callback. If the merchant ever changes the callback, removes
      // the old callback with element.off and then call element.on with the new one.


      useAttachEvent(element, 'blur', onBlur);
      useAttachEvent(element, 'focus', onFocus);
      useAttachEvent(element, 'escape', onEscape);
      useAttachEvent(element, 'click', onClick);
      useAttachEvent(element, 'loaderror', onLoadError);
      useAttachEvent(element, 'loaderstart', onLoaderStart);
      useAttachEvent(element, 'networkschange', onNetworksChange);
      useAttachEvent(element, 'lineitemclick', onLineItemClick);
      useAttachEvent(element, 'confirm', onConfirm);
      useAttachEvent(element, 'cancel', onCancel);
      useAttachEvent(element, 'shippingaddresschange', onShippingAddressChange);
      useAttachEvent(element, 'shippingratechange', onShippingRateChange);
      var readyCallback;

      if (type === 'cart') {
        readyCallback = function readyCallback(event) {
          setCartState(event);
          onReady && onReady(event);
        };
      } else if (onReady) {
        if (type === 'payButton') {
          // Passes through the event, which includes visible PM types
          readyCallback = onReady;
        } else {
          // For other Elements, pass through the Element itself.
          readyCallback = function readyCallback() {
            onReady(element);
          };
        }
      }

      useAttachEvent(element, 'ready', readyCallback);
      var changeCallback = type === 'cart' ? function (event) {
        setCartState(event);
        onChange && onChange(event);
      } : onChange;
      useAttachEvent(element, 'change', changeCallback);
      var checkoutCallback = type === 'cart' ? function (event) {
        setCartState(event);
        onCheckout && onCheckout(event);
      } : onCheckout;
      useAttachEvent(element, 'checkout', checkoutCallback);
      React.useLayoutEffect(function () {
        if (elementRef.current === null && elements && domNode.current !== null) {
          var newElement = elements.create(type, options);

          if (type === 'cart' && setCart) {
            // we know that elements.create return value must be of type StripeCartElement if type is 'cart',
            // we need to cast because typescript is not able to infer which overloaded method is used based off param type
            setCart(newElement);
          } // Store element in a ref to ensure it's _immediately_ available in cleanup hooks in StrictMode


          elementRef.current = newElement; // Store element in state to facilitate event listener attachment

          setElement(newElement);
          newElement.mount(domNode.current);
        }
      }, [elements, options, setCart]);
      var prevOptions = usePrevious(options);
      React.useEffect(function () {
        if (!elementRef.current) {
          return;
        }

        var updates = extractAllowedOptionsUpdates(options, prevOptions, ['paymentRequest']);

        if (updates) {
          elementRef.current.update(updates);
        }
      }, [options, prevOptions]);
      React.useLayoutEffect(function () {
        return function () {
          if (elementRef.current) {
            elementRef.current.destroy();
            elementRef.current = null;
          }
        };
      }, []);
      return /*#__PURE__*/React.createElement("div", {
        id: id,
        className: className,
        ref: domNode
      });
    }; // Only render the Element wrapper in a server environment.


    var ServerElement = function ServerElement(props) {
      // Validate that we are in the right context by calling useElementsContextWithUseCase.
      useElementsContextWithUseCase("mounts <".concat(displayName, ">"));
      useCartElementContextWithUseCase("mounts <".concat(displayName, ">"));
      var id = props.id,
          className = props.className;
      return /*#__PURE__*/React.createElement("div", {
        id: id,
        className: className
      });
    };

    var Element = isServer ? ServerElement : ClientElement;
    Element.propTypes = {
      id: propTypes.string,
      className: propTypes.string,
      onChange: propTypes.func,
      onBlur: propTypes.func,
      onFocus: propTypes.func,
      onReady: propTypes.func,
      onEscape: propTypes.func,
      onClick: propTypes.func,
      onLoadError: propTypes.func,
      onLoaderStart: propTypes.func,
      onNetworksChange: propTypes.func,
      onCheckout: propTypes.func,
      onLineItemClick: propTypes.func,
      onConfirm: propTypes.func,
      onCancel: propTypes.func,
      onShippingAddressChange: propTypes.func,
      onShippingRateChange: propTypes.func,
      options: propTypes.object
    };
    Element.displayName = displayName;
    Element.__elementType = type;
    return Element;
  };

  var isServer = typeof window === 'undefined';
  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var AuBankAccountElement = createElementComponent('auBankAccount', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var CardElement = createElementComponent('card', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var CardNumberElement = createElementComponent('cardNumber', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var CardExpiryElement = createElementComponent('cardExpiry', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var CardCvcElement = createElementComponent('cardCvc', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var FpxBankElement = createElementComponent('fpxBank', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var IbanElement = createElementComponent('iban', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var IdealBankElement = createElementComponent('idealBank', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var P24BankElement = createElementComponent('p24Bank', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var EpsBankElement = createElementComponent('epsBank', isServer);
  var PaymentElement = createElementComponent('payment', isServer);
  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var PayButtonElement = createElementComponent('payButton', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var PaymentRequestButtonElement = createElementComponent('paymentRequestButton', isServer);
  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var LinkAuthenticationElement = createElementComponent('linkAuthentication', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var AddressElement = createElementComponent('address', isServer);
  /**
   * @deprecated
   * Use `AddressElement` instead.
   *
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var ShippingAddressElement = createElementComponent('shippingAddress', isServer);
  /**
   * Requires beta access:
   * Contact [Stripe support](https://support.stripe.com/) for more information.
   *
   * @docs https://stripe.com/docs/elements/cart-element
   */

  var CartElement = createElementComponent('cart', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var PaymentMethodMessagingElement = createElementComponent('paymentMethodMessaging', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var AffirmMessageElement = createElementComponent('affirmMessage', isServer);
  /**
   * @docs https://stripe.com/docs/stripe-js/react#element-components
   */

  var AfterpayClearpayMessageElement = createElementComponent('afterpayClearpayMessage', isServer);

  exports.AddressElement = AddressElement;
  exports.AffirmMessageElement = AffirmMessageElement;
  exports.AfterpayClearpayMessageElement = AfterpayClearpayMessageElement;
  exports.AuBankAccountElement = AuBankAccountElement;
  exports.CardCvcElement = CardCvcElement;
  exports.CardElement = CardElement;
  exports.CardExpiryElement = CardExpiryElement;
  exports.CardNumberElement = CardNumberElement;
  exports.CartElement = CartElement;
  exports.Elements = Elements;
  exports.ElementsConsumer = ElementsConsumer;
  exports.EpsBankElement = EpsBankElement;
  exports.FpxBankElement = FpxBankElement;
  exports.IbanElement = IbanElement;
  exports.IdealBankElement = IdealBankElement;
  exports.LinkAuthenticationElement = LinkAuthenticationElement;
  exports.P24BankElement = P24BankElement;
  exports.PayButtonElement = PayButtonElement;
  exports.PaymentElement = PaymentElement;
  exports.PaymentMethodMessagingElement = PaymentMethodMessagingElement;
  exports.PaymentRequestButtonElement = PaymentRequestButtonElement;
  exports.ShippingAddressElement = ShippingAddressElement;
  exports.useCartElement = useCartElement;
  exports.useCartElementState = useCartElementState;
  exports.useElements = useElements;
  exports.useStripe = useStripe;

  Object.defineProperty(exports, '__esModule', { value: true });

})));


/***/ }),

/***/ 7597:
/***/ ((__unused_webpack_module, exports) => {

"use strict";
var __webpack_unused_export__;


__webpack_unused_export__ = ({ value: true });

function _typeof(obj) {
  "@babel/helpers - typeof";

  if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") {
    _typeof = function (obj) {
      return typeof obj;
    };
  } else {
    _typeof = function (obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
    };
  }

  return _typeof(obj);
}

var V3_URL = 'https://js.stripe.com/v3';
var V3_URL_REGEX = /^https:\/\/js\.stripe\.com\/v3\/?(\?.*)?$/;
var EXISTING_SCRIPT_MESSAGE = 'loadStripe.setLoadParameters was called but an existing Stripe.js script already exists in the document; existing script parameters will be used';
var findScript = function findScript() {
  var scripts = document.querySelectorAll("script[src^=\"".concat(V3_URL, "\"]"));

  for (var i = 0; i < scripts.length; i++) {
    var script = scripts[i];

    if (!V3_URL_REGEX.test(script.src)) {
      continue;
    }

    return script;
  }

  return null;
};

var injectScript = function injectScript(params) {
  var queryString = params && !params.advancedFraudSignals ? '?advancedFraudSignals=false' : '';
  var script = document.createElement('script');
  script.src = "".concat(V3_URL).concat(queryString);
  var headOrBody = document.head || document.body;

  if (!headOrBody) {
    throw new Error('Expected document.body not to be null. Stripe.js requires a <body> element.');
  }

  headOrBody.appendChild(script);
  return script;
};

var registerWrapper = function registerWrapper(stripe, startTime) {
  if (!stripe || !stripe._registerWrapper) {
    return;
  }

  stripe._registerWrapper({
    name: 'stripe-js',
    version: "1.46.0",
    startTime: startTime
  });
};

var stripePromise = null;
var loadScript = function loadScript(params) {
  // Ensure that we only attempt to load Stripe.js at most once
  if (stripePromise !== null) {
    return stripePromise;
  }

  stripePromise = new Promise(function (resolve, reject) {
    if (typeof window === 'undefined') {
      // Resolve to null when imported server side. This makes the module
      // safe to import in an isomorphic code base.
      resolve(null);
      return;
    }

    if (window.Stripe && params) {
      console.warn(EXISTING_SCRIPT_MESSAGE);
    }

    if (window.Stripe) {
      resolve(window.Stripe);
      return;
    }

    try {
      var script = findScript();

      if (script && params) {
        console.warn(EXISTING_SCRIPT_MESSAGE);
      } else if (!script) {
        script = injectScript(params);
      }

      script.addEventListener('load', function () {
        if (window.Stripe) {
          resolve(window.Stripe);
        } else {
          reject(new Error('Stripe.js not available'));
        }
      });
      script.addEventListener('error', function () {
        reject(new Error('Failed to load Stripe.js'));
      });
    } catch (error) {
      reject(error);
      return;
    }
  });
  return stripePromise;
};
var initStripe = function initStripe(maybeStripe, args, startTime) {
  if (maybeStripe === null) {
    return null;
  }

  var stripe = maybeStripe.apply(undefined, args);
  registerWrapper(stripe, startTime);
  return stripe;
}; // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types

var validateLoadParams = function validateLoadParams(params) {
  var errorMessage = "invalid load parameters; expected object of shape\n\n    {advancedFraudSignals: boolean}\n\nbut received\n\n    ".concat(JSON.stringify(params), "\n");

  if (params === null || _typeof(params) !== 'object') {
    throw new Error(errorMessage);
  }

  if (Object.keys(params).length === 1 && typeof params.advancedFraudSignals === 'boolean') {
    return params;
  }

  throw new Error(errorMessage);
};

var loadParams;
var loadStripeCalled = false;
var loadStripe = function loadStripe() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }

  loadStripeCalled = true;
  var startTime = Date.now();
  return loadScript(loadParams).then(function (maybeStripe) {
    return initStripe(maybeStripe, args, startTime);
  });
};

loadStripe.setLoadParameters = function (params) {
  if (loadStripeCalled) {
    throw new Error('You cannot change load parameters after calling loadStripe');
  }

  loadParams = validateLoadParams(params);
};

__webpack_unused_export__ = loadStripe;


/***/ }),

/***/ 7894:
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/* unused reexport */ __webpack_require__(7597);


/***/ }),

/***/ 4716:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ Components_Contact_Contact)
});

// EXTERNAL MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js + 5 modules
var slicedToArray = __webpack_require__(8152);
// EXTERNAL MODULE: ./node_modules/react/index.js
var react = __webpack_require__(7294);
// EXTERNAL MODULE: ./node_modules/@formspree/react/dist/index.mjs
var dist = __webpack_require__(3556);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js
var injectStylesIntoStyleTag = __webpack_require__(3379);
var injectStylesIntoStyleTag_default = /*#__PURE__*/__webpack_require__.n(injectStylesIntoStyleTag);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleDomAPI.js
var styleDomAPI = __webpack_require__(7795);
var styleDomAPI_default = /*#__PURE__*/__webpack_require__.n(styleDomAPI);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertBySelector.js
var insertBySelector = __webpack_require__(569);
var insertBySelector_default = /*#__PURE__*/__webpack_require__.n(insertBySelector);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js
var setAttributesWithoutAttributes = __webpack_require__(3565);
var setAttributesWithoutAttributes_default = /*#__PURE__*/__webpack_require__.n(setAttributesWithoutAttributes);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/insertStyleElement.js
var insertStyleElement = __webpack_require__(9216);
var insertStyleElement_default = /*#__PURE__*/__webpack_require__.n(insertStyleElement);
// EXTERNAL MODULE: ./node_modules/style-loader/dist/runtime/styleTagTransform.js
var styleTagTransform = __webpack_require__(4589);
var styleTagTransform_default = /*#__PURE__*/__webpack_require__.n(styleTagTransform);
// EXTERNAL MODULE: ./node_modules/css-loader/dist/cjs.js!./src/Components/Contact/Contact.css
var Contact = __webpack_require__(4781);
;// CONCATENATED MODULE: ./src/Components/Contact/Contact.css

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (styleTagTransform_default());
options.setAttributes = (setAttributesWithoutAttributes_default());

      options.insert = insertBySelector_default().bind(null, "head");
    
options.domAPI = (styleDomAPI_default());
options.insertStyleElement = (insertStyleElement_default());

var update = injectStylesIntoStyleTag_default()(Contact/* default */.Z, options);




       /* harmony default export */ const Contact_Contact = (Contact/* default */.Z && Contact/* default.locals */.Z.locals ? Contact/* default.locals */.Z.locals : undefined);

;// CONCATENATED MODULE: ./src/Components/Contact/index.jsx




var SentMessage = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 896).then(__webpack_require__.bind(__webpack_require__, 6896));
});
var Form = /*#__PURE__*/(0,react.lazy)(function () {
  return __webpack_require__.e(/* import() */ 185).then(__webpack_require__.bind(__webpack_require__, 4185));
});
function Components_Contact_Contact() {
  var _useForm = (0,dist/* useForm */.cI)("mwkjvdyb"),
    _useForm2 = (0,slicedToArray/* default */.Z)(_useForm, 2),
    state = _useForm2[0],
    handleSubmit = _useForm2[1];
  var _useState = (0,react.useState)(""),
    _useState2 = (0,slicedToArray/* default */.Z)(_useState, 2),
    inputEmail = _useState2[0],
    setInputEmail = _useState2[1];
  var _useState3 = (0,react.useState)(""),
    _useState4 = (0,slicedToArray/* default */.Z)(_useState3, 2),
    inputMessage = _useState4[0],
    setInputMessage = _useState4[1];
  return /*#__PURE__*/react.createElement("section", {
    id: "contact"
  }, /*#__PURE__*/react.createElement("h3", null, "CONTACT"), /*#__PURE__*/react.createElement("hr", null), /*#__PURE__*/react.createElement("div", null, !state.succeeded && /*#__PURE__*/react.createElement(Form, {
    handleSubmit: handleSubmit,
    state: state,
    inputEmail: inputEmail,
    inputMessage: inputMessage,
    setInputEmail: setInputEmail,
    setInputMessage: setInputMessage
  }), state.succeeded && /*#__PURE__*/react.createElement(SentMessage, {
    state: state,
    setInputEmail: setInputEmail,
    setInputMessage: setInputMessage,
    handleSubmit: handleSubmit
  })), /*#__PURE__*/react.createElement("ul", null, /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "https://www.linkedin.com/in/amaneiro7/",
    target: '_blank'
  }, /*#__PURE__*/react.createElement("img", {
    src: "../../assets/images/linkedin.svg",
    alt: "linkdIn"
  }))), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "https://github.com/amaneiro7",
    target: '_blank'
  }, /*#__PURE__*/react.createElement("img", {
    src: "../../assets/images/github.svg",
    alt: "GitHub"
  }))), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "https://twitter.com/Andruelectronic",
    target: '_blank'
  }, /*#__PURE__*/react.createElement("img", {
    src: "../../assets/images/twitter.svg",
    alt: "Twitter"
  }))), /*#__PURE__*/react.createElement("li", null, /*#__PURE__*/react.createElement("a", {
    href: "https://www.instagram.com/amaneiro7/",
    target: '_blank'
  }, /*#__PURE__*/react.createElement("img", {
    src: "../../assets/images/instagram.svg",
    alt: "Instagram"
  })))));
}

/***/ }),

/***/ 4781:
/***/ ((module, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Z": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(8081);
/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(3645);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "\r\n#contact form,\r\n.SentMessage {\r\n    padding: 3rem;\r\n    width: 60%;\r\n    min-width: 350px;\r\n    height: 400px;    \r\n    font-size: 1.8rem;\r\n    background-color: var(--lt-bk1);\r\n    color: var(--lt-tx);\r\n    border: 1px solid var(--lt-bk3);    \r\n    text-align: center;\r\n    display: flex;\r\n    flex-direction: column;\r\n    justify-content: center;\r\n    align-items: center;\r\n}\r\n\r\n#form label {\r\n    display: block;\r\n    margin: 0;\r\n    width: 50%;\r\n}\r\n\r\n#contact input, \r\n#contact textarea {    \r\n    color: var(--lt-tx);\r\n    border: 1px solid var(--lt-bk2);\r\n    background-color: var(--lt-bk1);\r\n    box-shadow: rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px;    \r\n    border-radius: .5rem;\r\n    box-shadow: none;\r\n    cursor: text;\r\n    margin: 1rem 0 2rem;\r\n    padding: 1rem;\r\n    width: 100%;\r\n}\r\n#contact input:focus, \r\n#contact input:hover, \r\n#contact textarea:focus, \r\n#contact textarea:hover {\r\n    background-color: var(--lt-bk2);\r\n}\r\n\r\n#contact textarea {\r\n    resize: none;\r\n    overflow: auto;\r\n}\r\n\r\n.contact__btn {    \r\n    font-size: 1.8rem;\r\n    background-color: var(--bk-action);\r\n    color: var(--tx-action);\r\n    border: none;\r\n    border-radius: 1.5rem;\r\n    cursor: pointer;\r\n    margin: 3rem;\r\n    padding: 1.6rem;\r\n    transition: background-color .3s ease;\r\n}\r\n\r\n.contact__btn:hover {\r\n    background-color: var(--bk-action-h);\r\n}\r\n\r\n#contact ul {\r\n    display: flex;\r\n    justify-content: center;\r\n    align-items: center;\r\n    list-style: none;\r\n}\r\n\r\n#contact img {\r\n    width: 45px;\r\n    height: 45px;\r\n    border: 1.5px solid var(--lt-bk3); \r\n    border-radius: 50%;\r\n    background-color: var(--lt-bk3); \r\n    margin: 1rem;\r\n    transition: all .3s ease;\r\n}\r\n\r\n", ""]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ 8152:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "Z": () => (/* binding */ _slicedToArray)
});

;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayWithHoles.js
function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/iterableToArrayLimit.js
function _iterableToArrayLimit(arr, i) {
  var _i = null == arr ? null : "undefined" != typeof Symbol && arr[Symbol.iterator] || arr["@@iterator"];
  if (null != _i) {
    var _s,
      _e,
      _x,
      _r,
      _arr = [],
      _n = !0,
      _d = !1;
    try {
      if (_x = (_i = _i.call(arr)).next, 0 === i) {
        if (Object(_i) !== _i) return;
        _n = !1;
      } else for (; !(_n = (_s = _x.call(_i)).done) && (_arr.push(_s.value), _arr.length !== i); _n = !0);
    } catch (err) {
      _d = !0, _e = err;
    } finally {
      try {
        if (!_n && null != _i["return"] && (_r = _i["return"](), Object(_r) !== _r)) return;
      } finally {
        if (_d) throw _e;
      }
    }
    return _arr;
  }
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/arrayLikeToArray.js
function _arrayLikeToArray(arr, len) {
  if (len == null || len > arr.length) len = arr.length;
  for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
  return arr2;
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/unsupportedIterableToArray.js

function _unsupportedIterableToArray(o, minLen) {
  if (!o) return;
  if (typeof o === "string") return _arrayLikeToArray(o, minLen);
  var n = Object.prototype.toString.call(o).slice(8, -1);
  if (n === "Object" && o.constructor) n = o.constructor.name;
  if (n === "Map" || n === "Set") return Array.from(o);
  if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/nonIterableRest.js
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
;// CONCATENATED MODULE: ./node_modules/@babel/runtime/helpers/esm/slicedToArray.js




function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
}

/***/ }),

/***/ 3556:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "cI": () => (/* binding */ Ie),
/* harmony export */   "p8": () => (/* binding */ Me)
/* harmony export */ });
/* unused harmony exports FormspreeProvider, isFieldError, useFormspree */
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7294);
/* harmony import */ var _stripe_stripe_js_pure_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7894);
/* harmony import */ var _stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(6664);
var Q=Object.create;var M=Object.defineProperty;var Z=Object.getOwnPropertyDescriptor;var q=Object.getOwnPropertyNames;var G=Object.getPrototypeOf,W=Object.prototype.hasOwnProperty;var X=(e,t)=>()=>(t||e((t={exports:{}}).exports,t),t.exports);var ee=(e,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of q(t))!W.call(e,o)&&o!==r&&M(e,o,{get:()=>t[o],enumerable:!(s=Z(t,o))||s.enumerable});return e};var A=(e,t,r)=>(r=e!=null?Q(G(e)):{},ee(t||!e||!e.__esModule?M(r,"default",{value:e,enumerable:!0}):r,e));var C=X((Le,k)=>{"use strict";var w=Object.defineProperty,te=Object.getOwnPropertyDescriptor,re=Object.getOwnPropertyNames,oe=Object.prototype.hasOwnProperty,se=(e,t)=>{for(var r in t)w(e,r,{get:t[r],enumerable:!0})},ne=(e,t,r,s)=>{if(t&&typeof t=="object"||typeof t=="function")for(let o of re(t))!oe.call(e,o)&&o!==r&&w(e,o,{get:()=>t[o],enumerable:!(s=te(t,o))||s.enumerable});return e},ie=e=>ne(w({},"__esModule",{value:!0}),e),N={};se(N,{Client:()=>L,createClient:()=>Y,getDefaultClient:()=>be,isFieldError:()=>le});k.exports=ie(N);var h="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",ae=/^(?:[A-Za-z\d+\/]{4})*?(?:[A-Za-z\d+\/]{2}(?:==)?|[A-Za-z\d+\/]{3}=?)?$/;function de(e){e=String(e);for(var t,r,s,o,n="",m=0,l=e.length%3;m<e.length;){if((r=e.charCodeAt(m++))>255||(s=e.charCodeAt(m++))>255||(o=e.charCodeAt(m++))>255)throw new TypeError("Failed to execute 'btoa' on 'Window': The string to be encoded contains characters outside of the Latin1 range.");t=r<<16|s<<8|o,n+=h.charAt(t>>18&63)+h.charAt(t>>12&63)+h.charAt(t>>6&63)+h.charAt(t&63)}return l?n.slice(0,l-3)+"===".substring(l):n}function pe(e){if(e=String(e).replace(/[\t\n\f\r ]+/g,""),!ae.test(e))throw new TypeError("Failed to execute 'atob' on 'Window': The string to be decoded is not correctly encoded.");e+="==".slice(2-(e.length&3));for(var t,r="",s,o,n=0;n<e.length;)t=h.indexOf(e.charAt(n++))<<18|h.indexOf(e.charAt(n++))<<12|(s=h.indexOf(e.charAt(n++)))<<6|(o=h.indexOf(e.charAt(n++))),r+=s===64?String.fromCharCode(t>>16&255):o===64?String.fromCharCode(t>>16&255,t>>8&255):String.fromCharCode(t>>16&255,t>>8&255,t&255);return r}var me="2.8.1",U=(e=>(e.REQUIRED_FIELD_MISSING="REQUIRED_FIELD_MISSING",e.REQUIRED_FIELD_EMPTY="REQUIRED_FIELD_EMPTY",e.TYPE_EMAIL="TYPE_EMAIL",e.TYPE_NUMERIC="TYPE_NUMERIC",e.TYPE_TEXT="TYPE_TEXT",e))(U||{});function le(e){return e.code in U&&e.field!==void 0}function ce(e){return e.errors!==void 0}var ue=e=>de(JSON.stringify(e)),fe=e=>{let t=`@formspree/core@${me}`;return e?`${e} ${t}`:t},ye=()=>1*new Date,b=(e,t,r)=>{e instanceof FormData?e.append(t,r):e=Object.assign(e,{[t]:r})},he=async({stripePromise:e,response:t,responseData:r,payload:s,data:o,fetchImpl:n,request:m,url:l})=>{let f=await e.handleCardAction(r.stripe.paymentIntentClientSecret);if(f.error)return{response:t,body:{errors:[{code:"STRIPE_CLIENT_ERROR",message:"Stripe SCA error",field:"paymentMethod"}]}};{s.paymentMethod.id||b(o,"paymentMethod",s.paymentMethod.id),b(o,"paymentIntent",f.paymentIntent.id),b(o,"resubmitKey",r.resubmitKey);let p=await n(l,{...m,body:JSON.stringify({paymentIntent:f.paymentIntent.id,resubmitKey:r.resubmitKey})}),c=await p.json();return{response:p,body:c}}};function O({body:e,response:t}){return!ce(e)&&(e==null?void 0:e.error)&&(e={errors:[{message:e.error}]}),{body:e,response:t}}var Ee=()=>navigator.webdriver||!!document.documentElement.getAttribute(pe("d2ViZHJpdmVy"))||!!window.callPhantom||!!window._phantom,ge=class{constructor(){this.loadedAt=ye(),this.webdriver=Ee()}teardown(){}data(){return{loadedAt:this.loadedAt,webdriver:this.webdriver}}},L=class{constructor(e={}){this.project=e.project,this.stripePromise=e.stripePromise,typeof window<"u"&&this.startBrowserSession()}startBrowserSession(){this.session||(this.session=new ge)}teardown(){this.session&&this.session.teardown()}async submitForm(e,t,r={}){let s=r.endpoint||"https://formspree.io",o=r.fetchImpl||fetch,n=this.project?`${s}/p/${this.project}/f/${e}`:`${s}/f/${e}`,m=p=>p instanceof FormData?p:JSON.stringify(p),l={Accept:"application/json","Formspree-Client":fe(r.clientName)};this.session&&(l["Formspree-Session-Data"]=ue(this.session.data())),t instanceof FormData||(l["Content-Type"]="application/json");let f={method:"POST",mode:"cors",body:m(t),headers:l};if(this.stripePromise&&r.createPaymentMethod){let p=await r.createPaymentMethod();if(p.error)return{response:null,body:{errors:[{code:"STRIPE_CLIENT_ERROR",message:"Error creating payment method",field:"paymentMethod"}]}};b(t,"paymentMethod",p.paymentMethod.id);let c=await o(n,{...f,body:t}),y=await c.json();return y&&y.stripe&&y.stripe.requiresAction&&y.resubmitKey?await he({stripePromise:this.stripePromise,responseData:y,response:c,payload:p,data:t,fetchImpl:o,request:f,url:n}):O({response:c,body:y})}else return o(n,f).then(p=>p.json().then(c=>O({body:c,response:p}))).catch()}},Y=e=>new L(e),be=()=>(v||(v=Y()),v),v});var F=A(C());var ve=(0,react__WEBPACK_IMPORTED_MODULE_0__.lazy)(()=>Promise.resolve(/* import() */).then(__webpack_require__.t.bind(__webpack_require__, 6664, 19)).then(e=>({default:e.Elements}))),j=react__WEBPACK_IMPORTED_MODULE_0__.createContext({client:void 0});j.displayName="Formspree";var _,we=e=>(_||(_=Se(e)),_),V=(e,t)=>{let r={};return e&&(r.stripePromise=e),t&&(r.project=t),(0,F.createClient)(r)},Ce=e=>{let[t,r]=K(void 0),[s,o]=K(V(t,e.project));return D(()=>(s.startBrowserSession(),()=>{s.teardown()}),[]),D(()=>{let n=async()=>{let m=await we(e.stripePK);r(m)};e.stripePK&&n()},[e.stripePK]),D(()=>{t&&o(V(t,e.project))},[t]),u.createElement(j.Provider,{value:{client:s}},e.stripePK?u.createElement(u.Fragment,null,t&&u.createElement(Pe,{fallback:u.createElement("p",null,"....")},u.createElement(ve,{stripe:t},u.createElement(u.Fragment,null,e.children)))):u.createElement(u.Fragment,null,e.children))};function T(){let e=(0,react__WEBPACK_IMPORTED_MODULE_0__.useContext)(j);return e.client?e:{client:(0,F.getDefaultClient)()}}var $="2.4.1";var Te=e=>e.preventDefault!==void 0,Ie=(e,t={})=>{let[r,s]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(null),[o,n]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[m,l]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)(!1),[f,p]=(0,react__WEBPACK_IMPORTED_MODULE_0__.useState)([]),c=T(),y=t.client||c,I,R;if(!y)throw new Error("You must provide a Formspree client");if(!e)throw new Error('You must provide a form key or hashid (e.g. useForm("myForm") or useForm("123xyz")');c.client&&c.client.stripePromise&&(I=(0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useStripe)(),R=(0,_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.useElements)());let g=!!t.debug,E=t.data;return[{result:r,submitting:o,succeeded:m,errors:f},async P=>{let B=async i=>{i.preventDefault();let d=i.target;if(d.tagName!="FORM")throw new Error("submit was triggered for a non-form element");return new FormData(d)},a=Te(P)?await B(P):P,H=(i,d)=>{a instanceof FormData?a.append(i,d):a=Object.assign(a,{[i]:d})};if(typeof E=="object")for(let i in E){let d;typeof E[i]=="function"?(d=E[i].call(null),typeof(d==null?void 0:d.then)=="function"&&(d=await d)):d=E[i],d!==void 0&&H(i,d)}let J=async()=>{let i={...a.address_line1&&{line1:a.address_line1},...a.address_line2&&{line2:a.address_line2},...a.address_city&&{city:a.address_city},...a.address_country&&{country:a.address_country},...a.address_state&&{state:a.address_state},...a.address_postal_code&&{postal_code:a.address_postal_code}};return await I.createPaymentMethod({type:"card",card:R.getElement(_stripe_react_stripe_js__WEBPACK_IMPORTED_MODULE_2__.CardElement),billing_details:{...a.name&&{name:a.name},...a.email&&{email:a.email},...a.phone&&{phone:a.phone},...i&&{address:i}}})};return n(!0),c.client.submitForm(e,a,{endpoint:t.endpoint,clientName:`@formspree/react@${$}`,createPaymentMethod:c.client&&c.client.stripePromise?J:void 0}).then(i=>{let d=i.response.status,S;return d===200?(g&&console.log("Form submitted",i),l(!0),s(i),p([])):d>=400&&(S=i.body,S.errors?(p(S.errors),g&&console.log("Error",i)):(p([{message:"Unexpected error"}]),g&&console.log("Unexpected error",i)),l(!1)),i}).catch(i=>{throw g&&console.log("Unexpected error",i),l(!1),i}).finally(()=>{n(!1)})},()=>{n(!1),l(!1),p([])}]};var Me=e=>{let{prefix:t,field:r,errors:s,...o}=e,n=(s||[]).find(m=>m.field===r);return n?react__WEBPACK_IMPORTED_MODULE_0__.createElement("div",{...o},t," ",n.message):null};var Ae=A(C());var export_isFieldError=Ae.isFieldError;


/***/ })

}]);
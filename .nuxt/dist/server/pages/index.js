exports.ids = [3];
exports.modules = {

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(29);
if(content.__esModule) content = content.default;
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add CSS to SSR context
var add = __webpack_require__(5).default
module.exports.__inject__ = function (context) {
  add("3f17ac7a", content, true, context)
};

/***/ }),

/***/ 28:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_96799fd0_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(26);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_96799fd0_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_96799fd0_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_96799fd0_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__) if(["default"].indexOf(__WEBPACK_IMPORT_KEY__) < 0) (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_7_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_7_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_dist_cjs_js_ref_7_oneOf_1_2_node_modules_sass_loader_dist_cjs_js_ref_7_oneOf_1_3_node_modules_nuxt_components_dist_loader_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_index_vue_vue_type_style_index_0_id_96799fd0_prod_scoped_true_lang_scss__WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));


/***/ }),

/***/ 29:
/***/ (function(module, exports, __webpack_require__) {

// Imports
var ___CSS_LOADER_API_IMPORT___ = __webpack_require__(4);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(function(i){return i[1]});
// Module
___CSS_LOADER_EXPORT___.push([module.i, ".hero[data-v-96799fd0]{align-items:center;background-image:url(https://img.freepik.com/free-vector/neumorphic-white-layer-abstract-wallpaper-with-empty-space_1017-44320.jpg);background-position:50%;background-size:cover;color:#000;display:flex;flex-direction:column;justify-content:center;min-height:18.75rem;padding:3.125rem;text-align:center}.hero h1[data-v-96799fd0]{margin-bottom:1rem}.categories[data-v-96799fd0]{border-bottom:1px solid #eee;padding:1rem 0 0}.categories ul[data-v-96799fd0]{display:flex;gap:1rem;justify-content:flex-start;list-style-type:none;margin:auto;max-width:87.5rem;padding:0}.categories li[data-v-96799fd0]{border-radius:.3125rem;cursor:pointer;padding:.5rem 1rem;transition:background-color .3s ease}.categories li.active[data-v-96799fd0],.categories li[data-v-96799fd0]:hover{border-bottom:.125rem solid #333;border-radius:0;color:#000}.product-grid[data-v-96799fd0]{display:grid;grid-template-columns:repeat(auto-fill,minmax(18.75rem,1fr));grid-gap:1.25rem;gap:1.25rem;margin:auto;max-width:87.5rem;padding:1.25rem 0}.product-grid .product-item[data-v-96799fd0]{background-color:#fff;border:1px solid #ccc;border-radius:.375rem;padding:1.25rem;text-align:center;transition:box-shadow .3s ease}.product-grid .product-item[data-v-96799fd0]:hover{box-shadow:0 .25rem .5rem rgba(0,0,0,.1)}.product-grid .product-item img[data-v-96799fd0]{height:18.75rem;margin-bottom:.9375rem;max-width:9.375rem;-o-object-fit:contain;object-fit:contain}.product-grid .product-item h3[data-v-96799fd0]{color:#333;font-size:1.1rem;font-weight:500;margin:.625rem 0;text-align:left}.product-grid .product-item p[data-v-96799fd0]{color:#998f8f;font-size:1rem;text-align:left}.product-grid .product-item .item-content[data-v-96799fd0]{min-height:4.375rem}.product-grid .product-item button[data-v-96799fd0]{background-color:#e5e5e5;border:none;border-radius:.375rem;color:#000;cursor:pointer;font-size:.9rem;margin:1rem 0;padding:.9375rem 1.25rem;transition:background-color .3s ease;width:100%}.product-grid .product-item button[data-v-96799fd0]:hover{background-color:#333;color:#fff}.cart-popup[data-v-96799fd0]{background-color:#fff;box-shadow:-.125rem 0 .3125rem rgba(0,0,0,.2);height:100%;padding:1.25rem;position:fixed;right:0;top:0;width:25rem;z-index:100}.close-btn[data-v-96799fd0]{background:none;border:none;cursor:pointer;float:right;font-size:1.5rem}.cart-item[data-v-96799fd0]{display:flex;gap:.625rem;margin-bottom:1rem}.cart-item img[data-v-96799fd0]{height:auto;max-width:5rem}.cart-item .item-details[data-v-96799fd0]{flex-grow:1}.cart-total[data-v-96799fd0]{margin-top:1.25rem;text-align:center}.checkout-btn[data-v-96799fd0]{border:none;width:100%}.cart-btn[data-v-96799fd0],.checkout-btn[data-v-96799fd0]{background-color:#000;color:#fff;cursor:pointer;padding:.625rem}.cart-btn[data-v-96799fd0]{bottom:1rem;position:fixed;right:1rem}.top-header[data-v-96799fd0]{align-items:center;display:flex;justify-content:space-between;margin:auto;max-width:1400px}.top-header .logo[data-v-96799fd0]{max-width:120px}.top-header .cart-icon[data-v-96799fd0]{max-width:30px}.top-header img[data-v-96799fd0]{width:100%}.cart-header[data-v-96799fd0]{align-items:center;display:flex;justify-content:space-between;padding:1rem 0 1.5rem}.cart-popup .image-holder[data-v-96799fd0]{align-items:center;border:1px solid #ccc;border-radius:.375rem;display:flex;max-width:5rem;min-height:5rem;padding:.8rem}.cart-popup .cart-item img[data-v-96799fd0]{height:auto;max-width:5rem;width:100%}.cart-popup .item-details p[data-v-96799fd0]{color:#a5a5a5}.cart-popup .price-item[data-v-96799fd0]{align-items:center;display:flex;justify-content:space-between;padding:1rem 0}.cart-popup .price-item button[data-v-96799fd0]{background:transparent;border:0}.cart-popup .cart-total .cart-total-amount[data-v-96799fd0]{align-items:center;border-top:1px solid #eee;display:flex;justify-content:space-between;padding:1rem 0}.cart-popup .cart-total .checkout-btn[data-v-96799fd0]{background-color:#462ddf;border:none;border-radius:.375rem;color:#fff;cursor:pointer;font-size:.9rem;margin:1rem 0;padding:.9375rem 1.25rem;transition:background-color .3s ease;width:100%}@media(max-width:48rem){.cart-popup[data-v-96799fd0]{width:100%}.product-grid[data-v-96799fd0]{grid-template-columns:repeat(auto-fill,minmax(100%,1fr))}.product-item img[data-v-96799fd0]{max-width:6.25rem}}", ""]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
module.exports = ___CSS_LOADER_EXPORT___;


/***/ }),

/***/ 32:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/vue-loader/lib/loaders/templateLoader.js??ref--6!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=template&id=96799fd0&scoped=true
var render = function render() {
  var _vm = this,
    _c = _vm._self._c;
  return _c('div', [_vm._ssrNode("<header class=\"top-header\" data-v-96799fd0><div class=\"logo\" data-v-96799fd0><img data-v-2a183b29 src=\"https://media.istockphoto.com/id/1420172793/vector/connection-logo-business-global-technology-and-network.jpg?s=612x612&w=0&k=20&c=PSDmuJrOSV9k_GxXtvu8jKHLijvsCT9P9iTGXysPPY4=\" alt=\"product image\" data-v-96799fd0></div> <div class=\"cart-icon\" data-v-96799fd0><img data-v-2a183b29 src=\"https://cdn-icons-png.freepik.com/512/565/565375.png\" alt=\"product image\" data-v-96799fd0></div></header> <div class=\"hero\" data-v-96799fd0><h1 data-v-96799fd0>Welcome to Voxel</h1> <p data-v-96799fd0>Discover our wide range of products</p></div> <div class=\"categories\" data-v-96799fd0><ul data-v-96799fd0><li" + _vm._ssrClass(null, {
    active: _vm.selectedCategory === 'All'
  }) + " data-v-96799fd0>\n        All\n      </li> " + _vm._ssrList(_vm.categories, function (category) {
    return "<li" + _vm._ssrClass(null, {
      active: category === _vm.selectedCategory
    }) + " data-v-96799fd0>" + _vm._ssrEscape("\n        " + _vm._s(category) + "\n      ") + "</li>";
  }) + "</ul></div> <div class=\"product-grid\" data-v-96799fd0>" + _vm._ssrList(_vm.filteredProducts, function (product) {
    return "<div class=\"product-item\" data-v-96799fd0><img" + _vm._ssrAttr("src", product.image) + " alt=\"product image\" data-v-96799fd0> <div class=\"item-content\" data-v-96799fd0><h3 data-v-96799fd0>" + _vm._ssrEscape(_vm._s(product.title)) + "</h3> <p data-v-96799fd0>" + _vm._ssrEscape("$" + _vm._s(product.price)) + "</p></div> <button data-v-96799fd0>Add to Cart</button></div>";
  }) + "</div> " + (_vm.cartOpen ? "<div class=\"cart-popup\" data-v-96799fd0><div class=\"cart-header\" data-v-96799fd0><h2 data-v-96799fd0>" + _vm._ssrEscape("Your Cart (" + _vm._s(_vm.cart.length) + ")") + "</h2> <button class=\"close-btn\" data-v-96799fd0>X</button></div> " + _vm._ssrList(_vm.cart, function (item) {
    return "<div class=\"cart-item\" data-v-96799fd0><div class=\"image-holder\" data-v-96799fd0><img" + _vm._ssrAttr("src", item.image) + " alt=\"item.title\" data-v-96799fd0></div> <div class=\"item-details\" data-v-96799fd0><h4 data-v-96799fd0>" + _vm._ssrEscape(_vm._s(item.title)) + "</h4> <div class=\"price-item\" data-v-96799fd0><p data-v-96799fd0>" + _vm._ssrEscape("\\$" + _vm._s(item.price)) + "</p> <button data-v-96799fd0>Remove</button></div></div></div>";
  }) + " <div class=\"cart-total\" data-v-96799fd0><div class=\"cart-total-amount\" data-v-96799fd0><h3 data-v-96799fd0>Total:</h3> <h3 data-v-96799fd0>" + _vm._ssrEscape("$" + _vm._s(_vm.totalPrice)) + "</h3></div> <button class=\"checkout-btn\" data-v-96799fd0>Continue to Checkout</button></div></div>" : "<!---->"))]);
};
var staticRenderFns = [];

// CONCATENATED MODULE: ./pages/index.vue?vue&type=template&id=96799fd0&scoped=true

// CONCATENATED MODULE: ./node_modules/babel-loader/lib??ref--2-0!./node_modules/@nuxt/components/dist/loader.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./pages/index.vue?vue&type=script&lang=js
/* harmony default export */ var lib_vue_loader_options_pagesvue_type_script_lang_js = ({
  data() {
    return {
      products: [],
      categories: [],
      selectedCategory: "All",
      cart: [],
      cartOpen: false // Control cart popup visibility
    };
  },
  computed: {
    filteredProducts() {
      return this.selectedCategory != "All" ? this.products.filter(product => product.category === this.selectedCategory) : this.products;
    },
    totalPrice() {
      return this.cart.reduce((total, product) => total + product.price, 0).toFixed(2);
    }
  },
  async asyncData() {
    const products = await fetch('https://fakestoreapi.com/products').then(res => res.json());
    const categories = await fetch('https://fakestoreapi.com/products/categories').then(res => res.json());
    return {
      products,
      categories
    };
  },
  mounted() {
    this.loadCart();
  },
  methods: {
    filterByCategory(category) {
      this.selectedCategory = category;
    },
    addToCart(product) {
      const cartItem = this.cart.find(item => item.id === product.id);
      if (!cartItem) {
        this.cart.push({
          ...product,
          quantity: 1
        });
      } else {
        cartItem.quantity++;
      }
      this.saveCart();
      this.cartOpen = true;
    },
    saveCart() {
      localStorage.setItem('cart', JSON.stringify(this.cart));
    },
    loadCart() {
      const storedCart = localStorage.getItem('cart');
      if (storedCart) {
        this.cart = JSON.parse(storedCart);
      }
    },
    toggleCart() {
      this.cartOpen = !this.cartOpen;
    },
    removeFromCart(id) {
      this.cart = this.cart.filter(product => product.id !== id);
      this.saveCart();
    }
  }
});
// CONCATENATED MODULE: ./pages/index.vue?vue&type=script&lang=js
 /* harmony default export */ var pagesvue_type_script_lang_js = (lib_vue_loader_options_pagesvue_type_script_lang_js); 
// EXTERNAL MODULE: ./node_modules/vue-loader/lib/runtime/componentNormalizer.js
var componentNormalizer = __webpack_require__(2);

// CONCATENATED MODULE: ./pages/index.vue



function injectStyles (context) {
  
  var style0 = __webpack_require__(28)
if (style0.__inject__) style0.__inject__(context)

}

/* normalize component */

var component = Object(componentNormalizer["a" /* default */])(
  pagesvue_type_script_lang_js,
  render,
  staticRenderFns,
  false,
  injectStyles,
  "96799fd0",
  "3bd1c6d3"
  
)

/* harmony default export */ var pages = __webpack_exports__["default"] = (component.exports);

/***/ })

};;
//# sourceMappingURL=index.js.map
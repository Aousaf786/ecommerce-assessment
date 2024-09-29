<template>
  <div>
    <header class="top-header">
      <div class="logo">
        <img data-v-2a183b29="" src="https://media.istockphoto.com/id/1420172793/vector/connection-logo-business-global-technology-and-network.jpg?s=612x612&w=0&k=20&c=PSDmuJrOSV9k_GxXtvu8jKHLijvsCT9P9iTGXysPPY4=" alt="product image">
      </div>
      <div class="cart-icon">
        <img data-v-2a183b29="" src="https://cdn-icons-png.freepik.com/512/565/565375.png" alt="product image" @click="toggleCart">
      </div>
    </header>
    <!-- Hero Section -->
    <div class="hero">
      <h1>Welcome to Voxel</h1>
      <p>Discover our wide range of products</p>
    </div>

    <!-- Category Filter -->
    <div class="categories">
      <ul>
        <li 
          :class="{ active: selectedCategory === 'All' }"
          @click="filterByCategory('All')"
        >
          All
        </li>
        <li 
          v-for="category in categories" 
          :key="category" 
          :class="{ active: category === selectedCategory }"
          @click="filterByCategory(category)"
        >
          {{ category }}
        </li>
      </ul>
    </div>

    <!-- Product Grid -->
    <div class="product-grid">
      <div v-for="product in filteredProducts" :key="product.id" class="product-item">
        <img :src="product.image" alt="product image" />
        <div class="item-content">
          <h3>{{ product.title }}</h3>
          <p>${{ product.price }}</p>
        </div>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>

    <!-- Cart Popup -->
    <div v-if="cartOpen" class="cart-popup">
      <div class="cart-header">
        <h2>Your Cart ({{ cart.length }})</h2>
        <button @click="toggleCart" class="close-btn">X</button>
      </div>

      <div v-for="item in cart" :key="item.id" class="cart-item">
        <div class="image-holder">
          <img :src="item.image" alt="item.title" />
        </div>
        <div class="item-details">
          <h4>{{ item.title }}</h4>
          <div class="price-item">
            <p>\${{ item.price }}</p>
            <button @click="removeFromCart(item.id)">Remove</button>
          </div>
        </div>
      </div>

      <div class="cart-total">
        <div class="cart-total-amount">
          <h3>Total:</h3>
          <h3>${{ totalPrice }}</h3>
        </div>
        <button class="checkout-btn">Continue to Checkout</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
      return this.selectedCategory != "All"
        ? this.products.filter(product => product.category === this.selectedCategory)
        : this.products;
    },
    totalPrice() {
      return this.cart.reduce((total, product) => total + product.price, 0).toFixed(2);
    }
  },
  async asyncData() {
    const products = await fetch('https://fakestoreapi.com/products').then(res => res.json());
    const categories = await fetch('https://fakestoreapi.com/products/categories').then(res => res.json());
    return { products, categories };
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
        this.cart.push({ ...product, quantity: 1 });
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
};
</script>

<style scoped lang="scss">
/* Basic layout for cart popup and product grid */
.hero {
  text-align: center;
  padding: 3.125rem;
  background-image: url('https://img.freepik.com/free-vector/neumorphic-white-layer-abstract-wallpaper-with-empty-space_1017-44320.jpg');
  background-size: cover;
  background-position: center;
  color: #000;
  min-height: 18.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    margin-bottom: 1rem;
  }
}

.categories {
  border-bottom: 1px solid #eee;
  padding: 1rem 0 0;

  ul {
    display: flex;
    gap: 1rem;
    list-style-type: none;
    padding: 0;
    max-width: 87.5rem;
    justify-content: flex-start;
    margin: auto;
  }

  li {
    cursor: pointer;
    padding: 0.5rem 1rem;
    border-radius: 0.3125rem;
    transition: background-color 0.3s ease;

    &.active, &:hover {
      color: #000;
      border-bottom: 0.125rem solid #333;
      border-radius: 0;
    }
  }
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(18.75rem, 1fr));
  gap: 1.25rem;
  padding: 1.25rem 0;
  max-width: 87.5rem;
  margin: auto;

  .product-item {
    border: 1px solid #ccc;
    padding: 1.25rem;
    text-align: center;
    background-color: #fff;
    transition: box-shadow 0.3s ease;
    border-radius: 0.375rem;

    &:hover {
      box-shadow: 0 0.25rem 0.5rem rgba(0, 0, 0, 0.1);
    }

    img {
      max-width: 9.375rem;
      height: 18.75rem;
      object-fit: contain;
      margin-bottom: 0.9375rem;
    }

    h3 {
      font-size: 1.1rem;
      margin: 0.625rem 0;
      color: #333;
      text-align: left;
      font-weight: 500;
    }

    p {
      font-size: 1rem;
      text-align: left;
      color: #998f8f;
    }

    .item-content {
      min-height: 4.375rem;
    }

    button {
      background-color: #e5e5e5;
      color: #000;
      border: none;
      padding: 0.9375rem 1.25rem;
      cursor: pointer;
      font-size: 0.9rem;
      transition: background-color 0.3s ease;
      width: 100%;
      margin: 1rem 0;
      border-radius: 0.375rem;

      &:hover {
        background-color: #333;
        color: #fff;
      }
    }
  }
}

.cart-popup {
  position: fixed;
  right: 0;
  top: 0;
  width: 25rem;
  height: 100%;
  background-color: white;
  box-shadow: -0.125rem 0px 0.3125rem rgba(0, 0, 0, 0.2);
  padding: 1.25rem;
  z-index: 100;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
  float: right;
}

.cart-item {
  display: flex;
  gap: 0.625rem;
  margin-bottom: 1rem;

  img {
    max-width: 5rem;
    height: auto;
  }

  .item-details {
    flex-grow: 1;
  }
}

.cart-total {
  margin-top: 1.25rem;
  text-align: center;
}

.checkout-btn {
  background-color: #000;
  color: white;
  padding: 0.625rem;
  width: 100%;
  border: none;
  cursor: pointer;
}

.cart-btn {
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  background-color: #000;
  color: white;
  padding: 0.625rem;
  cursor: pointer;
}

.top-header {
      display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1400px;
    margin: auto;
}
.top-header .logo{
      max-width: 120px;
}
.top-header .cart-icon{
      max-width: 30px;
}
.top-header img {
  width: 100%;
}

.cart-header {
  display: flex;
  align-items: center;
  padding: 1rem 0 1.5rem;
  justify-content: space-between;
}

.cart-popup {
  .image-holder {
    min-height: 5rem;
    border: 1px solid #ccc;
    border-radius: 0.375rem;
    padding: 0.8rem;
    max-width: 5rem;
    display: flex;
    align-items: center;
  }

  .cart-item img {
    max-width: 5rem;
    height: auto;
    width: 100%;
  }

  .item-details p {
    color: #a5a5a5;
  }

  .price-item {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem 0;

    button {
      border: 0;
      background: transparent;
    }
  }

  .cart-total {
    .cart-total-amount {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 1rem 0;
      border-top: 1px solid #eee;
    }

    .checkout-btn {
      background-color: #462ddf;
      border: none;
      padding: 0.9375rem 1.25rem;
      cursor: pointer;
      font-size: 0.9rem;
      transition: background-color 0.3s ease;
      width: 100%;
      margin: 1rem 0;
      border-radius: 0.375rem;
      color: #fff;
    }
  }
}

@media (max-width: 48rem) {
  .cart-popup {
    width: 100%;
  }

  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(100%, 1fr));
  }

  .product-item img {
    max-width: 6.25rem;
  }
}
</style>

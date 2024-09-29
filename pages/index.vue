<template>
  <div>
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
        <h3>{{ product.title }}</h3>
        <p>\${{ product.price }}</p>
        <button @click="addToCart(product)">Add to Cart</button>
      </div>
    </div>

    <!-- Cart Popup -->
    <div v-if="cartOpen" class="cart-popup">
      <button @click="toggleCart" class="close-btn">X</button>
      <h2>Your Cart ({{ cart.length }})</h2>

      <div v-for="item in cart" :key="item.id" class="cart-item">
        <img :src="item.image" alt="item.title" />
        <div class="item-details">
          <h4>{{ item.title }}</h4>
          <p>\${{ item.price }}</p>
          <button @click="removeFromCart(item.id)">Remove</button>
        </div>
      </div>

      <div class="cart-total">
        <h3>Total: \${{ totalPrice }}</h3>
        <button class="checkout-btn">Continue to Checkout</button>
      </div>
    </div>

    <!-- Cart Button -->
    <button class="cart-btn" @click="toggleCart">Cart ({{ cart.length }})</button>
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

<style scoped>
/* Basic layout for cart popup and product grid */
.hero {
  text-align: center;
  padding: 2rem;
  background: #f4f4f4;
}

.categories ul {
  display: flex;
  justify-content: center;
  gap: 2rem;
}

.categories li {
  font-size: 1.2rem;
  padding: 0.8rem 1.5rem;
  border: 1px solid #ccc;
  border-radius: 30px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.categories li.active,
.categories li:hover {
  background-color: #333;
  color: white;
  border-color: #333;
}

.product-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 30px;
  padding: 40px;
}

.product-item {
  border: 1px solid #eee;
  padding: 20px;
  text-align: center;
  background-color: #fff;
  border-radius: 10px;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.product-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.1);
}

.product-item img {
  max-width: 100%;
  height: auto;
  object-fit: contain;
  margin-bottom: 15px;
}

.product-item h3 {
  font-size: 1.2rem;
  margin: 15px 0;
  color: #333;
}

.product-item p {
  font-size: 1rem;
  font-weight: bold;
  color: #000;
}

.product-item button {
  background-color: #000;
  color: white;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 0.9rem;
  transition: background-color 0.3s ease;
}

.product-item button:hover {
  background-color: #333;
}

.cart-popup {
  position: fixed;
  right: 0;
  top: 0;
  width: 400px;
  height: 100%;
  background-color: white;
  box-shadow: -2px 0px 10px rgba(0, 0, 0, 0.3);
  padding: 30px;
  z-index: 100;
  overflow-y: auto;
}

.cart-item img {
  max-width: 80px;
  height: auto;
  border-radius: 5px;
}

.cart-item {
  display: flex;
  gap: 10px;
  margin-bottom: 2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 1rem;
}

.item-details h4 {
  margin-bottom: 5px;
  font-size: 1.1rem;
}

.item-details p {
  font-size: 1rem;
}

.cart-total {
  margin-top: 20px;
  font-size: 1.5rem;
  font-weight: bold;
  text-align: center;
}


@media (max-width: 768px) {
  .cart-popup {
    width: 100%; /* Full width for mobile */
  }

  .product-grid {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
  }

  .product-item img {
    max-width: 100px;
  }
}
</style>

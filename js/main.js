// Common UI Interactions & Shopping Cart Logic

document.addEventListener('DOMContentLoaded', () => {
  // 1. Theme Toggle (Light / Dark Mode)
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = themeToggle ? themeToggle.querySelector('i') : null;
  const currentTheme = localStorage.getItem('theme') || 'light';

  // Apply saved theme on load
  document.documentElement.setAttribute('data-theme', currentTheme);
  updateThemeIcon(currentTheme);

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      let theme = document.documentElement.getAttribute('data-theme');
      let newTheme = theme === 'dark' ? 'light' : 'dark';
      document.documentElement.setAttribute('data-theme', newTheme);
      localStorage.setItem('theme', newTheme);
      updateThemeIcon(newTheme);
    });
  }

  function updateThemeIcon(theme) {
    if (!themeIcon) return;
    if (theme === 'dark') {
      themeIcon.className = 'fas fa-sun';
    } else {
      themeIcon.className = 'fas fa-moon';
    }
  }

  // 2. Header Scroll Effect
  const header = document.querySelector('header');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
      header.classList.add('glass-panel');
    } else {
      header.classList.remove('scrolled');
      // If we are not scrolled, we might want to keep glass-panel if it's there by default,
      // but let's just make it slightly transparent/solid based on scroll
    }
  });

  // 3. Mobile Navigation Menu Toggle
  const mobileToggle = document.getElementById('mobile-toggle');
  const navMenu = document.querySelector('nav');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      const isVisible = navMenu.style.display === 'block';
      navMenu.style.display = isVisible ? 'none' : 'block';
      mobileToggle.querySelector('i').className = isVisible ? 'fas fa-bars' : 'fas fa-times';
    });
  }

  // 4. Search Overlay Toggle
  const searchBtn = document.getElementById('search-btn');
  const searchOverlay = document.getElementById('search-overlay');
  const searchClose = document.getElementById('search-close');
  const searchInput = document.getElementById('search-input');

  if (searchBtn && searchOverlay) {
    searchBtn.addEventListener('click', () => {
      searchOverlay.classList.add('open');
      if (searchInput) searchInput.focus();
    });
  }

  if (searchClose && searchOverlay) {
    searchClose.addEventListener('click', () => {
      searchOverlay.classList.remove('open');
    });
  }

  if (searchInput) {
    searchInput.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        const query = searchInput.value.trim();
        if (query) {
          // Redirect to a search page or filter current view
          // For simplicity, let's redirect to index.html with a search query
          window.location.href = `index.html?search=${encodeURIComponent(query)}`;
        }
      }
    });
  }

  // 5. Shopping Cart State Management (using LocalStorage)
  let cart = JSON.parse(localStorage.getItem('shoe_store_cart')) || [];

  const cartBtn = document.getElementById('cart-btn');
  const cartDrawer = document.getElementById('cart-drawer');
  const closeCartBtn = document.getElementById('close-cart');
  const cartOverlay = document.getElementById('cart-overlay');
  const cartItemsContainer = document.getElementById('cart-items');
  const cartBadge = document.getElementById('cart-badge');
  const cartSubtotal = document.getElementById('cart-subtotal');
  const checkoutBtn = document.getElementById('checkout-btn');

  // Toggle Cart Drawer
  if (cartBtn && cartDrawer && cartOverlay) {
    cartBtn.addEventListener('click', () => {
      cartDrawer.classList.add('open');
      cartOverlay.classList.add('show');
      renderCart();
    });
  }

  if (closeCartBtn && cartDrawer && cartOverlay) {
    closeCartBtn.addEventListener('click', () => {
      cartDrawer.classList.remove('open');
      cartOverlay.classList.remove('show');
    });
  }

  if (cartOverlay) {
    cartOverlay.addEventListener('click', () => {
      cartDrawer.classList.remove('open');
      cartOverlay.classList.remove('show');
    });
  }

  // Render Cart Items
  window.renderCart = function() {
    if (!cartItemsContainer) return;
    cartItemsContainer.innerHTML = '';
    
    // Update Badge
    let totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    if (totalItems > 0) {
      cartBadge.textContent = totalItems;
      cartBadge.classList.add('show');
    } else {
      cartBadge.classList.remove('show');
    }

    if (cart.length === 0) {
      cartItemsContainer.innerHTML = `
        <div class="empty-cart-msg">
          <i class="fas fa-shopping-bag"></i>
          <p>您的購物車空空如也</p>
          <a href="index.html" class="btn btn-primary" style="margin-top: 10px; padding: 8px 20px; font-size: 0.9rem;">去逛逛</a>
        </div>
      `;
      if (cartSubtotal) cartSubtotal.textContent = '0';
      if (checkoutBtn) checkoutBtn.disabled = true;
      return;
    }

    if (checkoutBtn) checkoutBtn.disabled = false;
    let subtotal = 0;

    cart.forEach((item, index) => {
      const itemTotal = item.price * item.quantity;
      subtotal += itemTotal;

      const itemEl = document.createElement('div');
      itemEl.className = 'cart-item';
      itemEl.innerHTML = `
        <img src="${item.image}" alt="${item.name}" class="cart-item-img">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${item.name}</h4>
          <div class="cart-item-meta">
            ${item.size ? `尺寸: US ${item.size}` : ''}
          </div>
          <div class="cart-item-qty-price">
            <div class="qty-selector" style="transform: scale(0.8); transform-origin: left center;">
              <button class="qty-btn" onclick="updateCartQty(${index}, -1)">-</button>
              <span class="qty-input" style="line-height: 45px; display: inline-block;">${item.quantity}</span>
              <button class="qty-btn" onclick="updateCartQty(${index}, 1)">+</button>
            </div>
            <span class="cart-item-price">${itemTotal.toLocaleString()}</span>
          </div>
        </div>
        <button class="remove-item-btn" onclick="removeFromCart(${index})">
          <i class="fas fa-times"></i>
        </button>
      `;
      cartItemsContainer.appendChild(itemEl);
    });

    if (cartSubtotal) {
      cartSubtotal.textContent = subtotal.toLocaleString();
    }
  };

  // Add Item to Cart
  window.addToCart = function(productId, quantity = 1, size = null) {
    // Find product in products database
    const product = window.products.find(p => p.id === productId);
    if (!product) return;

    // Check if item already exists in cart with same size
    const existingIndex = cart.findIndex(item => item.id === productId && item.size === size);

    if (existingIndex > -1) {
      cart[existingIndex].quantity += quantity;
    } else {
      cart.push({
        id: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        quantity: quantity,
        size: size
      });
    }

    localStorage.setItem('shoe_store_cart', JSON.stringify(cart));
    renderCart();
    showNotification(`已成功將「${product.name}」加入購物車！`);

    // Open Cart drawer after adding
    if (cartDrawer && cartOverlay) {
      cartDrawer.classList.add('open');
      cartOverlay.classList.add('show');
    }
  };

  // Remove Item from Cart
  window.removeFromCart = function(index) {
    cart.splice(index, 1);
    localStorage.setItem('shoe_store_cart', JSON.stringify(cart));
    renderCart();
  };

  // Update Cart Quantity
  window.updateCartQty = function(index, change) {
    cart[index].quantity += change;
    if (cart[index].quantity <= 0) {
      cart.splice(index, 1);
    }
    localStorage.setItem('shoe_store_cart', JSON.stringify(cart));
    renderCart();
  };

  // Show Success Notification
  window.showNotification = function(message) {
    const notification = document.getElementById('notification');
    if (!notification) return;

    notification.querySelector('.notif-text').textContent = message;
    notification.classList.add('show');

    setTimeout(() => {
      notification.classList.remove('show');
    }, 3000);
  };

  // Checkout Handler
  if (checkoutBtn) {
    checkoutBtn.addEventListener('click', () => {
      showNotification('感謝您的購買！此為展示功能，購物車已為您清空。');
      cart = [];
      localStorage.setItem('shoe_store_cart', JSON.stringify(cart));
      renderCart();
      setTimeout(() => {
        if (cartDrawer && cartOverlay) {
          cartDrawer.classList.remove('open');
          cartOverlay.classList.remove('show');
        }
      }, 2000);
    });
  }

  // Initial cart rendering to update badge
  renderCart();
});

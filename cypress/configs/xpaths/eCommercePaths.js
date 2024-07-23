// cypress/config/xpath/e-commercepaths.js
export const eCommercePaths = {
  loginPage: {
    loginsignInButton: '.nav-action-inner',
    loginEmail: '#ap_email_login',
    continueButton :'.a-button-input',
    loginPassword: '#ap_password',
    loginSubmit: '#signInSubmit',
  },

  navBar:{
    verifyAccountName: '#nav-link-accountList-nav-line-1',
    hoverOnAccount:'span.nav-line-2' ,
  },
  search:{
    searchInput: '#twotabsearchtextbox',
    searchSubmit: '#nav-search-submit-button',
    addToCartButton: 'Add to cart',
    itemAddedConfirmation: 'Item Added',
    productImageVerification: '.ewc-item-content > .a-row > .a-link-normal > .sc-product-image',
  },
  
  addToCart:{
    cartLink: '//*[@id="nav-cart"]',
    goToCartButton: 'Go to Cart',
    shoppingCartHeader: 'Shopping Cart', 
  },
  checkOut:{
    proceedToCheckoutButton: 'input[name="proceedToRetailCheckout"]',
    deliveryAddressHeader: 'Select a delivery address', 
    signOutButton: '#nav-item-signout > .nav-text',
  },
  other:{
    deleteProduct:'input[title="Delete"]',
  }

  };
  
  
  
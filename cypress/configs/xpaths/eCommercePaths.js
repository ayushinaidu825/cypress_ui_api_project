// cypress/config/xpath/e-commercepaths.js
export const eCommercePaths = {
  loginPage: {
    loginsignInButton: '.nav-action-inner',
    loginEmail: '#ap_email_login',
    continueButton :'.a-button-input',
    loginPassword: '#ap_password',
    loginSubmit: '#signInSubmit',
  },

  other:{
    verifyAccountName: '//span[@id="nav-link-accountList-nav-line-1"]',
    searchInput: '//input[@id="twotabsearchtextbox"]',
    searchSubmit: '//input[@id="nav-search-submit-button"]',
    productItem: '//span[@class="a-size-medium a-color-base a-text-normal"]',
    addToCartButton: '//input[@id="add-to-cart-button"]',
    cartLink: '//a[@id="nav-cart"]',
    cartItem: '//span[@class="a-size-medium sc-product-title a-text-bold"]',
    proceedToCheckoutButton: '//input[@name="proceedToRetailCheckout"]',
    signOutButton: '//span[text()="Sign Out"]',
  }
    
  };
  
  
  
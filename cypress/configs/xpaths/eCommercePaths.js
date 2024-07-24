// cypress/config/xpath/e-commercepaths.js
export const eCommercePaths = {
  loginPage: {
    loginsignInButton: '.nav-action-inner',
    loginEmail: 'input[name="email"]',
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
  },
  magento:{
    logo: 'a.logo',
    signInLink: '.panel > .header > .authorization-link > a',
    customerLoginTitle: 'span:contains("Customer Login")',
    emailInput: '#email',
    passwordInput: '#pass',
    signInButton: '#send2',
    loggedInMessage: ':nth-child(2) > .greet > .logged-in',
    categoryMenu: 'a#ui-id-4',
    subCategoryMenu: 'a#ui-id-9',
    subCategoryItem: 'a#ui-id-13',
    categoryMenu1: '#ui-id-6 > :nth-child(2)',
    subCategoryMenu1: '#ui-id-25',
    categoryMenu2: '#ui-id-8 > span',
    subCategoryMenu2:'.categories-menu > :nth-child(4) > :nth-child(4)',
    subCategoryItem2:'li.item a[href*="pants-men.html"]',
    productItemLink: '.product-item-link',
    sizeOptions: 'div.swatch-attribute-options .swatch-option.text',
    colorOptions: 'div.swatch-attribute-options .swatch-option.color',
    addToCartButton: '#product-addtocart-button',
    cartCounter: 'span.counter-number',
    showCart: 'a.action.showcart',
    proceedToCheckoutButton1:'#top-cart-btn-checkout',

    verifyCheckoutHeader:'#shipping > .step-title',
    shippingFisrtName:'input[name="firstname"]',
    shippingLastName:'input[name="lastname"]',
    shippingCompany:'input[name="company"]',
    shippingStreetAddress:'input[name="street[0]"]',
    shippingCity:'input[name="city"]',
    shippingState:'select[name="region_id"]',
    shippingPinCode:'input[name="postcode"]',
    shippingCountry:'select[name="country_id"]',
    shippingPhoneNumber:'input[name="telephone"]',
    shiphere:".modal-footer > .primary",
    shippingMethod:':nth-child(1) > :nth-child(1) > .radio',
    shippingNext:'.button',
    newAddress:'.new-address-popup > .action',
    placeOrder:'button[title="Place Order"]',
    OrderCompleted:".base"




  }

  };
  
  
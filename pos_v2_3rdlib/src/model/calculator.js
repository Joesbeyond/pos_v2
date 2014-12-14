function Calculator() {
  this.cartItems = [];
}

Calculator.prototype.addCartItem = function(next) {

  var barcode = next.item.barcode;
  var count = next.count;

  var cartItem = _.find(this.cartItems, function(cartItem) {
    return cartItem.getBarcode() === barcode;
  });
  if(cartItem) {
    cartItem.count += count;
  } else {
    this.cartItems.push(next);
  }

  return this.cartItems;
};

Calculator.prototype.getCartItemsText = function() {

  var cartItemsText = '';

  _.forEach(this.cartItems,function(cartItem) {
    cartItemsText += cartItem.toCartItemsText();
  });

  return cartItemsText;
};

Calculator.prototype.getPromotionText = function() {
  var promotionText = '';

  _.forEach(this.cartItems,function(cartItem) {
    promotionText += cartItem.toPromotionText();
  });

  return promotionText;
};

Calculator.prototype.getSummaryText = function() {
  var summaryText = '';
  var cartItemsTotalAmount = this.getCartItemsTotalAmount();
  var savedAmount = this.getCartItemsSavedAmount();
  summaryText = '总计：' + cartItemsTotalAmount.toFixed(2) + '(元)\n' +
                '节省：' + savedAmount.toFixed(2) + '(元)\n';
  return summaryText;
};

Calculator.prototype.getCartItemsTotalAmount = function() {
  var cartItemsTotalAmount = 0;

  _.forEach(this.cartItems,function(cartItem) {
    cartItemsTotalAmount += cartItem.getSubTotal();
  });

  return cartItemsTotalAmount;
};

Calculator.prototype.getCartItemsSavedAmount = function() {
  var noSavedAmount = 0;
  var cartItemsTotalAmount = this.getCartItemsTotalAmount();

  _.forEach(this.cartItems,function(cartItem) {
    noSavedAmount += cartItem.getOriginAmount();
  });

  return noSavedAmount - cartItemsTotalAmount;
};

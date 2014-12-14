function Inventory(calculator) {
  this.calculator = calculator;
}

Inventory.prototype.toString = function() {

  return '***<没钱赚商店>购物清单***\n' +
         '打印时间：' + 
         moment().format('YYYY年MM月DD日 HH:mm:ss') + '\n' +
         '----------------------\n' +
         this.calculator.getCartItemsText() +
         '----------------------\n' +
         '挥泪赠送商品：\n' +
         this.calculator.getPromotionText() +
         '----------------------\n' +
         this.calculator.getSummaryText() +
         '**********************';

};

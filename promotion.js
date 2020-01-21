const _ = require("lodash");
module.exports = products => {
  // seu laiy un loud la kha
  function checkPro1() {
    promotion = {
      proName: "discount1",
      proID: "05",
      qty: 5,
      discountPrice: 5000
    };
    for (let i = 0; i < products.length; i++) {
      if (_.includes(promotion.proID, products[i].proID)) {
        let qty = products[i].qty;
        if (qty >= promotion.qty) {
          products[i].promotionID = promotion.proName;
          let unit = parseInt(products[i].qty / promotion.qty);
          products[i].discount = promotion.discountPrice * unit;
        }
      }
    }
    return products;
  }
  function checkPro2() {
    promotion = {
      proName: "discount",
      products: [
        { proID: "01", qty: 2, discount: 1000 },
        { proID: "02", qty: 5, discount: 1000 }
      ]
    };
    for (let i = 0; i < products.length; i++) {
      let matchIndex = _.findIndex(promotion.products, product => {
        return (
          product.proID == products[i].proID && product.qty <= products[i].qty
        );
      });

      if (matchIndex > -1) {
        let matchID = promotion.products[matchIndex].proID;

        let matchIdIndex = _.findIndex(products, ["proID", matchID]);
        products[matchIdIndex].price =
          products[matchIdIndex].price -
          promotion.products[matchIndex].discount;
      }
    }

    return products;
  }
  // 2 un 15.000
  // la kha khong koum sin kha tong thao kun
  function checkPro3() {
    promotion = {
      proName: "discount3",
      proID: ["01", "02", "04"],
      discountPrice: 1000
    };
    let qty = 0;
    for (let i = 0; i < products.length; i++) {
      if (_.includes(promotion.proID, products[i].proID)) {
        let amount = products[i].qty + qty;
        if (amount >= 2) {
          qty = amount % 2;
          products[i].discount = promotion.discountPrice * parseInt(amount / 2);
          products[i].promotionID = promotion.proName;
        }
      }
    }
    console.log(`qty ${qty}`);
    return products;
  }
  // theam
  function checkPro4() {
    promotion = {
      proName: "discount4",
      proID: "03",
      qty: 5,
      freeID: "06"
    };
    for (let i = 0; i < products.length; i++) {
      if (_.includes(promotion.proID, products[i].proID)) {
        let qty = products[i].qty;
        if (qty >= promotion.qty) {
          products[i].promotionID = "discount4";
          let indexFree = _.findIndex(products, ["proID", promotion.freeID]);
          if (indexFree > -1) {
            products[indexFree].discount = 5000;
            products[indexFree].promotionID = "discount4";
          } else {
            products.push({
              proID: promotion.freeID,
              qty: 1,
              price: 5000,
              discount: 5000,
              promotionID: "discount4"
            });
          }

          break;
        }
      }
    }
    return products;
  }

  function run() {
    return checkPro4(checkPro3(checkPro1(products)));
  }
  console.log(run());
};

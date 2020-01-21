const _ = require("lodash");
module.exports = products => {
  function checkPro1() {
    promotion = {
      proName: "buy more get  free",
      proID: [
        { proID: "01", amount: 2, price: 6000 },
        { proID: "02", amount: 1, price: 3000 }
      ],
      proIDFree: "10"
    };
    if (_.difference(promotion.products, products).length === 0) {
      products.push({ proID: "10", amount: 1, price: 8000 });
    }
    console.log(_.difference(promotion.proID, products.proID));

    return products;
  }
  function checkPro2() {
    promotion = {
      proName: "discount",
      products: [
        { proID: "01", amount: 2, discount: 1000 },
        { proID: "02", amount: 5, discount: 1000 }
      ]
    };
    for (let i = 0; i < products.length; i++) {
      let matchIndex = _.findIndex(promotion.products, product => {
        return (
          product.proID == products[i].proID &&
          product.amount <= products[i].amount
        );
      });

      if (matchIndex > -1) {
        let matchID = promotion.products[matchIndex].proID;

        let matchIdIndex = _.findIndex(products, ["proID", matchID]);
        console.log(matchIdIndex);
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
      proName: "discount",
      proID: ["01", "02", "03", "04"],
      discountPrice: 1000
    };
    let qty = 0;
    for (let i = 0; i < products.length; i++) {
      if (_.includes(promotion.proID, products[i].proID)) {
        let amount = products[i].amount + qty;
        if (amount >= 2) {
          qty += amount % 2;
          products[i].total -=(promotion.discountPrice * parseInt(amount / 2));
        }
      }
    }
    console.log(`qty ${qty}`);
    return products;
  }
  console.log(checkPro3());
};

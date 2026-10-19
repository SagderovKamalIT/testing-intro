const products = require("../../src/data/products");
const { sortProductsByPrice } = require("../../src/catalog");

describe("sortProductsByPrice", () => {
  describe("sortProductsInAscOrder", () => {
    test("все товары c 'asc' сортируются как [3, 6, 5, 4, 2, 1]", () => {
      const sortedProducts = sortProductsByPrice(products, "asc");

      expect(sortedProducts.map((product) => product.id)).toEqual([
        3, 6, 5, 4, 2, 1,
      ]);
    });

    test("все товары без направления сортируются {как [3, 6, 5, 4, 2, 1]", () => {
      const sortedProductsWithoutWay = sortProductsByPrice(products);
      expect(sortedProductsWithoutWay.map((product) => product.id)).toEqual([
        3, 6, 5, 4, 2, 1,
      ]);
    });

    test("товары [1, 3, 4] c 'asc' сортируются как [3, 4, 1]", () => {
      const filteredProducts = products.filter(({ id }) =>
        [1, 3, 4].includes(id),
      );
      const sortedProductsByID = sortProductsByPrice(filteredProducts, "asc");
      expect(sortedProductsByID.map((product) => product.id)).toEqual([
        3, 4, 1,
      ]);
    });
  });

  describe("sortProductsInDescOrder", () => {
    test("все товары c 'desc' сортируются как [1, 2, 4, 5, 6, 3]", () => {
      const allDescProducts = sortProductsByPrice(products, "desc");
      expect(allDescProducts.map((product) => product.id)).toEqual([
        1, 2, 4, 5, 6, 3,
      ]);
    });

    test("товары [3, 1, 4] c 'desc' сортируются как [1, 4, 3]", () => {
      const filteredAscProductsWithFirstItems = products.filter(({ id }) =>
        [3, 1, 4].includes(id),
      );
      const descProductsWithID = sortProductsByPrice(
        filteredAscProductsWithFirstItems,
        "desc",
      );
      expect(descProductsWithID.map((product) => product.id)).toEqual([
        1, 4, 3,
      ]);
    });

    test("товары [5, 2, 6] c 'desc' сортируются как [2, 5, 6]", () => {
      const filteredProductsWithLastItems = products.filter(({ id }) =>
        [5, 2, 6].includes(id),
      );

      const descProductsWithLastId = sortProductsByPrice(
        filteredProductsWithLastItems,
        "desc",
      );
      expect(descProductsWithLastId.map((product) => product.id)).toEqual([
        2, 5, 6,
      ]);
    });
  });

  describe("sortOriginalArray", () => {
    test("'asc' не меняет исходный массив [1, 3, 4]", () => {
      const originalProducts = products.filter(({ id }) =>
        [1, 3, 4].includes(id),
      );

      const filteredProducts = sortProductsByPrice(originalProducts, "asc");

      expect(originalProducts.map((product) => product.id)).toEqual([1, 3, 4]);
    });

    test("'desc' не меняет исходный массив [1, 3, 4]", () => {
      const originalProducts = products.filter(({ id }) =>
        [1, 3, 4].includes(id),
      );

      const filteredDescProducts = sortProductsByPrice(
        originalProducts,
        "desc",
      );

      expect(originalProducts.map((product) => product.id)).toEqual([1, 3, 4]);
    });

    test("направление по умолчанию не меняет исходный массив всех товаров", () => {
      const originalProducts = products.filter(({ id }) =>
        [1, 2, 3, 4, 5, 6].includes(id),
      );

      sortProductsByPrice(originalProducts);

      expect(originalProducts.map((product) => product.id)).toEqual([
        1, 2, 3, 4, 5, 6,
      ]);
    });
  });
});

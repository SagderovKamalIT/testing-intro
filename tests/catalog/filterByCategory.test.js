const products = require("../../src/data/products");
const { filterByCategory } = require("../../src/catalog");

describe("filterByCategory", () => {
  test("'all' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const allProducts = filterByCategory(products, "all");
    expect(allProducts.map((product) => product.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test("undefined возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const undefinedProducts = filterByCategory(products, undefined);
    expect(undefinedProducts.map((product) => product.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const emptyStringOfProducts = filterByCategory(products, "");
    expect(emptyStringOfProducts.map((product) => product.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test("'electronics' возвращает товары с ID [1, 2]", () => {
    const electronicsProducts = filterByCategory(products, "electronics");
    expect(electronicsProducts.map((product) => product.id)).toEqual([1, 2]);
  });

  test("'books' возвращает товары с ID [3, 6]", () => {
    const booksProducts = filterByCategory(products, "books");
    expect(booksProducts.map((product) => product.id)).toEqual([3, 6]);
  });

  test("'home' возвращает товары с ID [4, 5]", () => {
    const homeProducts = filterByCategory(products, "home");
    expect(homeProducts.map((product) => product.id)).toEqual([4, 5]);
  });

  test("'clothes' возвращает пустой массив", () => {
    const clothesProducts = filterByCategory(products, "clothes");
    expect(clothesProducts.map((product) => product.id)).toEqual([]);
  });

  test("'toys' возвращает пустой массив", () => {
    const toysProducts = filterByCategory(products, "toys");
    expect(toysProducts.map((product) => product.id)).toEqual([]);
  });

  test("'sports' возвращает пустой массив", () => {
    const sportsProducts = filterByCategory(products, "sports");
    expect(sportsProducts.map((product) => product.id)).toEqual([]);
  });
});

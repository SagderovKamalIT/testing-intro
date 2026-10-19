const products = require("../../src/data/products");
const { searchProducts } = require("../../src/catalog");

describe("searchProducts", () => {
  test("'Наушники' возвращает товар с ID 1", () => {
    const headphonesProducts = searchProducts(products, "Наушники");
    expect(headphonesProducts.map((product) => product.id)).toEqual([1]);
  });

  test("'Чистый код' возвращает товар с ID 6", () => {
    const cleanCodeProducts = searchProducts(products, "Чистый код");
    expect(cleanCodeProducts.map((product) => product.id)).toEqual([6]);
  });

  test("'Настольная лампа' возвращает товар с ID 4", () => {
    const tableLampProducts = searchProducts(products, "Настольная лампа");
    expect(tableLampProducts.map((product) => product.id)).toEqual([4]);
  });

  test("'javascript' возвращает товар с ID 3", () => {
    const javaScriptProducts = searchProducts(products, "javascript");
    expect(javaScriptProducts.map((product) => product.id)).toEqual([3]);
  });

  test("'ЧЕХОЛ' возвращает товар с ID 5", () => {
    const caseProducts = searchProducts(products, "ЧЕХОЛ");
    expect(caseProducts.map((product) => product.id)).toEqual([5]);
  });

  test("'наушники' возвращает товар с ID 1", () => {
    const headphoneProduct = searchProducts(products, "наушники");
    expect(headphoneProduct.map((product) => product.id)).toEqual([1]);
  });
  test("пустая строка возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const emptyStringProducts = searchProducts(products, "");
    expect(emptyStringProducts.map((product) => product.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test("строка из пробелов возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const bigEmptyStringProducts = searchProducts(products, "   ");
    expect(bigEmptyStringProducts.map((product) => product.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });

  test("'\\t\\n' возвращает товары с ID [1, 2, 3, 4, 5, 6]", () => {
    const spaceSeparatedProducts = searchProducts(products, "\t\n");
    expect(spaceSeparatedProducts.map((product) => product.id)).toEqual([
      1, 2, 3, 4, 5, 6,
    ]);
  });
});

import { getGif } from "../../helpers/getGift";

describe("Pruebas helper getGift", () => {
  test("Debe traer 10 elementos", async () => {
    const gift = await getGif("Goku");
    expect(gift.length).toBe(10);
  });

  test("Debe traer in arreglo vacio", async () => {
    const gift = await getGif("");
    expect(gift.length).toBe(0);
  });
});

import React from "react";
import "../../setupTests";
import { shallow } from "enzyme";
import { GiftGridItem } from "../../components/GiftGridItem";

describe("Prueba componente GifGridItem", () => {
  const title = "un titulo";
  const url = "https://localhost/algo.jpg";
  const id = "12345";
  const wrapper = shallow(<GiftGridItem title={title} id={id} url={url} />);

  test("debe mostrar una imagen correcta del componente GifGridItem", () => {
    expect(wrapper).toMatchSnapshot();
  });
  test("Debe tener un parrafo con el title", () => {
    const p = wrapper.find("p");
    expect(p.text().trim()).toBe(title);
  });

  test("debe de tener la imagen igual a la url y alt de los props", () => {
    const img = wrapper.find("img");

    expect(img.prop("src")).toBe(url);
    expect(img.prop("alt")).toBe(title);
  });

  test("Debe tener la animacion  fade in", () => {
    const div = wrapper.find("div");
    const className = div.prop("className");

    expect(className.includes("animate__backInLeft")).toBe(true);
  });
});

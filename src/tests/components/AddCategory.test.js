import React from "react";
import { shallow } from "enzyme";
import "../../setupTests";
import AddCategory from "../../components/AddCategory";

describe("Pruebas de componente AddCategory", () => {
  const setCategory = jest.fn();
  let wrapper = shallow(<AddCategory setCategory={setCategory} />);

  beforeEach(() => {
    jest.clearAllMocks();
    wrapper = shallow(<AddCategory setCategory={setCategory} />);
  });

  test("Debe de mostrarse correctamente", () => {
    expect(wrapper).toMatchSnapshot();
  });

  test("Debe de cambiar la caja de texto", () => {
    const input = wrapper.find("input");
    const value = "hola mundo";
    input.simulate("change", { target: { value } });
    expect(wrapper.find("h3").text().trim()).toBe(value);
  });
  test("No debe de postear la informacion con submit", () => {
    wrapper.find("form").simulate("submit", {
      preventDefault() {},
    });
    expect(setCategory).not.toHaveBeenCalled();
  });
  test("debe llamar el setCategory y limpiar la caja de texto", () => {
    const value = "Hola mundo";
    //1.- simulamos el imputChange
    wrapper.find("input").simulate("change", { target: { value } });
    //2.- simula el submit
    wrapper.find("form").simulate("submit", {
      preventDefault() {},
    });
    //3.- setCategory se debe haber llamado
    expect(setCategory).toHaveBeenCalled();
    //muestra cuantas veces fue llamada la aplicacion
    expect(setCategory).toHaveBeenCalledTimes(1);
    //esperamos que la respuesta sea una funcion
    expect(setCategory).toHaveBeenCalledWith(expect.any(Function));
    //esperamos que despues de hacer la consulta el inputvalue tenga valor vacio
    expect(wrapper.find("input").prop("value")).toBe("");
  });
});

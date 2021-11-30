import { useState, useEffect } from "react";
import { getGif } from "../helpers/getGift";

export const useFetchGigs = (category) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    getGif(category).then((imgs) => {
      setTimeout(() => {
        console.log(imgs);
        setState({
          data: imgs,
          loading: false,
        });
      }, 3000);
    });
  }, [category]);

  return state;
};

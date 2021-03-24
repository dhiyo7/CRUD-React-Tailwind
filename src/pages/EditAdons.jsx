import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useHistory, useParams } from "react-router-dom";
const getUrl = process.env.REACT_APP_URL;

const EditAdons = (props) => {
  const { id, name, price, addon_category_id } = props.location;
  console.log("ID ", id);
  console.log("Nama ", name);
  console.log("Harga ", price);

  const [nameAd, setNameAd] = useState(name);
  const [priceAd, setPriceAd] = useState(price);
  const [idAd, setIdAd] = useState(addon_category_id);
  const token = useSelector((state) => state.auth.data.access_token);
  const history = useHistory();
  console.log("TOKEN ", token);

  const handleSubmit = async (e) => {
    e.preventDefault();
    // const data = {
    //   name: nameAd,
    //   price: priceAd,
    //   addon_category_id: idAd,
    // };

    // console.log("Data Edit ", data);
    await axios
      .put(`${getUrl}/addon/${id}`, {
          headers: {
            Authorization: "Bearer " + token,
            "Content-Type": "application/json",
          },
        name: 'nameAd',
        price: 'priceAd',
        addon_category_id: 'idAd',
        // name: nameAd,
        // price: priceAd,
        // addon_category_id: idAd,
      })
      .then((res) => {
        // history.push("/addon");
        console.log("ini berhasil update", res);
      })
      .catch((err) => {
        console.log("Error: " + err);
      });
  };

  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-full md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Edit AddOns
            </h2>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                id="nameAd"
                name="nameAd"
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder={name}
                value={nameAd}
                onChange={(e) => {
                  setNameAd(e.target.value);
                }}
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Price
              </label>
              <input
                id="priceAd"
                type="text"
                name="priceAd"
                class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder={price}
                value={priceAd}
                onChange={(e) => {
                  setPriceAd(e.target.value);
                }}
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Category Id
              </label>
              <input
                id="idAd"
                type="number"
                name="idAd"
                class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder={addon_category_id}
                value={idAd}
                onChange={(e) => {
                  setIdAd(e.target.value);
                }}
              />
            </div>
            <button
              onClick={(e) => {
                handleSubmit(e);
              }}
              class="text-white bg-red-500 border-0 py-2 px-8 focus:outline-none hover:bg-red-600 rounded text-lg"
            >
              Save
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default EditAdons;

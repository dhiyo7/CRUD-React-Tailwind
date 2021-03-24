import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
const getUrl = process.env.REACT_APP_URL;

const NewCategory = () => {
  const [nameCategory, setNameCategory] = useState("");
  const [typeCategory, setTypeCategory] = useState("");
  const token = useSelector((state) => state.auth.data.access_token);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: nameCategory,
      type: typeCategory,
    };

    await axios
      .post(`${getUrl}/addon-category`, data, {
        headers: {
          Authorization: "Bearer " + token,
          "Content-Type": "application/json",
        },
      })
      .then((res) => {
        history.push("/category");
        console.log("ini berhasil update", res);
      })
      .catch((err) => {
        console.log("Error: ", err.response);
      });
  };

  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap items-center">
          <div class="lg:w-full md:w-1/2 bg-gray-100 rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0">
            <h2 class="text-gray-900 text-lg font-medium title-font mb-5">
              Edit Category
            </h2>
            <div class="relative mb-4">
              <label for="name" class="leading-7 text-sm text-gray-600">
                Name
              </label>
              <input
                type="text"
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-red-500 focus:border-red-500 focus:z-10 sm:text-sm"
                placeholder="Masukan Nama"
                value={nameCategory}
                onChange={(e) => {
                  setNameCategory(e.target.value);
                }}
              />
            </div>
            <div class="relative mb-4">
              <label for="email" class="leading-7 text-sm text-gray-600">
                Type
              </label>
              <input
                type="text"
                class="w-full bg-white rounded border border-gray-300 focus:border-red-500 focus:ring-2 focus:ring-red-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                placeholder="Masukan Type"
                value={typeCategory}
                onChange={(e) => {
                  setTypeCategory(e.target.value);
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

export default NewCategory;

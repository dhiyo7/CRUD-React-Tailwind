import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

const getUrl = process.env.REACT_APP_URL;

const AddOnByID = (props) => {
  const token = useSelector((state) => state.auth.data.access_token);
  const [add, setAdd] = useState({});
  const [namaCategory, setNamaCategory] = useState();
  const [type, setType] = useState();
  let { id } = useParams();
  console.log("ID ", id);

  const getAddByID = async () => {
    await axios
      .get(`${getUrl}/addon/` + id, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        const byId = res.data;
        console.log("byId ", byId);
        const nama = res.data.addon_category.name
        const type = res.data.addon_category.type
        console.log(nama);
        setAdd(byId);
        setNamaCategory(nama)
        setType(type)        

      });
  };

  useEffect(() => {
    getAddByID(id);
  }, [id]);

  return (
    <>
      <Navbar />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6 mt-10">
              <h1 class="title-font font-medium text-xl mb-2 text-gray-900">
                {add.name}
              </h1>
              {/* <p>{add.addon_category.type}</p> */}
              <div class="leading-relaxed">
                <p>{namaCategory}</p>
              </div>
            </div>
            <div class="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
              <h2 class="title-font font-medium text-3xl text-gray-900">
                {add.price}
              </h2>
              <p class="leading-relaxed">{type}</p>
            </div>
          </div>
          <div class="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-20 sm:mt-0">
            <img
              class="object-cover object-center w-full h-full"
              src="https://dummyimage.com/600x300"
              alt="stats"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default AddOnByID;

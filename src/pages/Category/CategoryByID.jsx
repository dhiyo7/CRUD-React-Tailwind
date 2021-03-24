import React, { useState, useEffect } from "react";
import Navbar from "../../components/Navbar";
import axios from "axios";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
const getUrl = process.env.REACT_APP_URL;


const CategoryByID = (props) => {
    const token = useSelector((state) => state.auth.data.access_token);
    let { id } = useParams();
    console.log("ID ", id);
    const [category, setCategory] = useState({});


    const getCategoryByID = async () => {
        await axios
          .get(`${getUrl}/addon-category/` + id, {
            headers: {
              Authorization: "Bearer " + token,
            },
          })
          .then((res) => {
            const byId = res.data;
            console.log("byId ", byId);
            setCategory(byId)
          });
      };
    
      useEffect(() => {
        getCategoryByID(id);
      }, [id]); // eslint-disable-line react-hooks/exhaustive-deps

    return (
        <>
      <Navbar />
      <section class="text-gray-600 body-font">
        <div class="container px-5 py-24 mx-auto flex flex-wrap">
          <div class="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
            <div class="w-full sm:p-4 px-4 mb-6 mt-10">
              <h1 class="title-font font-medium text-xl mb-2 text-gray-900">
                {category.name}
              </h1>
              <div class="leading-relaxed">
                <p>{category.type}</p>
              </div>
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
    )
}

export default CategoryByID

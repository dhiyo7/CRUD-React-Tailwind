import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import axios from "axios";
import { useSelector } from "react-redux";
import { Link, useHistory } from "react-router-dom";

const getUrl = process.env.REACT_APP_URL;

const AddOns = () => {
  const history = useHistory();
  const token = useSelector((state) => state.auth.data.access_token);
  // console.log("TOKEN", token);
  const [addOns, setAddOns] = useState([]);

  const getAddOns = async () => {
    await axios
      .get(`${getUrl}/addons`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        const addOnsData = res.data.data;
        history.push({
          addOns,
        });
        console.log("Datanya", addOnsData);
        setAddOns(addOnsData);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDelete = (id) => {
    axios
      .delete(`${getUrl}/addon/${id}`, {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        console.log("Berhasil delete ", res);
        getAddOns();
      })
      .catch((err) => {
        console.log("error", err);
      });
  };

  useEffect(() => {
    getAddOns();
  }, []);

  return (
    <>
      <Navbar />
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20 mt-10">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">
              Add Ons List
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Halaman Add Ons List.
            </p>
          </div>
          <div className="flex flex-wrap -m-2">
            {addOns.map(({ id, name, price, addon_category, addon_category_id }) => {
              return (
                <div className="p-2 lg:w-1/3 md:w-1/2 w-full" key={id}>
                  <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                    <div className="flex-grow">
                      <h2 className="text-gray-900 title-font font-medium">
                        {name}
                      </h2>
                      <p className="text-gray-500">{price}</p>
                      <p className="text-gray-500">{addon_category.name}</p>
                    </div>
                    <span class="inline-flex">
                      <Link
                        className="ml-2"
                        to={{
                          pathname: `/edit-addon/${id}`,
                          id,
                          name,
                          price,
                          addon_category_id
                        }}
                      >
                        {" "}
                        <p className="text-green-600">Edit</p>
                      </Link>
                      <Link
                        className="ml-2"
                        to={{
                          pathname: `/view/${id}`,
                          addOns,
                        }}
                      >
                        {" "}
                        <p className="text-blue-600">View</p>
                      </Link>

                      <button
                        onClick={() => {
                          handleDelete(id);
                        }}
                        class="ml-2 inline-flex text-red-500 border-0 focus:outline-none hover:bg-red-200 rounded "
                      >
                        Delete
                      </button>
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default AddOns;

import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { QUERY_PROJECTS } from "../utils/queries";
import { ADD_TO_CART, UPDATE_PROJECTS } from "../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";
import image7 from "../assets/images/image7.jpg";

function Home() {
    const { loading, data } = useQuery(QUERY_PROJECTS);
  
    const dispatch = useDispatch();
  
    const addToCart = (id) => {
      dispatch({
        type: ADD_TO_CART,
        project: data.projects.filter((item) => {
          return item._id === id;
        }),
      });
    };

    useEffect(() => {
        if (data) {
          dispatch({
            type: UPDATE_PROJECTS,
            projects: data.projects
          });
        } else if (!loading) {
          console.log("you are currently offline");
        }
      }, [loading, data, dispatch])
    
      console.log(data);
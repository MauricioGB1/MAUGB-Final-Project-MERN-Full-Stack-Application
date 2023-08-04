import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { QUERY_PROJECTS } from "../utils/queries";
import { ADD_TO_CART, UPDATE_PROJECTS } from "../utils/actions";
import { useQuery } from "@apollo/react-hooks";
import image1 from "../assets/images/projects/image1.jpg";
import image2 from "../assets/images/projects/image2";
import image3 from "../assets/images/projects/image3.jpg";
import image4 from "../assets/images/projects/image4.jpg";
import image5 from "../assets/images/projects/image5.jpg";
import image6 from "../assets/images/projects/image6.jpg";
import image7 from "../assets/images/firm/image7.jpg";

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

      return (
        <div className="center-children-vertical">
          <h1 className="larger-font">Architectual Project Portfolio!</h1>
          <br />
          <div class="container">
            <div class="columns">
                <div class="card column is-one-quarter">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={image1} alt="Image 1" />
                        </figure>
                    </div>
            
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                            
                            </div>
                            <div class="media-content">
                            
                            </div>
                        </div>
            
                        <div class="content">
                            <b>Item</b>: Project 1
                            <br />
                            <b>Price</b>: $1000.99
                            <br />
                            <b>Target Date</b>: 10-26-2024
                            <br /><br />
                            <div class="card">
                                <footer class="card-footer">
                                    <a href="/customerdashboard" class="card-footer-item">Buy</a>
                                    
                                </footer>
                            </div>
                            <br />
                            <time datetime="8-1-2023">11:09 PM - 1 August 2023</time>
                        </div>
                    </div>
                </div>
            
                <div class="card column is-one-quarter">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={image2} alt="Image-2" />
                        </figure>
                    </div>
            
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                            
                            </div>
                            <div class="media-content">
                            
                            </div>
                        </div>
            
                        <div class="content">
                            <b>Item</b>: Project 2
                            <br />
                            <b>Price</b>: $2000.99
                            <br />
                            <b>Target Date</b>: 10-26-2024
                            <br /><br />
                            <div class="card">
                                <footer class="card-footer">
                                    <a href="/customerdashboard" class="card-footer-item">Buy</a>
                                    
                                </footer>
                            </div>
                            <br />
                            <time datetime="8-1-2023">11:09 PM - 1 August 2023</time>
                        </div>
                    </div>
                </div>
            
                <div class="card column is-one-quarter">
                      <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={image3} alt="Image-3" />
                        </figure>
                      </div>
            
                    <div class="card-content">
                        <div class="media">
                            <div class="media-left">
                            
                            </div>
                            <div class="media-content">
                            
                            </div>
                        </div>
            
                        <div class="content">
                            <b>Item</b>: Project 3
                            <br />
                            <b>Price</b>: $3000.99
                            <br />
                            <b>Target Date</b>: 10-26-2024
                            <br /><br />
                            <div class="card">
                                <footer class="card-footer">
                                    <a href="/customerdashboard" class="card-footer-item">Buy</a>
                                    
                                </footer>
                            </div>
                            <br />
                            <time datetime="8-1-2023">11:09 PM - 1 August 2023</time>
                        </div>
                    </div>
                </div>
    
                <div class="card column is-one-quarter">
                    <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={image4} alt="Image-4" />
                        </figure>
                    </div>
            
                    <div class="card-content">
                          <div class="media">
                            <div class="media-left">
                            
                            </div>
                            <div class="media-content">
                            
                            </div>
                          </div>
            
                        <div class="content">
                            <b>Item</b>: Project 4
                            <br />
                            <b>Price</b>: $4000.99
                            <br />
                            <b>Target Date</b>: 10-26-2024
                            <br /><br />
                            <div class="card">
                                <footer class="card-footer">
                                    <a href="/customerdashboard" class="card-footer-item">Buy</a>
                                    
                                </footer>
                            </div>
                            <br />
                            <time datetime="8-1-2023">11:09 PM - 1 August 2023</time>
                        </div>
                      </div>
                    </div>
                  </div>
    
                  <div class="columns">
                    <div class="card column is-one-quarter">
                      <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={image5} alt="Image 5" />
                        </figure>
                      </div>
            
                      <div class="card-content">
                          <div class="media">
                            <div class="media-left">
                            
                            </div>
                            <div class="media-content">
                            
                            </div>
                          </div>
            
                          <div class="content">
                            <b>Item</b>: Project 5
                            <br />
                            <b>Price</b>: $5000.99
                            <br />
                            <b>Target Date</b>: 10-26-2024
                            <br /><br />
                            <div class="card">
                                <footer class="card-footer">
                                    <a href="/customerdashboard" class="card-footer-item">Buy</a>
                                    
                                </footer>
                            </div>
                            <br />
                            <time datetime="8-1-2023">11:09 PM - 1 August 2023</time>
                          </div>
                      </div>
                  </div>
            
                  <div class="card column is-one-quarter">
                      <div class="card-image">
                        <figure class="image is-4by3">
                            <img src={image6} alt="Image 6" />
                        </figure>
                      </div>
            
                      <div class="card-content">
                          <div class="media">
                            <div class="media-left">
                            
                            </div>
                            <div class="media-content">
                            
                            </div>
                          </div>
            
                          <div class="content">
                            <b>Item</b>: Project 6
                            <br />
                            <b>Price</b>: $6000.99
                            <br />
                            <b>Target Date</b>: 10-26-2024
                            <br /><br />
                            <div class="card">
                                <footer class="card-footer">
                                    <a href="/customerdashboard" class="card-footer-item">Buy</a>
                                    
                                </footer>
                            </div>
                            <br />
                            <time datetime="8-1-2023">11:09 PM - 1 August 2023</time>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
          <br />
          {data && (
            <div className="product-list">
              {data.products.map((item) => (
                <div className="product-card flex" key={item._id}>
                  <img src={`/images/${item.image}`} className="margin-top-0" alt={"picture of " + item.name}/>
                  <h1 className="text-align">{item.name}</h1>
                  <h1 className="text-align">{item.description}</h1>
                  <h1 className="text-align">Price: ${item.price}</h1>
                  <h1 className="text-align">Quantity: {item.quantity}</h1>
                  <button onClick={() => addToCart(item._id)}>Add To Cart</button>
                </div>
              ))}
            </div>
          )}
        </div>
      );
    }
    
    export default Home;
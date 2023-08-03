import React from "react";
import { Helmet } from "react-helmet";

import image1 from "../assets/images/image1.jpg";
import image2 from "../assets/images/image2.jpg";
import image3 from "../assets/images/image3.jpg";
import image4 from "../assets/images/image4.jpg";
import image5 from "../assets/images/image5.jpg";
import image6 from "../assets/images/image6.jpg";
import image7 from "../assets/images/image7.jpg";

const CustomerDashboard = () => {
    return (
    <main>
        <nav class="navbar is-danger" role="navigation" aria-label="main navigation">
          <div id="navbarBasicExample" class="navbar-menu">
              <div class="navbar-start">        
                  <div class="navbar-item has-dropdown is-hoverable">
                      <a class="navbar-link">
                          Orders
                      </a>
  
                      <div class="navbar-dropdown">
                          <a class="navbar-item button" href="#" disabled>
                          Orders Recieved
                          </a>
                          <a class="navbar-item button" href="#" disabled>
                          Orders Shipped
                          </a>
                          <hr class="navbar-divider" />
                          <a class="navbar-item button" href="#" disabled>
                          Submit a Vendor Review
                          </a>
                      </div>
                  </div>
          
                  <div class="navbar-item has-dropdown is-hoverable">
                      <a class="navbar-link">
                          Account
                      </a>
  
                      <div class="navbar-dropdown">
                          <a class="navbar-item button" href="#" disabled>
                          Update Your Information
                          </a>                        
                          <a class="navbar-item button" href="#" disabled>
                          Settings & Privacy
                          </a>
                          <a class="navbar-item button" href="#" disabled>
                          Help & Support
                          </a>
                          <a class="navbar-item button" href="#" disabled>
                          Display & Accessibility
                          </a>
                          <hr class="navbar-divider" />
                          <a class="navbar-item button" href="#" disabled>
                          Provide Feedback
                          </a>
                      </div>
                  </div>
              </div>
          </div>
      </nav>
  

      <div class="tabs is-toggle is-fullwidth" id="tabs">
          <ul>
              <li class="is-active" data-tab="1">
                  <a>
                  <span class="icon is-small"><i class="fas fa-info"></i></span>
                  <span>Customer Information</span>
                  </a>
              </li>
              <li data-tab="2">
                  <a>
                  <span class="icon is-small"><i class="fas fa-file-invoice-dollar"></i></span>
                  <span>Recent Purchases</span>
                  </a>
              </li>
              <li data-tab="3">
                  <a>
                  <span class="icon is-small"><i class="fas fa-users"></i></span>
                  <span>Favorite Vendors</span>
                  </a>
              </li>
              <li data-tab="4">
                  <a>
                  <span class="icon is-small"><i class="fas fa-comment-alt"></i></span>
                  <span>Top Vendors</span>
                  </a>
              </li>
          </ul>
      </div>
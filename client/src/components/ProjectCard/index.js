import React from 'react';
import { Link } from 'react-router-dom';

const ProjectList = ({ project }) => {
    return (
        <div className="container">
            <div className="content">
                <b>Item</b>: {ProjectName}
                <br/>
                <b>Price</b>: {price}
                <br/>
                <b>Target Date</b>: {postedAt}
                <br/><br/>
                <div className="card">
                    <footer className="card-footer">
                        <a href="#" className="card-footer-item">Add</a>
                        <a href="#" className="card-footer-item">Remove</a>
                    </footer>
                 </div>
                    <br/>
                    <time datetime="2023-8-1">11:09 PM - 1 August 2023</time>
                
            </div>
        </div>
    );
};

export default ProjectList;
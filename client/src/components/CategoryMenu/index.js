import React, { useEffect } from 'react';
import { useQuery } from '@apollo/client';
import { useStoreContext } from '../../utils/GlobalState';
import {
  UPDATE_CATEGORIES,
  UPDATE_CURRENT_CATEGORY,
} from '../../utils/actions';
import { QUERY_CATEGORIES } from '../../utils/queries';
import { idbPromise } from '../../utils/helpers';


function CategoryMenu() {
  const [state, dispatch] = useStoreContext();

  const { categories } = state;

  const { loading, data: categoryData } = useQuery(QUERY_CATEGORIES);

  useEffect(() => {
    if (categoryData) {
      dispatch({
        type: UPDATE_CATEGORIES,
        categories: categoryData.categories,
      });
      categoryData.categories.forEach((category) => {
        idbPromise('categories', 'put', category);
      });
    } else if (!loading) {
      idbPromise('categories', 'get').then((categories) => {
        dispatch({
          type: UPDATE_CATEGORIES,
          categories: categories,
        });
      });
    }
  }, [categoryData, loading, dispatch]);

  const handleClick = (id) => {
    dispatch({
      type: UPDATE_CURRENT_CATEGORY,
      currentCategory: id,
    });
  };

  return (
    <div>
      <br></br>
      <br></br>
      <h2 style={{ textAlign: 'center' }}>Application to Manage Architectual & Construction Projects</h2>
      <br></br>
      <p> Our application takes care of managing your architectural projects, we provide the necessary framework to design, build, manage and complete architectonical and construction projects. We take care to develop your project in a cost-effective, profitable and with the highest quality. Our portfolio contains high impact and some of the best architectonical projects worldwide.</p>
      <br></br>
      <h3>Architectual and Construction Projects Categories</h3>
      <br></br>
      {categories.map((item) => (
        <button 
          key={item._id}
          onClick={() => {
            handleClick(item._id);
          }}
        >
          {item.name}
        </button>
        
      ))}
    
      <div>
       
      </div>
    </div>


  );
}

export default CategoryMenu;
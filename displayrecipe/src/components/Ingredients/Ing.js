import React from 'react';
import './Ing.css';

const Ing = props => {
  let allIngredients = [];
  const data = props.PostRecipesIngredients;

  if (data[0] === undefined) {
  } else {
    for (let i in data) {
      let ing = data[i].ingredients;
      for (let j in ing) {
        allIngredients.push(ing[j]);
      }
    }
  }

  return (
    <div class='container'>
      <p class='heading'>Ingredients</p>
      <div class='ingscroll'>
        <ul class='ks-cboxtags'>
          {allIngredients.map((data, idx) => {
            return (
              <li>
                <input type='checkbox' id={idx} value='Rainbow Dash' />

                <label for={idx}>
                  <div class='checkdata'>
                    <div class='checktitle'>{data.description}</div>
                    <div>
                      {data.quantity === undefined
                        ? 'Quantity : -'
                        : `Quantity : ${data.quantity}`}
                      &nbsp;
                      {data.unit.length === 0
                        ? '• Unit : -'
                        : `• Unit : ${data.unit}`}
                    </div>
                  </div>
                </label>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
};

export default Ing;

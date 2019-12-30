import React from 'react';
import './MenuBar.css';
const MenuBar = () => {
  return (
    <div className='OuterContainer'>
      <div className='InnerContainer1'>
        <p>data</p>
        <p>Array</p>
        <p />
        <p className='Required'> required</p>
      </div>
      <div className='InnerContainer1'>
        <p>backgroundColor</p>
        <p>String</p>
        <p>'#08cbc4'</p>
      </div>
      <div className='InnerContainer1'>
        <p>animation</p>
        <p>Array</p>
        <p>['slideIn','slideOut']</p>
      </div>
      <div className='InnerContainer1'>
        <p>textColor</p>
        <p>String</p>
        <p>'white'</p>
      </div>
      <div className='InnerContainer1'>
        <p>menuContainerWidth</p>
        <p>Custom</p>
        <p>300px</p>
      </div>
      <div className='InnerContainer1'>
        <p>className</p>
        <p>CSS className</p>
      </div>
      <div className='InnerContainer1'>
        <p>hamBurgerClassName</p>
        <p>CSS className</p>
      </div>
      <div className='InnerContainer1'>
        <p>iconColor</p>
        <p>String</p>
        <p>'#08cbc4'</p>
      </div>
      <div className="InnerContainer1">
        <p>onClick</p>
        <p>function</p>
      </div>
    </div>
  );
};

export default MenuBar;

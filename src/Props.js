import React from 'react';
import './props.css';
const Props = () => {
  return (
    <div className='OuterContainer'>
      <table>
        <tbody>
          <tr>
            <th>Name of the Prop</th>
            <th>Type of the prop</th>
            <th>Default</th>
            <th>Usage</th>
          </tr>
          <tr>
            <td>
              <a href='/src-props/#example-1'>data</a>
            </td>
            <td>Array</td>
            <td></td>
            <td>To render values in the menubar</td>
          </tr>
          <tr>
            <td>
              <a href='/src-props/#example-1'>backgroundColor</a>
            </td>
            <td>String</td>
            <td>'#08cbc4'</td>
            <td>To change the background color of the menubar</td>
          </tr>
          <tr>
            <td>
              <a href='/src-props/#example-1'>animation</a>
            </td>
            <td>Array</td>
            <td>['slideIn' , 'slideOut']</td>
            <td>To set the animation for the menubar</td>
          </tr>
          <tr>
            <td>
              <a href='/src-props/#example-1'>textColor</a>
            </td>
            <td>String</td>
            <td>'#ffffff'</td>
            <td>To change the text color</td>
          </tr>

          <tr>
            <td>
              <a href='/src-props/#example-2'>className</a>
            </td>
            <td>String</td>
            <td></td>
            <td>To set your own styling to the menubar</td>
          </tr>
          <tr>
            <td>
              <a href='/src-props/#example-2'>hamBurgerClassName</a>
            </td>
            <td>String</td>
            <td></td>
            <td>To set your own styling to the ham-burger icon</td>
          </tr>
          <tr>
            <td>
              <a href='/src-props/#example-2'>iconColor</a>
            </td>
            <td>String</td>
            <td>'#08cbc4'</td>
            <td>To change the icon color of the ham-burger icon</td>
          </tr>
          <tr>
            <td>
              <a href='/src-props/#example-3'>menuContainerWidth</a>
            </td>
            <td>Number or String</td>
            <td>300 or '300px'</td>
            <td>To change the menu-items width</td>
          </tr>
          <tr>
            <td>
              <a href='/src-props/#example-3'>onClick</a>
            </td>
            <td>Function</td>
            <td></td>
            <td>A callback function which recieves the value</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Props;

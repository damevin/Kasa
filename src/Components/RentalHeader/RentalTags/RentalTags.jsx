import React, { Component } from "react";
import "./RentalTags.scss";

export default class RentalTags extends Component {
 render() {
  return (
   <ul className='tags'>
    {this.props.tags.map((tag, index) => {
						return <li className='tag' key={index}>{tag}</li>;
					})}
   </ul>
  )
 }
}

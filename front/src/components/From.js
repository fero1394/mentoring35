import React, { useState } from 'react'
import { connect } from 'react-redux';
import { fetchRandom } from '../actions';
import img from  '../imagenes/naipe.png'

const From = (props) => {// component stateless
  const [state, setState] = useState();
  const onSubmit = (e) => {
    e.preventDefault();
    props.dispatch(fetchRandom(state));
  };
  return <div>
    <form onSubmit={onSubmit}>
   
      <img alt='' src= {img} width = "500px" height = "300px"></img>
      <br />
  
      <br />
      <button type="submit" disabled={props.loading}>
        Escoger Carta
      </button>
    </form>
  </div>
}


const stateMapToPros = state => {
  return {
    loading: state.view.loading
  }
}


export default connect(stateMapToPros)(From)

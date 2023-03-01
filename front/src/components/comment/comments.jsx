/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import mg from './star.png'
import mg2 from "./Ellipse.png"
const styles = {
  block : {
    height: "367px",
    width: "367px",
    boxShadow: "0px 0px 20px 1px 10px black",
    
  },

  letter: {
    width: 291,
    height:154,
    fontFamily: 'Mulish',
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "18px",
    lineHeight: "29px",
    
  },
  logo: {
    height: 32,
    width:32
  },
  size: {
    paddingLeft: 33,
    paddingRight: 44,
    paddingTop: 34,
  }
}
 const Comments = () => {
  return (
    <div style={styles.block} className="shadow-2xl shadow-black-200/50">
      <div style={styles.size}>
      <img src={mg} style={styles.logo}></img>
        <div style={styles.letter}>Give everyone you work with—inside<br></br> and outside your emoji, keep<br></br> conversations focused in channels, and <br></br>simplify all your communication into<br></br> one place.</div>
        <div className='flex space-x-4 pt-[50px]'>
          <img src={mg2} className="h-[56px] w-[56px]"></img> 
          <div>Amy Klassen</div>  
        </div>
        
     </div>
      
      </div>
  )
}
export default Comments
import React from 'react';
// import pic from './1720415996028.jpg'

const ImagePage = () => { 
  const pic = './images/1720419944924.jpg';
  return (
    <div>
      <img src={require(pic)} />
      {/* <img src={pic}/> */}
    </div>
  );
}

export default ImagePage;

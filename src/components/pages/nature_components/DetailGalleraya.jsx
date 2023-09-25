import ImageGallery from 'react-image-gallery';
import React from 'react';

class MyGallery extends React.Component {
  constructor(props){
    super(props);
    this.state={
      imgCollection:this.props.imgCollection
    }
  }
  render() {
    const imgCollection=this.state.imgCollection;
    return <ImageGallery slideInterval={10000} autoPlay={true} items={imgCollection} />;
  }
}
export default MyGallery;
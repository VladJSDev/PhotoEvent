import React, { Component } from "react";
import PropTypes from "prop-types";
import Gallery from "react-photo-gallery";
import Lightbox from 'react-images';
import Modal from 'react-modal';
import PicturePopup from '../common/PicturePopup';
import jsonFetch from '../../assets/api/api';
import Page from "react-page-loading";

const theme = {
  content: {
		background: 'rgba(255, 255, 255, 1)',
    minWidth: '80%',
    padding: '20px',
    minHeight: 'calc(100vh - (20px * 2))',
    maxHeight: '800px',
    display: 'flex',
    flexDirection: 'column'
	},
  header:{
    height:'60px',
    order: 1,
    marginTop:'-30px'
  },
  close: {
    position:'absolute',
    top:-5,
    left:0,
    fill: '#323232',
    opacity: 0.6,
    transition: 'all 200ms',
    ':hover': {
      opacity: 1,
    },
  },
};


class EventShowcase extends Component {
  constructor() {
      super();
      this.state = {
        currentImage: 0,
        lightboxIsOpen:false,
        pictures_list:[],
        loader:false
      };
      this.closeLightbox = this.closeLightbox.bind(this);
      this.openLightbox = this.openLightbox.bind(this);
      this.gotoNext = this.gotoNext.bind(this);
      this.gotoPrevious = this.gotoPrevious.bind(this);
  }

  async componentWillMount(){
    let temp_array = [];
    let curState = this;
    const response = await jsonFetch('v2/photostore/_table/view_eventphoto?filter=category_id='+this.props.id.id.id_parent, {method:'GET'});
    if(response.resource){
      for(let i = 0; i < response.resource.length; i++){
        var img = new Image();
        img.onload = function() {
          var aRatio = this.width % this.height;
          if(this.width < this.height)
            aRatio = this.height % this.width;
          var widthR = parseInt(this.width / aRatio);
          var heightR = parseInt(this.height / aRatio);
          console.log(aRatio);
          temp_array.push({
            src:this.src,
            photographer_avatar:"http://beta.eventphoto.me" + response.resource[i].photographer_avatar,
            photographer_name:response.resource[i].photographer_name,
            title:response.resource[i].title,
            width: widthR,
            height: heightR,
            url_jpg:response.resource[i].url_jpg
          });
          if(temp_array.length == response.resource.length){
            console.log("Response", temp_array);
            curState.setState({pictures_list:temp_array, loader:true});
          }
        }
        img.onerror = function() {

        }
        img.src = "http://beta.eventphoto.me/content2/"+response.resource[i].thumb_id+"/thumb2.jpg";

      }
      //this.setState({pictures_list:temp_array});
    }
    console.log("Response", response.resource);
  }

  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }

  checkImgSize(src){

  }

  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }

  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }

  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }

  render() {
      const BasicColumns = () => (
        <div>
          <Gallery photos={this.state.pictures_list} onClick={this.openLightbox} direction={"column"} />
          <Lightbox images={this.state.pictures_list}
            customControls= {<PicturePopup data={this.state.pictures_list[this.state.currentImage]} />}
            onClose={this.closeLightbox}
            onClickPrev={this.gotoPrevious}
            onClickNext={this.gotoNext}
            currentImage={this.state.currentImage}
            isOpen={this.state.lightboxIsOpen}
            theme={theme}
          />
        </div>
      );

      return (
        <React.Fragment>
          {(this.state.loader)?
              <section id="events" className="testimonials-area ptb-100">
                <div className="container">
                  <div className="events-title">
                    <h3>{this.props.id.id.title}</h3>
                    <p>{this.props.id.id.noofphotos + " Photos"}</p>
                  </div>
                  <BasicColumns />
                </div>
              </section>
            :
            <div>
              <Page loader={"bar"} color={"#506CEA"} size={9} duration={10}>
              </Page>
            </div>
          }
        </React.Fragment>
    );
  }
}

//Props Types
EventShowcase.propTypes = {
  event_name: PropTypes.string,
  event_info: PropTypes.string,
  pic_data: PropTypes.array,
};

//Default Props
EventShowcase.defaultProps = {
  event_name: "Ride & Run 2019",
  event_info: "Date and pics",
  pic_data: [
      {
          src: require("../../assets/img/5.jpg"),
          width: 2,
          height: 3
      },
      {
          src: require("../../assets/img/10.jpg"),
          width: 4,
          height: 3
      },
      {
          src: require("../../assets/img/2.jpeg"),
          width: 4,
          height: 3
      },
      {
          src: require("../../assets/img/3.jpeg"),
          width: 4,
          height: 3
      },
      {
          src: require("../../assets/img/4.jpeg"),
          width: 4,
          height: 3
      },
      {
          src: require("../../assets/img/1.jpeg"),
          width: 4,
          height: 3
      },
      {
          src: require("../../assets/img/6.jpeg"),
          width: 4,
          height: 3
      },
      {
          src: require("../../assets/img/7.jpeg"),
          width: 4,
          height: 3
      },
      {
          src: require("../../assets/img/8.jpeg"),
          width: 2,
          height: 1
      },
      {
          src: require("../../assets/img/9.jpeg"),
          width: 4,
          height: 3
      },
  ],
};

export default EventShowcase;

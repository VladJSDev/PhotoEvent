import React, { Component } from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";
import jsonFetch from '../../assets/api/api';
import Page from "react-page-loading";

class RunnerShowcase extends Component {
  constructor(){
    super();
    this.state = {
      event_list:[],
      loader:false
    };
  }

  async componentDidMount() {
    const response = await jsonFetch('v2/photostore/_table/view_eventlist/', { method: 'GET' });
    let temp_array = [];
    if(response.resource){
      temp_array = response.resource;
      for(let i = 0 ; i < response.resource.length; i++){
        temp_array[i].images_array = [];
      }
    }
    this.setState({event_list:temp_array, loader:true});
    this.getPictures(temp_array);
  }

  async getPictures(data) {
    let temp_array = data;
    for(let i = 0; i < data.length; i++){
      const response2 = await jsonFetch('v2/photostore/_table/view_eventphoto?filter=category_id=' + data[i].id_parent, {method:'GET'});
      for(let j = 0; j < 3; j++){
        temp_array[i].images_array.push(response2.resource[j]);
      }
    }
    console.log("Total Data", temp_array);
    this.setState({event_list:temp_array});
  }

  render() {
    let {event_list}=this.state;
      //Testimonial Data loop Start
      const testimonialData = event_list.map(
          (testimonial, index) => (
              <div className="col-lg-4 col-md-4 curved-corners" key={index}>
                <Link to={{pathname:"/events", state:{id:testimonial}}}>
                  <div className="testimonials-item">
                    <div className="col-md-12 no-padding">
                      <img
                          className="event-cover-img"
                          src={ "http://beta.eventphoto.me" + testimonial.photo}
                          alt="img"
                      />
                    </div>
                    <div className="row thumbnail-items">
                        {testimonial.images_array.map(
                          (data, index) => (
                            <div className="col-md-4 col-sm-4 resp-small-img no-padding" key={index}>
                              <img
                                  className="small-image"
                                  src={"http://beta.eventphoto.me/content2/" + data.thumb_id + "/thumb2.jpg"}
                                  alt="img"
                              />
                            </div>
                          )
                        )}
                    </div>
                  </div>
                  </Link>
                  <div className="events-title">
                        <h4>{testimonial.title}</h4>
                        <p>{testimonial.noofphotos + " Photos"}</p>
                  </div>
              </div>
          )
      );
      //Testimonial Data loop END
      return (
          <React.Fragment>
            {(this.state.loader)?
              <section className="testimonials-area ptb-100">
                  <div className="container">
                      <div className="section-title">
                          <h3>{this.props.sectionTitle}</h3>
                          <p>{this.props.sectionDescription}</p>
                      </div>
                      <div className="row">{testimonialData}</div>
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
RunnerShowcase.propTypes = {
    sectionTitle: PropTypes.string,
    sectionDescription: PropTypes.string,
    servicesData: PropTypes.array,
    showcaseBtnOneLink: PropTypes.string,
};

//Default Props
RunnerShowcase.defaultProps = {
    sectionTitle: "Discover Your Memory Pictures",
    showcaseBtnOneLink: "/events",
    sectionDescription:
        "Explore the most popular collections.",
    eventsData: [
      {
          image: require("../../assets/img/1.jpeg"),
          image_array: [{image:require("../../assets/img/2.jpeg")}, {image:require("../../assets/img/3.jpeg")}, {image:require("../../assets/img/4.jpeg")}],
          name: "Ride & Run 2019",
          info: "Date and pics",
      },
      {
          image: require("../../assets/img/5.jpg"),
          image_array: [{image:require("../../assets/img/6.jpeg")}, {image:require("../../assets/img/7.jpeg")}, {image:require("../../assets/img/8.jpeg")}],
          name: "Run 2019",
          info: "Date and pics",
      },
      {
          image: require("../../assets/img/9.jpeg"),
          image_array: [{image:require("../../assets/img/1.jpeg")}, {image:require("../../assets/img/2.jpeg")}, {image:require("../../assets/img/3.jpeg")}],
          name: "ThaiRun: Carrot",
          info: "Date and pics",
      },
    ]
};

export default RunnerShowcase;

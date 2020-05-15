import React, { Component } from "react";


class PicturePopup extends Component {
  constructor() {
      super();
  }

  render(){
    let {data} = this.props;
    return(

          <div class="level level--responsive">
            <div class="level__left photo-page__hidden-on-mobile">
              <div class="level__item">
                <div class="level level--responsive-large">
                  <div class="level__item">
                    <a class="js-photo-page-mini-profile-link photo-page__mini-profile" data-track-action="medium-mini-profile" data-track-label="user-profile" href="/@viniciuscosta">
                      <div class="js-photo-page-mini-profile-avatar photo-page__mini-profile__avatar rd__avatar rd__avatar--large">
                        <img alt="undefined" height="50" src={data.photographer_avatar} width="50" />
                      </div>
                      <div class="photo-page__mini-profile__text">
                        <h3 class="js-photo-page-mini-profile-full-name photo-page__mini-profile__text__title">{data.photographer_name}</h3>
                        <div class="js-photo-page-mini-profile-followers photo-page__mini-profile__text__subtitle"><span>#</span> Followers</div>
                      </div>
                    </a>
                  </div>

                </div>
              </div>
            </div>
            <div class="level__right photo-page__action-buttons-level-item ">
              <div class="level__item photo-page__action-buttons-level-item">
                <div class="rd__button-group photo-page__action-buttons">
                  <button class="js-like js-photo-page-action-buttons-like rd__button rd__button--white rd__button--with-icon-left js-like-1913447" data-photo-id="1913447" data-initialized="true">
                    <span class="js-text"><span class="js-count">#</span> likes</span>
                  </button>
                  <button class="js-collect js-photo-page-action-buttons-collect rd__button rd__button--white rd__button--with-icon-left js-collect-1913447" data-photo-id="1913447" data-initialized="true">
                    <span>Collect</span>
                  </button>
                  <div class="btn-group">
                    <a class="btn btn-download btn-lg" role="submit"  href={data.src} download>
                      Free Download
                    </a>
                    <a class="btn btn-download btn-lg dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                      <span class="sr-only">Toggle Dropdown</span>
                    </a>
                    <div class="dropdown-menu">
                    <form>
                      <h3 class="rd__selection-list__title">Choose photo size:</h3>
                        <ul class="rd__selection-list">
                          <li class="js-download-size-option">
                            <label>
                              <input data-name="large" name="download-size" type="radio" value="1920x1280" />
                              <span class="js-download-size-option-text">
                                <strong>Large</strong> (1920 x 1280)
                              </span>
                            </label>
                          </li>
                          <li class="js-download-size-option">
                            <label>
                              <input data-name="small" name="download-size" type="radio" value="640x426" />
                              <span class="js-download-size-option-text"><strong>Small Free</strong> (640 x 426)</span>
                            </label>
                          </li>
                        </ul>
                        <h3 class="rd__selection-list__footer">
                          <a class="btn btn-download btn-lg" role="submit" download  href={data.src}>
                            Download Photo
                          </a>
                        </h3>
                    </form>

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
    );
  }
}
export default PicturePopup;

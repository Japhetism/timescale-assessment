import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const StyledModal = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transition: opacity linear 0.15s;
  z-index: 2000;
  height: 474px;
  background: #FFFFFF;
  @media (max-width: 550px) {
    width: 350px;
}
  width: ${props => {
    switch (props.modalSize) {
      case "lg":
        return "800";
      case "md":
        return "583";
      default:
        return "480";
    }
  }}px;
  margin: 40px auto;
  &.fade-in {
    opacity: 1;
    transition: opacity linear 0.15s;
  }
  &.fade-out {
    opacity: 0;
    transition: opacity linear 0.15s;
  }
  .background {
    background: rgba(0, 0, 0, 0.5);
    position: fixed;
    z-index: 1040;
    display: block;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: 0;
  }
  .box-dialog {
    z-index: 1050;
    width: 100%;
    background-color: #fefefe;
    box-shadow: 0 3px 9px rgba(0, 0, 0, 0.5);
    .box-content {
      padding: 24px;
      width: 100%;
    }
    .box-header {
      height: 48px;
      padding: 8px 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .box-title {
        font-size: 24px;
        font-weight: 400;
        margin: 0 0 0 0;
      }
      .x-close {
        font-size: 35px;
        line-height: 35px;
        font-weight: 400;
        text-shadow: none;
        color: black;
        cursor: pointer;
        &:hover {
          opacity: 0.5;
        }
      }
    }
    .box-body {
      font-size: 14px;
      padding: 0px;
      width: auto;
      height: auto;
    }
    .box-footer {
      height: 48px;
      padding: 0px 24px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
      border-top: 1px solid #c7c7c7;
    }
    .row {
      display: flex;
    }
    .column {
      flex: 50%;
      padding: 10px;
      height: 400px;
    }
    .image {
      width: 266px;
      height: 389px;
      left: 458px;
      top: 389px;
    }
    .overview {
      position: static;
      width: 341px;
      left: 0px;
      top: 36px;
      font-family: Inter;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 17px;
      letter-spacing: -0.01em;
      color: #000000;

    }
    .hide-mobile {
      @media (max-width: 550px) {
        display: none;
    }
    }
  }
`;

const Modal = (props) => {
    const [fadeType, setFadeType] = useState(null);

    useEffect(() => {
        if (!props.isOpen) {
            setFadeType("out");
        } else {
            window.addEventListener("keydown", onEscKeyDown, false);
            setTimeout(() => setFadeType("in"), 0);
        }
    }, [props.isOpen]);

    useEffect(() => {
        return () => { window.removeEventListener("keydown", onEscKeyDown, false) };
    });

    const transitionEnd = e => {
        if (e.propertyName !== "opacity" || fadeType === "in") return;
    
        if (fadeType === "out") {
          props.onClose();
        }
    };
    
    const onEscKeyDown = e => {
        if (e.key !== "Escape") return;
        setFadeType("out");
    };
    
    const handleClick = e => {
        e.preventDefault();
        setFadeType("out")
    };

    return <React.Fragment> 
        <StyledModal
            id={props.id}
            className={`wrapper ${"size-" + props.modalSize} fade-${
            fadeType
            } ${props.modalClass}`}
            role="dialog"
            modalSize={props.modalSize}
            onTransitionEnd={transitionEnd}
        >
            <div className="box-dialog">
                <div className="box-header">
                    <h4 className="box-title">{props.data.title}</h4>
                    <button onClick={handleClick} className="close">
                    ×
                    </button>
                </div>
                <div className="box-content">
                  <div className="row">
                    <div className="column hide-mobile">
                        <img className="image" src={`${process.env.REACT_APP_API_BASE_IMAGE_URL}${props.data.poster_path}`} />
                    </div>
                    <div className="column">
                      <h3>Release Date: {props.data.release_date}</h3><span></span>
                      <p className="overview">{props.data.overview}</p>
                      <span><strong>{props.data.vote_average}</strong> / 10</span>&nbsp;
                      <span>{`(${props.data.vote_count} total votes)`}</span>
                    </div>
                  </div>
                </div>
            </div>
            <div
                className={`background`}
                onMouseDown={handleClick}
                // ref={this.background}
            />
        </StyledModal>
    </React.Fragment>
}

export default Modal;
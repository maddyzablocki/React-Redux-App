import React from 'react';
import { connect } from 'react-redux';
import { fetchCatFact } from '../Actions/index';
import Loader from 'react-loader-spinner';

const Cats = props => {
    return (
        <div>
            <div className="button">
            <button onClick={props.fetchCatFact}>Click here for cuteness</button>
            
            {!props.dogImg && !props.isLoading && (
                <h2>Go ahead a fetch a new activity!</h2>
            )}
            </div>
            {props.isLoading && (
                <Loader type="Hearts"
                color="#AC3B61"
                height={80}
                width={80}
                timeout={8000}
                />
            )}
            {props.dogImg && !props.isLoading && <img src={props.dogImg.url}/>}
        </div>
    );
};

const mapStateToProps = state => {
    return{
        isLoading: state.isLoading,
        dogImg: state.dogImg,
        error: state.error
    };
};

export default connect(
    mapStateToProps,
    {fetchCatFact}
)(Cats);
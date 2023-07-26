import PropTypes from 'prop-types';
//import { Fragment } from "react";

// const getResult = () => {
//     return 2+4;
// }

// const newMessage = {
//     message: 'Hola',
//     title: 'Estefania'
// }

//const newMessage = 'Gisselle!!';

export const FirstApp = ({ title, subTitle, name }) => {

    //console.log(props);
    return (
        <>
            <h1>{ title }</h1>
            {/* <h1>{ getResult() }</h1> */}
            {/* <code>{JSON.stringify(newMessage)}</code> */}
            <p>{ subTitle }</p>
            <p>{ name }</p>
        </>
    );
}


FirstApp.propTypes={
    name: PropTypes.string.isRequired,
    subTitle: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
}

FirstApp.defaultProps ={
     name:"Gis",
     subTitle: "No hay subtitulo",
     title:"No hay titulo",
}
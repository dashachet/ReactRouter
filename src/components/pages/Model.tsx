import {adidasArr} from "./Adidas";
import {useReducer} from "react";
import {useParams} from "react-router-dom";

export const Model = ()=> {
    const params = useParams();
    return (
        <div style={{textAlign: 'center'}}>
            <h1>{adidasArr[Number(params.id)].model}</h1>
            <h2>{adidasArr[Number(params.id)].collection}</h2>
            <h3>{adidasArr[Number(params.id)].price}</h3>
            <img src={adidasArr[Number(params.id)].picture}
            alt={adidasArr[Number(params.id)].model}
                 style={{width: '400px' , marginBottom: '30px', height: 'auto'}}/>
        </div>
    )
}
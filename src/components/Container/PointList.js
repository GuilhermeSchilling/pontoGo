import React from "react";

import Card from "../Card";


//lista de pontos a ser passada para a funcao de paginacao

const PointList = ({ reversedArray }) => {
    return (
        <div>

            {/* map com o array invertido para receber as informacoes na ordem de mais recenete para mais antigo */}

            {reversedArray.map((point, index) => {
                return (

                    //card contendo as informacoes 

                    <Card
                        key={index}
                        personname={point.name}
                        personid={point.id}
                        hour={`${point.hourtime}:${point.minute}`}
                        date={`${point.day}/${point.mounth}/${point.year}`}>
                    </Card>
                );
            })}
        </div>
    );
};

export default PointList;
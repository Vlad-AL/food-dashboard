import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import {Chart as Chartjs} from 'chart.js/auto';
import '../styles/InfoDiagram.css'

const InfoDiagram = ({diagramData}) => {
    const data = {
        datasets: [
          {
            data: diagramData,
            backgroundColor: [
              'rgb(124, 95, 237)',
              'rgb(251, 147, 0)',
              'rgb(0, 166, 80)',
            ],
            // borderColor: [
            //     'rgb(104, 75, 237)',
            //     'rgb(241, 127, 0)',
            //     'rgb(0, 166, 40)',
            // ],
        },
    ],
    labels: ['Carbohydrates', 'Fats', 'Protein'],
}


const options= {
    cutout: 50,
    plugins: {
            legend: false
    },
}
    

    const textCenter = {
        id: 'textCenter',
        beforeDatasetsDraw(chart, args, pluginOptions) {
            const { ctx, data } = chart;

            ctx.save()
            ctx.font = '24px SimploDemi'
            ctx.fillStyle = '#361e92'
            ctx.textAlign = 'center'
            ctx.textBaseline = 'middle'
            ctx.fillText('Value', chart.getDatasetMeta(0).data[0].x, chart.getDatasetMeta(0).data[0].y)
        }
    }
    

    return (
        <div className='infoDiagram'>
            <Doughnut 
                data={data} 
                options={options} 
                plugins={[textCenter]}
            />
        </div>
    )
};

export default InfoDiagram;
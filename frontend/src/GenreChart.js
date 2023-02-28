import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, Legend);


export function GenreChart({genres}) {
    const genreNames = [];
    const genreCount = [];
    const genreColour = [];

    for (const genre of genres){
        genreNames.push(genre.name);
        genreCount.push(genre.count);
        genreColour.push("hsl(" + Math.floor(Math.random() * 360) + ", 50%, 50%)")
    }
    
    console.log(genreNames);
    const data = {
        labels: genreNames,
        datasets: [
          {
            label: '# of Mangas',
            data: genreCount,
            backgroundColor: genreColour,
            borderWidth: 1,
          },
        ],
      };
  return <Pie data={data} />;
}
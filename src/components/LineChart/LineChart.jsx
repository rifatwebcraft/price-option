import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const students = [
        { id: 1, name: "Alice", math: 85, physics: 78, chemistry: 90 },
        { id: 2, name: "Bob", math: 78, physics: 82, chemistry: 85 },
        { id: 3, name: "Charlie", math: 92, physics: 88, chemistry: 95 },
        { id: 4, name: "David", math: 67, physics: 75, chemistry: 70 },
        { id: 5, name: "Emily", math: 73, physics: 70, chemistry: 75 },
        { id: 6, name: "Frank", math: 88, physics: 85, chemistry: 92 },
        { id: 7, name: "Grace", math: 81, physics: 80, chemistry: 85 },
        { id: 8, name: "Henry", math: 79, physics: 72, chemistry: 78 },
        { id: 9, name: "Isabel", math: 95, physics: 90, chemistry: 97 },
        { id: 10, name: "Jack", math: 70, physics: 65, chemistry: 72 }
      ];
      
      
    return (
        <div>
          
            <LChart width={800} height={400} data={students}>
                <XAxis dataKey={'name'}></XAxis>
                <YAxis></YAxis>
                <Line dataKey='math' stroke='red'></Line>
                <Line dataKey='physics' stroke='yellow'></Line>
                <Line dataKey={'chemistry'} stroke='green'></Line>
            </LChart>
        </div>
    );
};

export default LineChart;
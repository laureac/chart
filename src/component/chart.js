import React, { useState, useEffect } from 'react';
import { Line } from 'react-chartjs-2';
import axios from "axios";
import './chart.scss';

function Chart(){
    const [employeeSalary, setEmployeeSalary] = useState([]);
    const [employeeAge, setEmployeeAge] = useState([]);

    const chart = () => {
        let empSal = [];
        let empAge = [];
        axios.get("http://dummy.restapiexample.com/api/v1/employees")
        .then(res =>{
            console.log(res);
            for (const dataObj of res.data.data) {
                empSal.push(parseInt(dataObj.employee_salary));
                empAge.push(parseInt(dataObj.employee_age));
              }
            setEmployeeSalary({
                labels: empSal,
                datasets: [
                  {
                    label: "Salary",
                    data: empSal,
                    backgroundColor: ["rgb(145, 101, 255)"],
                    options: {
                        legend: {
                            labels: {
                                fontColor: 'white'
                            }
                        }
                    }
                  }
                ]
            })
            setEmployeeAge({
                labels: empAge,
                datasets: [
                  {
                    label: "Age",
                    data: empAge,
                    backgroundColor: ["rgb(255, 210, 50)"],
                  }
                ]
            })
        })
        .catch(err=>{
            console.log(err)
        });
        console.log(empAge);
        console.log(empSal);
        
    }
    useEffect(() => {
        chart();
      }, []);

        return (
        <>
            <h1>Home dashboard</h1>
            <div className='dashboard'>
                <div className='container'>
                    <Line 
                        data={employeeAge}
                        options={{
                            legend: {
                                labels: {
                                     fontColor: 'white',
                                     fontSize: 20, 
                                     fontFamily: "'Roboto Mono', monospace", 
                                    }
                                 },
                            responsive: true,
                            scales: {
                            yAxes: [
                                {
                                    ticks: {
                                        fontColor: 'white',
                                        autoSkip: true,
                                    maxTicksLimit: 10,
                                    beginAtZero: true
                                    },
                                    gridLines: {
                                    display: false
                                    }
                                }
                            ],
                        xAxes:[
                            {
                                ticks: {
                                    fontColor: 'white',
                            }
                        }
                        ]}
                        }}
                    />
                </div>
                <div className='container'>
                    <Line
                        data={employeeSalary}
                        options={{
                            legend: {
                                labels: {
                                     fontColor: 'white',
                                     fontSize: 20, 
                                     fontFamily: "'Roboto Mono', monospace", 
                                    }
                                 },
                            responsive: true,
                            scales: {
                                yAxes: [
                                    {
                                        ticks: {
                                            fontColor: 'white',
                                            autoSkip: true,
                                        maxTicksLimit: 10,
                                        beginAtZero: true
                                        },
                                        gridLines: {
                                        display: false
                                        }
                                    }
                                ],
                            xAxes:[
                                {
                                    ticks: {
                                        fontColor: 'white',
                                }
                            }
                            ]}
                        }}
                    />
                </div>
            </div>
        </>
        );
    
}

export default Chart;
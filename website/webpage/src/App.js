import logo from './logo.svg';
import './App.css';
import React, { Component, useEffect } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'





function App() {



  const { useState, useEffect } = React;




  const [columns, setColumns] = useState([
    { title: 'First Name', field: 'First_Name' },
    { title: 'Last Name', field: 'Last_Name', initialEditValue: 'initial edit value' },
    // { title: 'I', field: 'issue_type', initialEditValue: 'initial edit value' , lookup: { 34: 'passwords', 63: 'email' },},
    // { title: 'Comments', field: 'comments', initialEditValue: 'initial edit value' },
    // { title: 'Status', field: 'action', initialEditValue: 'initial edit value' },

    // { title: 'hire date', field: 'hire_date', type: 'datetime' },
    // { title: 'nho date', field: 'nho_date', type: 'datetime' },
    { title: 'Appointment Time', field: 'DATE', type: 'datetime' },
    { title: 'Patient Type', field: 'Patient_Type', initialEditValue: 'initial edit value' , lookup: { 'Follow-Up': 'Follow-Up', 'New-Patient': 'New Patient' },},

    // {
    //   title: 'Birth Place',
    //   field: 'birthCity',
    //   lookup: { 34: 'İstanbul', 63: 'Şanlıurfa' },
    // },
    // {
    //   title: 'Cheesed',
    //   field: 'yes', type: 'boolean' }

  ]);



  const [data, setData] = useState([
    {First_Name:'Dmmy Data', Last_Name:'Fu', DATE:'2021-11-04 10:00:00', Patient_Type:'Follow-Up'},
    {First_Name:'Dmmy Data', Last_Name:'Fu', DATE:'2021-11-04 10:00:00', Patient_Type:'Follow-Up'},
    {First_Name:'Dmmy Data', Last_Name:'Fu', DATE:'2021-11-04 10:00:00', Patient_Type:'Follow-Up'},
  ]);

 
  useEffect(() => {
    
  async function getData() {
          const response = await fetch('http://localhost:8081/getDataAll/', {
            // mode: 'no-cors',
            method: 'GET',
            headers: {
              Accept: 'application/json',
            }
          });
          // so await the response..... it returns a "promise first", then we need to recall itself to get it
          // const movies = await response.json();
          // return movies;
  
          return response.json()
        }
        // once it gets the response back, thennnnnn do this. aka give the data back
        getData().then(movies => {
          setData(movies);
          console.log(movies); // 
        });
          }, []);


       // async function updateTable(dataUpdate) {
          //   const response = await fetch('http://localhost:8081/updateEUSPRedshift/', {
          //     // mode: 'no-cors',
          //     method: 'PUT',
          //     headers: {
          //       Accept: 'application/json',
          //     },
          //     body: JSON.stringify(
          //       "id": '',
          //       "userid": dataUpdate[0],
          //       "comments": dataUpdate[0]",
          //       "snow_id": dataUpdate[0],
          //       "action": dataUpdate[0],
          //       "issue_type": dataUpdate[0],
          //       "nho_date": dataUpdate[0],
          //       "sims_approval_date": dataUpdate[0]
          //  })
          //   });
          //   // so await the response..... it returns a "promise first", then we need to recall itself to get it
          //   // const movies = await response.json();
          //   // return movies;
    
          //   return response.json()
          // }
          // // once it gets the response back, thennnnnn do this. aka give the data back
          // updateTable().then(movies => {
          //   // setData(movies);
          //   console.log(movies); // 
          // });
          //   }, []);

  return (
    

    <MaterialTable
      title="Test - View for Doctor A"
      columns={columns}
      data={data}
      editable={{
        onRowAdd: newData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              // this is a glorifed data push
              setData([...data, newData]);

              resolve();
            }, 1000)
          }),
        onRowUpdate: (newData, oldData) =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataUpdate = [...data];
              const index = oldData.tableData.id;
              dataUpdate[index] = newData;
              setData([...dataUpdate]);


              // run update query here

              // let url = 'https://reqres.in/api/users?'  






              resolve();
            }, 1000)
          }),
        onRowDelete: oldData =>
          new Promise((resolve, reject) => {
            setTimeout(() => {
              const dataDelete = [...data];
              const index = oldData.tableData.id;
              dataDelete.splice(index, 1);
              setData([...dataDelete]);

              resolve()
            }, 1000)
          }),
      }}
      options={{
      //   rowStyle: x => {
      //     if ( x.id % 2 ) {
      //     return { backgroundColor: "#f2f2f2" }
      //     }
      // },
      
        filtering: true,
        exportButton: true
      }}
    />

  )
}

export default App;
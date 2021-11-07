import logo from './logo.svg';
import './App.css';
import React, { Component, useEffect } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'





function App() {



  const { useState, useEffect } = React;




  const [columns, setColumns] = useState([
    { title: 'First Name', field: 'first_name' },
    { title: 'Last Name', field: 'last_name', initialEditValue: 'initial edit value' },
    // { title: 'I', field: 'issue_type', initialEditValue: 'initial edit value' , lookup: { 34: 'passwords', 63: 'email' },},
    // { title: 'Comments', field: 'comments', initialEditValue: 'initial edit value' },
    // { title: 'Status', field: 'action', initialEditValue: 'initial edit value' },

    // { title: 'hire date', field: 'hire_date', type: 'datetime' },
    // { title: 'nho date', field: 'nho_date', type: 'datetime' },
    { title: 'Appointment Time', field: 'date', type: 'datetime' },
    { title: 'Patient Type', field: 'Patient_Type', initialEditValue: 'initial edit value' , lookup: { 34: 'Follow-Up', 63: 'New-Patient' },},

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
    // { userid: 'mayj', comments: 'Oh bother, the pan fire is now a van fire.', snow_id: 'cottage', action: 'HAMMOND', issue_type: 'CLARKSON', nho_date: '1984-09-12', hire_date: '1984-09-12', sims_approval_date: '1984-09-12' },
    // { name: 'Mehmet', surname: 'Baran', cheeses: 'cottage', action: 'HAMMOND', sims_approval_date: '1984-09-12' },
    // { name: 'Mehmet', surname: 'Baran', cheeses: 'cottage', birthYear: 1987, birthCity: 63 },
    // { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
    // { userid: '>>>>>>>', comments: 'Make sure you are connected to a vpn!', snow_id: 'If you see this for more than 5 seconds. Double check your connection', action: 'HAMMOND', issue_type: 'CLARKSON', nho_date: '1984-09-12', hire_date: '1984-09-12', sims_approval_date: '1984-09-12' }
    {first_name:'Grant', last_name:'Fu', date:'2021-11-04 10:00:00', Patient_Type:'Follow-Up'},
    {first_name:'Dennis', last_name:'FuFreedman', date:'2021-11-04 13:00:00', Patient_Type:34},
    {first_name:'Ben', last_name:'Kenobi', date:'2021-11-04 13:30:00', Patient_Type:64},
  //   {first_name:'Grant', last_name:'Fu', date:'2021-11-04 10:00:00', Patient_Type:'Follow-Up'},
  //   ('Dennis', 'Freedman', '2021-11-04 13:00:00', 'New Patient'),
  //   ('James', 'May', '2021-11-04 15:00:00', 'Follow-Up'),
  //  #  ('Richard', 'Hammond', '2021-11-04 1:00:00', 'New Patient')
  
  
  ]);

 
  useEffect(() => {
    
  async function fetchMoviesJSON() {
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
        fetchMoviesJSON().then(movies => {
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
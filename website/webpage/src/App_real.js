import logo from './logo.svg';
import './App.css';
import React, { Component, useEffect } from 'react'
import ReactDOM from 'react-dom'
import MaterialTable from 'material-table'





function App() {

  // constructor(props) {
  //   super(props);
  //   this.state = { data: [] };
  // }


  const { useState, useEffect } = React;





  // const { useState } = React;



  const [columns, setColumns] = useState([
    { title: 'userid', field: 'userid' },
    { title: 'SNow Number', field: 'snow_id', initialEditValue: 'initial edit value' },
    { title: 'Issue Type', field: 'issue_type', initialEditValue: 'initial edit value' },
    { title: 'Comments', field: 'comments', initialEditValue: 'initial edit value' },
    { title: 'Status', field: 'action', initialEditValue: 'initial edit value' },

    // { title: 'hire date', field: 'hire_date', type: 'datetime' },
    // { title: 'nho date', field: 'nho_date', type: 'datetime' },
    // { title: 'Sims Approval Date', field: 'sims_approval_date', type: 'datetime' },
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
    { userid: 'mayj', comments: 'Oh bother, the pan fire is now a van fire.', snow_id: 'cottage', action: 'HAMMOND', issue_type: 'CLARKSON', nho_date: '1984-09-12', hire_date: '1984-09-12', sims_approval_date: '1984-09-12' },
    { name: 'Mehmet', surname: 'Baran', cheeses: 'cottage', action: 'HAMMOND', sims_approval_date: '1984-09-12' },
    { name: 'Mehmet', surname: 'Baran', cheeses: 'cottage', birthYear: 1987, birthCity: 63 },
    { name: 'Zerya Betül', surname: 'Baran', birthYear: 2017, birthCity: 34 },
  ]);


  // function handleSelectChange(rows) {
  //   setSelectedRows(rows)
  //   }



  // var cookie;
  // var newItems
  // useEffect(() => {
  //     async function fetchMoviesJSON() {
  //       const response = await fetch('http://localhost:8081/getEUSPRedshiftAll/', {
  //         // mode: 'no-cors',
  //         method: 'GET',
  //         headers: {
  //           Accept: 'application/json',
  //         }
  //       });
  //       // so await the response..... it returns a "promise first", then we need to recall itself to get it
  //       // const movies = await response.json();
  //       // return movies;

  //       return response.json()
  //     }
  //     // once it gets the response back, thennnnnn do this. aka give the data back
  //     fetchMoviesJSON().then(movies => {

  //       console.log(movies); // fetched movies
  //       newItems = movies

  //       for (var i in movies)
  //         console.log(i)
  //       data.push([data[i]]);

  //       data.push({ userid: "test", comments: "test", snow_id: 'test', action: 'yikes', issue_type: 'CLARKSON', nho_date: '1984-09-12', hire_date: '1984-09-12', sims_approval_date: '1913-09-13' });

  //     });
  //   }, []);


  // // var cookie = fetchMoviesJSON();
  // if (newItems !== undefined) {
  //   console.log(newItems)
  // }






  //  easy way to add new items
  for (var i = 0; i < 8; i++) {
    data.push({ userid: 'mayj', comments: 'Oh bother, the pan fire is now a van fire.', snow_id: 'cottage', action: 'HAMMOND', issue_type: 'CLARKSON', nho_date: '1984-09-12', hire_date: '1984-09-12', sims_approval_date: '1984-09-12' });
    console.log(i);
  }
  data.push({ userid: 'mayj', comments: 'Oh bother, the pan fire is now a van fire.', snow_id: 'cottage', action: 'HAMMOND', issue_type: 'CLARKSON', nho_date: '1984-09-12', hire_date: '1984-09-12', sims_approval_date: '1984-09-12' });


  console.log("HELLO ARE YOU TEHRE?")


  let jsondata;


  // async function getData() {
  //   const response = await fetch('http://localhost:8081/getEUSPRedshiftAll/', {
  //     // mode: 'no-cors',
  //     method: 'GET',
  //     headers: {
  //       Accept: 'application/json',
  //   }});
  //   // console.log(JSON.stringify(response))
  //   return  response.json();
  // }


  // const cows =  getData().then{(response => {console.log(response);});



  // console.log(typeof(cows))/

  // console.log({ cows  })

  // var test = JSON.stringify(cows)
  // console.log(test)
  // var newData = userData.data.userList;

  // var helper = []

  // if (cows !== null && cows[0]!== undefined) {
  //   // var newCow  = JSON.parse(cows);
  //   console.log(cows  )
  //   // console.log(newCow  )
  //   console.log("got")

  //   // let array = cows.map(Object.values());
  //   // (Object.values);
  //   // console.log("TRY ARRATY")
  //   // console.log(array)

  //   // var newCows = cows
  //   // console.log(cows[0])
  //     for (var row in cows) {
  //       console.log(1)
  //       // data.push({ userid: row[0], comments: row[1], snow_id: 'test', action: 'yikes', issue_type: 'CLARKSON', nho_date: '1984-09-12', hire_date: '1984-09-12', sims_approval_date: '1913-09-13' });
  //       if (cows.hasOwnProperty(row)){
  //         // your code
  //         helper.push(row)
  //       }
  //     }  

  //         // console.log(row[1])


  //     }


  //   if (helper[1] !== null) {
  //     console.log(helper)

  //   }

  return (

    // <userAction()/>

    // <userAction/>

    <MaterialTable
      title="Editable Preview"
      columns={columns}
      data={
        query =>
        new Promise((resolve, reject) => {
          let url = 'http://localhost:8081/getEUSPRedshiftAll/'
          // url += 'per_page=' + query.pageSize
          // url += '&page=' + (query.page + 1)
          fetch(url)
            .then(response => response.json())
            .then(result => {
              console.log(result)
              resolve({
                data: result
                // page: result.page - 1,
                // totalCount: result.total,
                    // page: 3,
                // totalCount: 20,
              })
            })
        })




      }
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
        filtering: true
      }}
    />

  )
}

export default App;
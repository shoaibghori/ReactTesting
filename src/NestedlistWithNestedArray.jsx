import React from "react";
import {Table} from "react-bootstrap";
const NestedlistWithNestedArray =() =>{
    const EmployeeInfo=[
        {name:"shoaib", age:"25", email:"sam@abc.com",address:[
            {house:"10",city:"Lahore",Country:"pakistan"},
            {house:"11",city:"karachi",Country:"pakistan"},
            {house:"100",city:"isb",Country:"pakistan"}
        ]},
        {name:"Ghori", age:"125", email:"sfgam@abc.com",address:[
            {house:"10",city:"Lahore",Country:"pakistan"},
            {house:"11",city:"karachi",Country:"pakistan"},
            {house:"100",city:"isb",Country:"pakistan"}
        ]},
        {name:"Ali", age:"252", email:"sasdam@abc.com",address:[
            {house:"10",city:"Lahore",Country:"pakistan"},
            {house:"11",city:"karachi",Country:"pakistan"},
            {house:"100",city:"isb",Country:"pakistan"}
        ]},
        {name:"saleem", age:"325", email:"saleem@abc.com",address:[
            {house:"10",city:"Lahore",Country:"pakistan"},
            {house:"11",city:"karachi",Country:"pakistan"},
            {house:"100",city:"isb",Country:"pakistan"}
        ]}
    ]
    return(
        <>
        <Table striped bordered hover variant="dark">
            <tbody>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Age</th>
                    <th>Address</th>
                </tr>
                {
                    EmployeeInfo.map((item,i)=>
                        <tr key={i}>
                            <td>{i + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.email}</td>
                            <td>{item.age}</td>
                            <td>
                                <Table striped bordered hover variant="dark">
                                    <tbody>
                                        <tr>
                                            <th>House no</th>
                                            <th>City</th>
                                            <th>Country</th>
                                        </tr>
                                        {
                                        item.address.map((data,x)=>
                                        <tr key={x}>
                                            <td>{data.house}</td>
                                            <td>{data.city}</td>
                                            <td>{data.Country}</td>
                                        </tr>
                                        )
                                        }
                                    </tbody>
                                </Table>
                            </td>
                        </tr>
                    )
                }

            </tbody>
        </Table>
        <h1>NestedlistWithNestedArray</h1>
        </>
    )
}

export default NestedlistWithNestedArray;
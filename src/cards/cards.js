import React from 'react';
import './cards.css';

export default (props) => (
 
  <div className="row">
    
    {props.data.map(item => (
        <div className="col-lg-4 col-xlg-3 col-md-5" key={item.id}>
          <div className="card">
            <div className="card-body">
              <center className="m-t-30"> 
                <img src={item.avatar} className="img-circle" width="150" alt="avatar" />
              <h4 className="card-title m-t-10">{item.name}</h4>
              <h6 className="card-subtitle">{item.username}</h6>
              </center>
            </div>
            <div>
              <hr />
            </div>
            <div className="card-body"> 
              <small className="text-muted">Email address</small>
            <h6>{item.email}</h6> 
              <small className="text-muted p-t-30 db">Phone</small>
              <h6>{item.phone}</h6> 
              <small className="text-muted p-t-30 db">Address</small>
            <h6>{item.address.streetA}</h6>
            </div>
          </div>
        </div>
    ))}
    </div>
)
// export default props => (
//   <table className="table">
//     <thead>
//       <tr>
//         <th> ID  </th>
//         <th >
//           First Name 
//         </th>
//         <th>
//           Last Name 
//         </th>
//         <th >
//           Email 
//         </th>
//         <th>
//           Phone 
//         </th>
//       </tr>
//     </thead>
//     <tbody>
//       {props.data.map(item => (
//         <tr key={item.id}>
//           <td>{item.id}</td>
//           <td>{item.firstName}</td>
//           <td>{item.lastName}</td>
//           <td>{item.email}</td>
//           <td>{item.phone}</td>
//         </tr>
//       ))}
//     </tbody>
//   </table>
// )
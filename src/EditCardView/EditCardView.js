import React from 'react';
import './EditCardView.css';

export default ({person}) => (
  <div className="modal-window">
     <div className="modal-window__content">
          <div id="content" className="content content-full-width">
            <div className="col-md-12 close-wrap">
               <button className="window-close">&times;</button>
            </div>
              <div className="profile">
                <div className="profile-header"> 
                    <div className="profile-header-cover">
                
                      </div>  
                    <div className="profile-header-content"> 
                     <div className="profile-header-img">
                     <img src={person.avatar} alt="avatar"/>
                     </div>
                     <div className="profile-header-info">
                    <h4 className="m-t-10 m-b-5">{person.name}</h4>
                    <p className="m-b-10">{person.username}</p>
                    <a href="#" className="btn btn-xs btn-success">Edit Profile</a>
                     </div>
                  </div>
                  <ul className="profile-header-tab nav nav-tabs">
                <li className="nav-item"><a href="#profile-profile" className="nav-link active show" data-toggle="tab">Profile</a></li>
                     <li className="nav-item"><a href="#profile-adress" className="nav-link" data-toggle="tab">Adress</a></li>
                     <li className="nav-item"><a href="#profile-company" className="nav-link" data-toggle="tab">Company</a></li>
                     <li className="nav-item"><a href="#profile-posts" className="nav-link" data-toggle="tab">Posts</a></li>
                     <li className="nav-item"><a href="#profile-ahistory" className="nav-link" data-toggle="tab">Account history</a></li>
                  </ul>
               </div>
            </div>
            <div className="profile-content">
               <div className="tab-content p-0">
                  <div className="tab-pane fade in active show" id="profile-profile"> 
                     <div className="table-responsive">
                        <table className="table table-profile">
                           <tbody>
                              <tr>
                                <td className="field">Name</td>
                                <td><input type="text" className="form-control input-inline input-xs" defaultValue = {person.name}/></td>
                              </tr>
                              <tr>
                                 <td className="field">UserName</td>
                                 <td><input type="text" className="form-control input-inline input-xs" defaultValue = {person.username}/></td>
                              </tr>
                              <tr>
                                 <td className="field">Email</td>
                                 <td><input type="text" className="form-control input-inline input-xs" defaultValue = {person.email}/></td>
                              </tr>
                              <tr>
                                 <td className="field">Phone</td>
                                 <td><input type="text" className="form-control input-inline input-xs" defaultValue = {person.phone}/></td>
                              </tr>
                              <tr>
                                 <td className="field">Website</td>
                                 <td><input type="text" className="form-control input-inline input-xs" defaultValue = {person.website}/></td>
                              </tr>
                              <tr>
                                 <td className="field">Favorite</td>
                                 <td>
                                    {person.favorite ? <input type="checkbox" checked /> 
                                    : <input type="checkbox" />}
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                        </div>
                      </div>
                  </div>
                </div>
            </div>
          </div>
          </div>
)
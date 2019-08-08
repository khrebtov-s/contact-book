import React from 'react';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import "react-tabs/style/react-tabs.css";
import './EditCardView.css';

export default ({person}) =>(
  <div className="modal-window">
     <div className="modal-window__content">
          <div id="content" className="content content-full-width">
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
                  </div>
            </div>
                  <Tabs>
                     <TabList>
                        <Tab>Profile</Tab>
                        <Tab>Adress</Tab>
                        <Tab>Company</Tab>
                        <Tab>Account history</Tab>
                        <Tab>Posts</Tab>
                     </TabList>
                     <TabPanel>
                  <div className="profile-content">
                     <div className="tab-content p-0">
                        <div className="tab-pane fade in active show" id="profile-profile">
                           <div className="table-responsive">
                              <table className="table table-profile">
                                 <tbody>
                                    <tr>
                                       <td className="field">Name</td>
                                       <td><input type="text" className="form-control input-inline input-xs" defaultValue={person.name} /></td>
                                    </tr>
                                    <tr>
                                       <td className="field">UserName</td>
                                       <td><input type="text" className="form-control input-inline input-xs" defaultValue={person.username} /></td>
                                    </tr>
                                    <tr>
                                       <td className="field">Email</td>
                                       <td><input type="text" className="form-control input-inline input-xs" defaultValue={person.email} /></td>
                                    </tr>
                                    <tr>
                                       <td className="field">Phone</td>
                                       <td><input type="text" className="form-control input-inline input-xs" defaultValue={person.phone} /></td>
                                    </tr>
                                    <tr>
                                       <td className="field">Website</td>
                                       <td><input type="text" className="form-control input-inline input-xs" defaultValue={person.website} /></td>
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
                     </TabPanel>
                     <TabPanel>
                  <div className="profile-content">
                     <div className="tab-content p-0">
                        <div className="tab-pane fade in active show" id="profile-profile">
                           <div className="table-responsive">
                              <table className="table table-profile">
                                 <div className="container">
                                 <tbody>
                                    <div className="row">
                                       <div className="col-md-4 ">
                                    <tr>
                                       <td className="field">street A</td>
                                       <td><input type="text" className="form-control input-inline input-xs" defaultValue={person.address.streetA}/></td>
                                    </tr>
                                    <tr>
                                       <td className="field">street B</td>
                                       <td><input type="text" className="form-control input-inline input-xs" defaultValue={person.address.streetB}/></td>
                                    </tr>
                                    <tr>
                                       <td className="field">street C</td>
                                       <td><input type="text" className="form-control input-inline input-xs" defaultValue={person.address.streetC}/></td>
                                    </tr>
                                    <tr>
                                       <td className="field">street D</td>
                                       <td><input type="text" className="form-control input-inline input-xs" defaultValue={person.address.streetD}/></td>
                                    </tr>
                                       </div>
                                       <div className="col-md-4 offset-md-2">
                                    <tr>
                                       <td className="field">City</td>
                                       <td><input type="text" className="form-control input-inline input-xs" defaultValue={person.address.city}/></td>
                                    </tr>
                                    <tr>
                                       <td className="field">State</td>
                                       <td><input type="text" className="form-control input-inline input-xs" defaultValue={person.address.state} /></td>
                                    </tr>
                                    <tr>
                                       <td className="field">Country</td>
                                       <td><input type="text" className="form-control input-inline input-xs" defaultValue={person.address.country} /></td>
                                    </tr>
                                    <tr>
                                       <td className="field">Zipcode</td>
                                       <td><input type="text" className="form-control input-inline input-xs" defaultValue={person.address.zipcode} /></td>
                                    </tr>
                                    <tr>
                                       <td className="field">geo</td>
                                       <td><input type="text" className="form-control input-inline input-xs" defaultValue={person.address.geo.lat} /></td>
                                       <td><input type="text" className="form-control input-inline input-xs" defaultValue={person.address.geo.lng} /></td>
                                    </tr>
                                    </div>
                                    </div>
                                 </tbody>
                                 </div>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
                     </TabPanel>
                     <TabPanel>
                  <div className="profile-content">
                     <div className="tab-content p-0">
                        <div className="tab-pane fade in active show" id="profile-profile">
                           <div className="table-responsive">
                              <table className="table table-profile">
                                 <div className="container">
                                    <tbody>
                                       <div className="row">
                                          <div className="col-md-4 ">
                                             <tr>
                                                <td className="field">Name</td>
                                                <td><input type="text" className="form-control input-inline input-xs" defaultValue={person.company.name}/></td>
                                             </tr>
                                             <tr>
                                                <td className="field">Catch Phrase</td>
                                                <td><input type="text" className="form-control input-inline input-xs" defaultValue={person.company.catchPhrase} /></td>
                                             </tr>
                                             <tr>
                                                <td className="field">BS</td>
                                                <td><input type="text" className="form-control input-inline input-xs" defaultValue={person.company.bs} /></td>
                                             </tr>
                                          </div>
                                          </div>
                                    </tbody>
                                 </div>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
                  </TabPanel>
                  <TabPanel>
                  <div className="profile-content">
                     <div className="tab-content p-0">
                        <div className="tab-pane fade in active show" id="profile-profile">
                           <div className="table-responsive">
                              <table className="table table-profile">
                                 <div className="container">
                                    <tbody>
                                       <div className="row">
                                          {person.accountHistory.map(item => ( 
                                             <div>
                                                <div className="row"><div className="col-md-12"><h2>Amount</h2></div></div> 
                                                <div className="col-md-4 ">
                                                   <tr>
                                                      <td className="field">Amount</td>
                                                      <td><input type="text" className="form-control input-inline input-xs" defaultValue={item.amount} /></td>
                                                   </tr>
                                                   <tr>
                                                      <td className="field">Business</td>
                                                      <td><input type="text" className="form-control input-inline input-xs" defaultValue={item.business} /></td>
                                                   </tr>
                                                   <tr>
                                                      <td className="field">Type</td>
                                                      <td><input type="text" className="form-control input-inline input-xs" defaultValue={item.type} /></td>
                                                   </tr>
                                                </div>
                                                <div className="col-md-4 ">
                                                   <tr>
                                                      <td className="field">Date</td>
                                                      <td><input type="text" className="form-control input-inline input-xs" defaultValue={item.date} /></td>
                                                   </tr>
                                                   <tr>
                                                      <td className="field">Name</td>
                                                      <td><input type="text" className="form-control input-inline input-xs" defaultValue={item.name} /></td>
                                                   </tr>
                                                   <tr>
                                                      <td className="field">Account</td>
                                                      <td><input type="text" className="form-control input-inline input-xs" defaultValue={item.account} /></td>
                                                   </tr>
                                                </div>
                                             </div>
                                             ))}  
                                          </div>
                                    </tbody>
                                 </div>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
                     </TabPanel>
                     <TabPanel>
                  <div className="profile-content">
                     <div className="tab-content p-0">
                        <div className="tab-pane fade in active show" id="profile-profile">
                           <div className="table-responsive">
                              <table className="table table-profile">
                                 <div className="container">
                                    <tbody>
                                       <div className="row">

                                          {person.posts.map(item => (
                                             <div>
                                                <div className="row"><div className="col-md-12"><h2>Words</h2></div></div>
                                                <div className="col-md-4 ">
                                                   <tr>
                                                      <td className="field">Words</td>
                                                      <td><input type="text" className="form-control input-inline input-xs" defaultValue={item.words} /></td>
                                                   </tr>
                                                   <tr>
                                                      <td className="field">sentence</td>
                                                      <td><textarea className="form-control input-inline input-xs" defaultValue={item.sentence} rows="3" /></td>
                                                   </tr>
                                                   <tr>
                                                      <td className="field">sentences</td>
                                                      <td><textarea className="form-control input-inline input-xs" defaultValue={item.sentences} rows="3" /></td>
                                                   </tr>
                                                   <tr>
                                                      <td className="field">paragraph</td>
                                                      <td><textarea className="form-control input-inline input-xs" defaultValue={item.paragraph}rows="3" /></td>
                                                   </tr>
                                                </div>
                                             </div>
                                          ))}
                                       </div>
                                    </tbody>
                                 </div>
                              </table>
                           </div>
                        </div>
                     </div>
                  </div>
                     </TabPanel>
                  </Tabs>
               
            
            </div>
          </div>
          </div>
   )
   


import React, { Component } from 'react';

class Settings extends Component {

  render() {
    return (

  <div>

  Settings
  <div>


  <div classname="container">

    <div className="row">
      <div className="col-12 my-5 mx-auto">
        <img className="d-flex justify-content-center mx-auto" id="Logo" src="https://i.imgur.com/VooNS3J.png" alt=""></img>
      </div>
    </div>


      <div id="custom-form" className="py-3 container">
        <div>
         <form>
            <div className="form-group">
              <label id="label-color" htmlFor="exampleInputEmail1">Email address</label>
              <input type="email" autoComplete="username email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"></input>

            </div>
              <div className="form-group">
                <label id="label-color" htmlFor="exampleInputPassword1">Password</label>
                <input type="password" autoComplete="current-password" className="form-control" id="exampleInputPassword1" placeholder="Password"></input>
              </div>

              <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#exampleModal">
                Change
              </button>


              <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div class="modal-dialog" role="document">
                  <div class="modal-content">
                    <div class="modal-header">
                      <h5 class="modal-title" id="exampleModalLabel">Click below to save your changes</h5>
                      <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                        <span aria-hidden="true">&times;</span>
                      </button>
                    </div>
                    <div class="modal-body">
                      ...
                    </div>
                    <div class="modal-footer">
                      <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                      <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                  </div>
                </div>
              </div>







            <medium id="label-color" className="form-text">Change or update your GamersOnly account information</medium>
          </form>

          <form>
        <div className="form-group">


        <button type="button" class="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
            Delete .
          </button>


          <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog" role="document">
              <div class="modal-content">
                <div class="modal-header">
                  <h5 class="modal-title" id="exampleModalLabel">Are you sure you don't want to stay</h5>
                  <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div class="modal-body">
                  ...
                </div>
                <div class="modal-footer">
                  <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
                  <button type="button" class="btn btn-primary">Save changes</button>
                </div>
              </div>
            </div>
          </div>


              <medium id="label-color" className="form-text">Delete your GamersOnly account</medium>
          </div>
          </form>

          </div>
          <div className="mt-5">
        </div>
      </div>


     </div>
    </div>

  </div>

    )
  }

}
export default Settings;

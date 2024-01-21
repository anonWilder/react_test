import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div>
    <div id="admin-sidenav">
      <div className="logo-container">
        <span className="admin-logo"> <b>staff area 2023</b></span>
      </div>
      <div className="admin-sidenav-content">
        <a className="sidenav-item active-sidenav">My Account</a>
        <a className="sidenav-item">Activities</a>
        <a className="sidenav-item">Orders</a>
        <a className="sidenav-item">Customers</a>
        <a className="sidenav-item">Analytics</a>
        <a className="sidenav-item">Finance</a>
        <a className="sidenav-item">Products</a>
        <a className="sidenav-item">Voucher and Discounts</a>
        <a className="sidenav-item">Banner and Automations</a>
        <a className="sidenav-item">Live Chat</a>
        <a className="sidenav-item">Staff</a>
        <a className="sidenav-item">Log Out</a>
      </div>
    </div>
    <div id="dashboard-viewer">
      <br />
      <div className="account-section">
        <div className="account-img" id="acc-img" onclick="setTAColor" />
        <br />
        <span className="display-name-form"><b>Task Assignment Colour</b> </span>
        <div id="color-flex" className="color-list">
          <span className="color-option">
            <span className="pink color active-color" />
            <span className="color-label">Pink</span>
          </span>
          <span className="color-option">
            <span className="blue color" />
            <span className="color-label">Blue</span>
          </span>
          <span className="color-option">
            <span className="green color" />
            <span className="color-label">Green</span>
          </span>
          <span className="color-option">
            <span className="red color" />
            <span className="color-label">Red</span>
          </span>
          <span className="color-option">
            <span className="yellow color" />
            <span className="color-label">Yellow</span>
          </span>
        </div>
        <br />
        <span className="save-btn">Save color</span>
        <br />
        <span className="display-name-form"><b>Display Name</b> </span>
        <div id="displayname" className="role">
          <input type="text" name="displayname" id className="edit-input" />
        </div>
        <br />
        <span className="save-btn">Save Display Name</span>
        <div className="edit-btn" onclick="setDisplayName">
          <span className>Edit Display Name</span>
        </div>
        <div className="account-info">
          <span className="account-admin-info"><b>Username:</b> </span>
          <span className="account-admin-info"><b>Role:</b> </span>
        </div>
      </div>
      <br />
      <br />
      <div className="account-section">
        <span className="h1">Application</span>
        <div className="account-info">
          <a className="application-options">Teams</a>
          <a className="application-options">Outlook</a>
        </div>
      </div>
    </div>
  </div>
  );
}

export default App;

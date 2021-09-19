import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="sidebar">
        <div className="side-head">NEUROLINGUA</div>
        <div className="items">
          <div className="dashboard"><i class="fas fa-tachometer-alt"></i> Dashboard</div>
          <div><i class="fas fa-graduation-cap"></i> Courses</div>
          <div><i class="far fa-calendar-alt"></i> Availability</div>
          <div><i class="far fa-file-alt"></i> Blog</div>
          <div><i class="fas fa-money-bill-wave"></i> Coupons</div>
          <div><i class="fas fa-dollar-sign"></i> Earnings</div>
          <div><i class="fas fa-cog"></i> Settings</div>
        </div>
        <button className="logout"><i class="fas fa-sign-in-alt"></i> LogOut</button>
      </div>
      <div className="main">
        <div className="section-1">
          <div className="part">
            <div>Courses</div>
            <div><i class="fas fa-ellipsis-h"></i></div>
            <div><i class="fas fa-graduation-cap"></i></div>
            <div className="bold">2</div>
          </div>
          <div className="part extra">
            <div>Class Taken</div>
            <div><i class="fas fa-ellipsis-h"></i></div>
            <div><i class="fas fa-chalkboard-teacher"></i></div>
            <div  className="bold">2</div>
          </div>
          <div className="part">
            <div>Verified courses</div>
            <div><i class="fas fa-ellipsis-h"></i></div>
            <div><i class="fas fa-certificate"></i></div>
            <div  className="bold">2</div>
          </div>
          <div className="part">
            <div>Non-Verified Courses</div>
            <div><i class="fas fa-ellipsis-h"></i></div>
            <div><i class="far fa-times-circle"></i></div>
            <div  className="bold">2</div>
          </div>
        </div>
        <div className="section-2">
          <div className="section-2-part section-part-2">
            <div className="heading">MY EARNINGS</div>
            <div className="main-21">
              <div className="border">
                <div>Today Earnings</div>
                <div>$1000</div>
              </div>
              <div>
                <div>Pending</div>
                <div>$60</div>
              </div>
            </div>
            <div className="withdraw">
              <div>Withdraw</div>
            </div>
          </div>
          <div  className="section-2-part">
            <div className="heading">Session Overview</div>
            <div className="main-22">
              <div>
                <div>Scheduled</div>
                <div>1</div>
              </div>
              <div>
                <div>Upcoming</div>
                <div>2</div>
              </div>
              <div>
                <div>Cancelled</div>
                <div>0</div>
              </div>
            </div>
          </div>
          <div  className="section-2-part">
            <div className="heading">My Students</div>
            <div className="main-23">
              <div className="img"><i class="fas fa-user-alt"></i></div>
              <div className="see">See all students</div>
            </div>
          </div>
        </div>
        <img className="graph" src="https://www.howtogeek.com/wp-content/uploads/2020/01/first-line.png?trim=1,1&bg-color=000&pad=1,1"></img>
      </div>
      <div className="right">
        <div className="icon">
          <div><i class="far fa-comment"></i></div>
          <div><i class="fas fa-bell"></i></div>
        </div>
        <div className="person">
          <i class="fas fa-user-alt"></i>
        </div>
        <div className="name">Welcome Aayush !</div>
        <div className="class">Upcoming Classes</div>
        <div className="last">
          <div className="flag"><i class="fab fa-canadian-maple-leaf"></i><span>French</span></div>
          <div className="last-part">
            <div><i class="far fa-calendar-alt"></i> 17th August 2021</div>
            <div><i class="far fa-clock"></i> 11:00 AM</div>
            <div><i class="far fa-clock"></i> 60 Minutes</div>
            <div><i class="fas fa-dollar-sign"></i> $10</div>
          </div>
          <div className="join">Join Class</div>
        </div>
      </div>
    </div>
  );
}

export default App;

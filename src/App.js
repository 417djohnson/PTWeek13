import './App.css';
import Navigation from './nav';
import LoginForm from './login-form';
import Section from './Section';

let date = new Date()

let singleUser = {
  name: 'John',
  time: date.toDateString(),
}


function App() {
  return (
    <div className="App">
      <Navigation></Navigation>
      <section className="welcomeSection">
        <h1>Welcome, {singleUser.name}</h1>
        <p>Today's date is: {singleUser.time}</p>
      </section>
      <Login-Form></Login-Form>
    </div>
  );
}

export default App;

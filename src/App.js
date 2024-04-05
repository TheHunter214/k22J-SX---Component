// import logo from './logo.svg';
import './App.css';
import Func_JSX_TranMinhNam from './Component/Func_JSX_TranMinhNam';
import Class_TranMinhNam from './Component/Class_TranMinhNam';

function App() {
  return (
    <section className="App"> 
      <h1>Demo JSX</h1> 
      <Func_JSX_TranMinhNam/>
      <Func_JSX_TranMinhNam fullname="Tran Minh Nam" age={20}/> 
      <Class_TranMinhNam/>
      <hr/>
      <Class_TranMinhNam info="Học ReactJS" time={11}/>
    </section>
  );
}

export default App;

import './App.css';

function App() {
  return (
    <div className="App" style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <form style={{ display: 'flex', flexDirection: 'column', gap: '1rem', width: '300px' }}>
        <h2>Login</h2>
        <input type="text" placeholder="Username" style={{ padding: '0.5rem' }} />
        <input type="password" placeholder="Password" style={{ padding: '0.5rem' }} />
        <button type="submit" style={{ padding: '0.5rem', backgroundColor: '#4CAF50', color: 'white', border: 'none' }}>
          Login button
        </button>
      </form>
    </div>
  );
}

export default App;

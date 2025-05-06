function Popup () {
  useEffect(() => {
    fetch("https://api.sampleapis.com/coffee/hot") 
      .then(resp => resp.json()) 
      .then(data => console.log(data[0].title));
  }, []); 
  
  return (
    <div className="popup">
      <h1>Popup Component</h1>
      <p>This is a simple popup component.</p>
    </div>
  );
}

export default Popup;

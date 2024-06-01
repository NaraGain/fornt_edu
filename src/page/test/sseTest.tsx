import React, { useState, useEffect } from 'react';

function SSEtest() {
  const [ facts, setFacts ] = useState([]);
  const [ listening, setListening ] = useState(false);

  useEffect( () => {
    if (!listening) {
      const events = new EventSource('http://localhost:4000/events');

      events.onmessage = (event) => {
        const parsedData = JSON.parse(event.data);
        console.log(parsedData)
        setFacts((facts) => facts.concat(parsedData));
      };

      setListening(true);

      // return () =>{
      //   events.close()
      // }
    }
  }, [listening, facts]);

  return (
    <table className="stats-table">
      <thead>
        <tr>
          <th>Fact</th>
          <th>Source</th>
        </tr>
      </thead>
      <tbody>
        {
          facts.map((fact:any, i) =>
            <tr key={i}>
              <td>{fact.id}</td>
              <td>{fact.moive}</td>
            </tr>
          )
        }
      </tbody>
    </table>
  );
}

export default SSEtest;
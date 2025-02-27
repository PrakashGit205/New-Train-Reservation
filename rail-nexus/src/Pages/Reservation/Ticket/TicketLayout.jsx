import React, { useEffect } from 'react';
import { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import PassengerService from "../../../Services/Passenger.service"
const TicketLayout = () => {
//   var passengerData;
  const [passengerData, setPassengerData] = useState({});
  const storedPassengerData = JSON.parse(atob(sessionStorage.getItem('passenger')));
  const train =  JSON.parse(atob(sessionStorage.getItem('train')));
  const oldPassenger = JSON.parse(atob(sessionStorage.getItem('oldPassenger')));
  useEffect(() => {
    console.log(atob(sessionStorage.getItem('passenger')))
    // PassengerService.post(storedPassengerData).then((response)=>{
    //   console.log(response.data);
      setPassengerData(storedPassengerData);

    // })
    // setPassengerData(storedPassengerData);
    console.log("passenger data")
    console.log(storedPassengerData);
  }, []);

  return (
    <>
      <div style={{ borderRadius: 20, padding: 20 }}>
        <div
          style={{
            border: '1px black solid',
            borderRadius: 20,
            padding: 25,
            backgroundColor: 'whitesmoke',
          }}
        >
          <header
            style={{
              backgroundColor: 'midnightblue',
              color: 'white',
              borderRadius: 5,
              textAlign: 'center',
              height: 'fit-content',
              padding: 5,
            }}
          >
            <p>
              <b>RailNexus</b> <br />
              Have A Great Journey with US.
            </p>
          </header>
          <hr />
          <div
            style={{
              textAlign: 'center',
              width: '90%',
              margin: 20,
              padding: 1,
            }}
          >
            <div style={{ display: 'flex', gap: '34%' }}>
              <div>
                <h5>PRN : {storedPassengerData.pnr}</h5>
              </div>
              <div>
                <h5>Transaction ID : 8745665 {passengerData.transactionId}</h5>
              </div>
            </div>
          </div>
          <hr />
          <h5 style={{ paddingLeft: 10 }}>
            <u>
              <b>{train.trainName} ({train.trainNo})</b>
            </u>
          </h5>
          <br />
          <div style={{ display: 'flex', gap: '17%' }}>
            <div style={{ paddingLeft: 20 }}>
              <h6>
                <u>From</u>
              </h6>
              <p>
                {passengerData.originDate} <br />
                <b>{passengerData.sourceStationName}</b>
                <br />
                Departure Time : {passengerData.sourceTime}
              </p>
            </div>
            <div>
              <h6>
                <u>To</u>
              </h6>
              <p>
                {passengerData.destinationDate} <br />
                <b>{passengerData.destinationStationName}</b>
                <br />
                Arrival Time : {passengerData.destinationTime}
              </p>
            </div>
            <div>
              <h6>Name : {passengerData.name}</h6>
              Gender : {passengerData.gender}
              <br />
              Status : {passengerData.seatStatus}
              <br />
              Class : {oldPassenger.classType}
              <br />
              Coach (Seat) : {passengerData.boogieNo}
              <br />
              Seat No. : {passengerData.seatNo}{' '}
              {/* <b>{passengerData.gender === 'male' ? ' (M) ' : ' (F) '}</b> */}
            </div>
          </div>
        </div>
        <hr />
        <div style={{ paddingLeft: 30 }}>
          <h6>
            Fare : ₹{oldPassenger.fair}/- 
            {/* {convertToWords(passengerData.fair)}) */}
          </h6>
        </div>
        <hr />
      </div>
      <br />
    </>
  );
};

// Function to convert a number to words
const convertToWords = (num) => {
  // Implement your logic to convert the number to words
  // For example: 670 -> Six Hundred Seventy Rupees and Zero Paisa only
  return 'To Be Implemented';
};

export default TicketLayout;

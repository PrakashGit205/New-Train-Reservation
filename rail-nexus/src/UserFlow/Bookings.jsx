import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import PassengerService from '../Services/Passenger.service';
function MyBookings() {
  const [bookings, setBookings] = useState([]);

  const user = JSON.parse(atob(sessionStorage.getItem('User')));
  // var userData = JSON.parse(atob(sessionStorage.getItem('User')));

  useEffect(() => {
    console.log("in booking page")
    var userData = JSON.parse(atob(sessionStorage.getItem("User")));
    // Fetch user's bookings using PassengerServices (replace with actual code)
    PassengerService.get(userData.id)
      .then((response) => {
        if(response.data != null){
          setBookings(response.data.filter(item => {
            const itemDate = new Date(item.trainDepartureDate).toLocaleDateString();
            return itemDate < new Date().toLocaleDateString();
          }));

        } else {
          setBookings();
        }
        console.log("Printing user bookings data", response.data);
        console.log("Printing user bookings data", bookings);
      })
      .catch((error) => {
        console.log("Error fetching user bookings", error);
      });
  }, []);

  return (
    <div className="container">
      <h2>My Bookings</h2>
      <div className="row">

        
        {
        
        bookings.length != 0 ?
        bookings.map((booking) => (
          <div key={booking.id} className="col-md-5 mb-4">
            <Card>
              <Card.Body>
                <Card.Title>{booking.name}</Card.Title>
              <Card.Text>Seat Status: {booking.seatStatus}</Card.Text>
              <Card.Text>Seat Number: {booking.seatNo}</Card.Text>
                <Card.Text>Train Number: {booking.trainNo}</Card.Text>
                <Card.Text>Source Time: {booking.sourceTime}</Card.Text>
                <Card.Text>Destination Time: {booking.destinationTime}</Card.Text>
                <Card.Text>Train departure date: {booking.trainDepartureDate}</Card.Text>
                
                {/* Display other relevant booking details */}
              </Card.Body>
            </Card>
          </div>
        ))
      : <h3>You have no older bookings</h3>
      
      }
      </div>
    </div>
  );
}

export default MyBookings;

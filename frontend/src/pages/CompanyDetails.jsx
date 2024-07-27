import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

function CompanyDetails() {
  const { id } = useParams();
  const [company, setCompany] = useState(null);
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    fetch(`/companies/${id}`)
      .then(response => response.json())
      .then(data => setCompany(data));
    fetch(`/companies/${id}/locations`)
      .then(response => response.json())
      .then(data => setLocations(data));
  }, [id]);

  if (!company) return <div>Loading...</div>;

  return (
    <div>
      <h1>{company.name}</h1>
      <p>{company.address}</p>
      <MapContainer center={[company.latitude, company.longitude]} zoom={13} style={{ height: "400px", width: "100%" }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {locations.map(location => (
          <Marker key={location.location_id} position={[location.latitude, location.longitude]}>
            <Popup>
              {location.name} <br /> {location.address}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      <ul>
        {locations.map(location => (
          <li key={location.location_id}>
            {location.name} - {location.address} ({location.latitude}, {location.longitude})
          </li>
        ))}
      </ul>
      <Link to="/">Back to List</Link>
    </div>
  );
}

export default CompanyDetails;

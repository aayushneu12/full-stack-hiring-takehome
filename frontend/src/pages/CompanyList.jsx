import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

function CompanyList() {
  const [companies, setCompanies] = useState([]);

  useEffect(() => {
    fetch('/companies')
      .then(response => response.json())
      .then(data => setCompanies(data));
  }, []);

  return (
    <div>
      <h1>Company List</h1>
      <ul>
        {companies.map(company => (
          <li key={company.company_id}>
            <Link to={`/company/${company.company_id}`}>
              {company.name} - {company.address}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default CompanyList;

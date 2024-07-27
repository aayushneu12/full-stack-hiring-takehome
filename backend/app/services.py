import csv
from typing import List
from app.models import Company, Location

def read_companies() -> List[Company]:
    companies = []
    with open('../../companies.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            companies.append(Company(**row))
    return companies

def read_locations(company_id: int) -> List[Location]:
    locations = []
    with open('../../locations.csv', newline='') as csvfile:
        reader = csv.DictReader(csvfile)
        for row in reader:
            if int(row['company_id']) == company_id:
                locations.append(Location(**row))
    return locations

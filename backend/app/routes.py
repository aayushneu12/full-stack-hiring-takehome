from fastapi import APIRouter, HTTPException
from typing import List
from app.models import Company, Location
from app.services import read_companies, read_locations

router = APIRouter()

@router.get("/companies", response_model=List[Company])
def get_companies():
    return read_companies()

@router.get("/companies/{company_id}", response_model=Company)
def get_company(company_id: int):
    companies = read_companies()
    for company in companies:
        if company.company_id == company_id:
            return company
    raise HTTPException(status_code=404, detail="Company not found")

@router.get("/companies/{company_id}/locations", response_model=List[Location])
def get_company_locations(company_id: int):
    return read_locations(company_id)

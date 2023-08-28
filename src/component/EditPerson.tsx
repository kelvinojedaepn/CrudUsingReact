import React, {useState} from "react"
import {IPerson} from "./Person.type"
import "./AddPerson.style.css"

type Props = {
  data: IPerson
  onBackBtnClick: () => void
  onUpdateClick: (data: IPerson) => void
}

export const EditEmployee = (props: Props) => {
  const {data, onBackBtnClick, onUpdateClick} = props

  const [name, setName] = useState<string>(data.name)
  const [year, setYear] = useState<number>(data.year)
  const [maritate, setMaritate] = useState<boolean>(data.isMaritate)

  const onNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value)
  }
  const onYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const yearValue = parseInt(e.target.value, 10)
    setYear(isNaN(yearValue) ? 0 : yearValue)
  }
  const onMaritateChange = (value: boolean) => {
    setMaritate(value)
  }

  const onSubmitBtnClick = (e: any) => {
    e.preventDefault()
    const dataUpdated: IPerson = {
      id: data.id,
      name: name,
      year: year,
      isMaritate: maritate,
    }
    if (year > 0 && year < 100) {
      onUpdateClick(dataUpdated)
      onBackBtnClick()
    } else {
      window.alert("Edad tiene que ser distinto de cero y menos que 100 años")
      return
    }
  }

  return (
    <>
      <div className="form-container">
        <form onSubmit={onSubmitBtnClick}>
          <div>
            <label>Name</label>
            <input type="text" value={name} onChange={onNameChange} />
          </div>
          <div>
            <label>Year</label>
            <input type="text" value={year} onChange={onYearChange} />
          </div>
          <div>
            <label>Is Maritate?</label>
            <div>
              <label>
                <input
                  type="radio"
                  value="yes"
                  checked={maritate === true}
                  onChange={() => onMaritateChange(true)}
                />
                Yes
              </label>
              <label>
                <input
                  type="radio"
                  value="no"
                  checked={maritate === false}
                  onChange={() => onMaritateChange(false)}
                />
                No
              </label>
            </div>
          </div>
          <div>
            <input type="button" value="Back" onClick={onBackBtnClick} />
            <input type="submit" value="Update Person" />
          </div>
        </form>
      </div>
    </>
  )
}

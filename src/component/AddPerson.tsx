import React, {useState} from "react"
import "./AddPerson.style.css"
import {IPerson} from "./Person.type"
type Props = {
  onBackBtnClick: () => void
  onSubmitClick: (data: IPerson) => void
}

export const AddPerson = (props: Props) => {
  const [name, setName] = useState<string>("")
  const [year, setYear] = useState<number>(0)
  const [maritate, setMaritate] = useState<boolean>(false)

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

  const {onBackBtnClick, onSubmitClick} = props

  const onSubmitBtnClick = (e: any) => {
    e.preventDefault()
    const data: IPerson = {
      id: new Date().toJSON().toString(),
      name: name,
      year: year,
      isMaritate: maritate,
    }
    if (year > 0 && year < 100) {
      onSubmitClick(data)
      onBackBtnClick()
    } else {
      window.alert("Edad tiene que ser distinto de cero y menos que 100 años")
      return
    }
  }

  return (
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
          <input type="submit" value="Add Person" />
        </div>
      </form>
    </div>
  )
}

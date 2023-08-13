import React from "react"
import "./PersonList.style.css"
import {IPerson} from "./Person.type"

type Props = {
  personList: IPerson[]
}

export const PersonList = (props: Props) => {
  const {personList} = props
  return (
    <div>
      <table>
        <tr>
          <th>Name</th>
          <th>Year</th>
          <th>Is Maritate?</th>
          <th>Actions</th>
        </tr>
        {personList.map(person => {
          console.log(person)
          return (
            <tr key={person.id}>
              <td>{person.name}</td>
              <td>{person.year}</td>
              <td>{person.isMaritate ? "Yes" : "No"}</td>
              <td>
                <input type="button" value={"View"} />
                <input type="button" value={"Edit"} />
                <input type="button" value={"Delete"} />
              </td>
            </tr>
          )
        })}
      </table>
    </div>
  )
}

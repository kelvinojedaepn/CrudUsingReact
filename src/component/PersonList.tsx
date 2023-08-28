import React, {useState} from "react"
import "./PersonList.style.css"
import {IPerson} from "./Person.type"
import {PersonView} from "./PersonView"

type Props = {
  personList: IPerson[]
  onDeletePerson: (data: IPerson) => void
  onEdit: (data: IPerson) => void
}

export const PersonList = (props: Props) => {
  const [useModalView, setUseModalView] = useState(false)
  const {personList, onDeletePerson, onEdit} = props
  const [dataToShow, setDataToShow] = useState(null as IPerson | null)

  const viewModal = (data: IPerson) => {
    setUseModalView(true)
    setDataToShow(data)
  }
  const closeViewModal = () => {
    setUseModalView(false)
  }

  return (
    <div>
      <article>
        <h3 className="list-header">Lista de personas</h3>
      </article>
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
                <input
                  type="button"
                  value={"View"}
                  onClick={() => viewModal(person)}
                />
                <input
                  type="button"
                  value={"Edit"}
                  onClick={() => onEdit(person)}
                />
                <input
                  type="button"
                  value={"Delete"}
                  onClick={() => onDeletePerson(person)}
                />
              </td>
            </tr>
          )
        })}
      </table>
      {useModalView && dataToShow !== null && (
        <PersonView onClose={closeViewModal} data={dataToShow} />
      )}
    </div>
  )
}

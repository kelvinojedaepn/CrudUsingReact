import React from "react"
import "./PersonView.style.css"
import {IPerson} from "./Person.type"

type Props = {
  onClose: () => void
  data: IPerson
}

export const PersonView = (props: Props) => {
  const {onClose, data} = props
  return (
    <>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <span className="close" onClick={onClose}>
            &times;
          </span>
          <h3>Datos de persona</h3>
          <div>
            <div>
              <label>Id: {data.id}</label>
            </div>
            <div>
              <label>Name: {data.name}</label>
            </div>
            <div>
              <label>Years: {data.year}</label>
            </div>
            <div>
              <label>Maritate: {data.isMaritate}</label>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

import React, {useState} from "react"
import "./Home.style.css"
import {IPerson, PagePersonEnum, exampleListPerson} from "./Person.type"
import {PersonList} from "./PersonList"
import {AddPerson} from "./AddPerson"
import {EditEmployee} from "./EditPerson"
export const Home = () => {
  const [personList, setPersonList] = useState<IPerson[]>(exampleListPerson)
  const [showPage, setShowPage] = useState(PagePersonEnum.list)
  const [dataToEdit, setDataToEdit] = useState({} as IPerson)

  const onAddPersonClick = () => {
    setShowPage(PagePersonEnum.add)
  }

  const showListPersonPage = () => {
    setShowPage(PagePersonEnum.list)
  }

  const onAddPersonClickForm = (data: IPerson) => {
    setPersonList([...personList, data])
  }

  const deletePerson = (data: IPerson) => {
    const indexElementToRemove = personList.indexOf(data)
    const tempList = [...personList]
    tempList.splice(indexElementToRemove, 1)
    setPersonList(tempList)
  }

  const onEditPerson = (data: IPerson) => {
    setShowPage(PagePersonEnum.edit)
    setDataToEdit(data)
  }

  const updateData = (data: IPerson) => {
    const filterData = personList.filter(x => x.id === data.id)[0]
    const indexOfRecord = personList.indexOf(filterData)
    const tempData = [...personList]
    tempData[indexOfRecord] = data
    setPersonList(tempData)
  }

  return (
    <>
      <article className="article-header">
        <header>
          <h1> React CRUD</h1>
        </header>
      </article>
      <section className="section-content">
        {showPage === PagePersonEnum.list && (
          <>
            <input
              type="button"
              value={"Add Person"}
              onClick={onAddPersonClick}
              className="add-person-btn"
            />
            <PersonList
              personList={personList}
              onDeletePerson={deletePerson}
              onEdit={onEditPerson}
            />
          </>
        )}
        {showPage === PagePersonEnum.add && (
          <AddPerson
            onBackBtnClick={showListPersonPage}
            onSubmitClick={onAddPersonClickForm}
          />
        )}
        {showPage === PagePersonEnum.edit && (
          <EditEmployee
            data={dataToEdit}
            onBackBtnClick={showListPersonPage}
            onUpdateClick={updateData}
          />
        )}
      </section>
    </>
  )
}

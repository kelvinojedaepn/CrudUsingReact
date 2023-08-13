import React, {useState} from "react"
import "./Home.style.css"
import {IPerson, PagePersonEnum, exampleListPerson} from "./Person.type"
import {PersonList} from "./PersonList"
import {AddPerson} from "./AddPerson"
export const Home = () => {
  const [personList, setPersonList] = useState<IPerson[]>(exampleListPerson)
  const [showPage, setShowPage] = useState(PagePersonEnum.list)
  const onAddPersonClick = () => {
    setShowPage(PagePersonEnum.add)
  }

  const showListPersonPage = () => {
    setShowPage(PagePersonEnum.list)
  }

  const onAddPersonClickForm = (data: IPerson) => {
    setPersonList([...personList, data])
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
            />
            <PersonList personList={personList} />
          </>
        )}
        {showPage === PagePersonEnum.add && (
          <AddPerson
            onBackBtnClick={showListPersonPage}
            onSubmitClick={onAddPersonClickForm}
          />
        )}
      </section>
    </>
  )
}

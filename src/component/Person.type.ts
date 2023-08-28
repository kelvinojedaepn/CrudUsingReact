export interface IPerson {
  id: string
  name: string
  year: number
  isMaritate: boolean
}

export const exampleListPerson: IPerson[] = [
  {
    id: new Date().toJSON().toString(),
    name: "Juan",
    year: 18,
    isMaritate: false,
  },
]

export enum PagePersonEnum {
  list,
  add,
  edit,
}

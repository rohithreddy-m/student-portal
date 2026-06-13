import { useState } from "react"

const studentData = {
  name: "Rohith",
  age: 19,
  grade: 10,
  targetScore: 90,
  averageScore: 82,
  progress: "17%",
  latestTestDate: "2026-05-20"
}
const scores = [
  {
    subject: "Math",
    score: 91
  },
  {
    subject: "Reading",
    score: 80
  },
  {
    subject: "Writing",
    score: 76
  },
  {
    subject: "Science",
    score: 88
  },
  {
    subject: "English",
    score: 84
  }
]

function AdminDashboard(){
       const [search,setSearch]=useState("")
       function answer(){
            def
        if (search===studentData.name){
            console.log("True")
        }
        else {
            console.log("falae")
        }
       }
    return(
        <>
        <h1>AdminDashboard</h1>
        <div>
            <form onSubmit={answer}>
                <label>Search:
                <input
                placeholder="Student Name"
                value={search}
                onChange={(e)=>setSearch(e.target.value)}
                />
                </label>

                <button type="submit"> submit </button>
            </form>
        </div>
        <h3>{search}</h3>
        </>
    )
}
export default AdminDashboard
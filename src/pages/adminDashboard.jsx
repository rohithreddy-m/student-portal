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
    const [datafound,setdatafound]=useState(false)
    const [show,setshow]=useState(false)
    const [edit,setedit]=useState(false)
    const [subject,setsubject]=useState("")
    const [score,setscore]=useState("")
    const [scoressta,setscores]=useState([
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
                              ])
    function Edit(){
      setedit(true)
    }
    const UPdate= (e)=>{
      e.preventDefault()
      scoressta.forEach((items)=>  
      {if (items.subject.toLowerCase().trim()===subject.toLowerCase().trim()){
          setscores(...scoressta,items.score=score)
          console.log(scoressta)
      } else {
          console.log()
        }})
        }
        function answer(e){
          e.preventDefault()
          setshow(true)
          if (search.toLowerCase().trim()===studentData.name.toLowerCase().trim()){
            setdatafound(true)
          }
          else {
            setdatafound(false)
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

          {show ?( 
          datafound ?(<>{Object.entries(studentData).map(([key,value])=> <h5 key={key}>{key.charAt(0).toUpperCase()+key.slice(1)}:{value}</h5>)} 
            {scores.map((e)=><h5 key={e.subject}>{e.subject} = {e.score}</h5>)}
            <button onClick={Edit}>Edit</button>
            {edit ?
             (<form onSubmit={UPdate} >
                <label>Subject:
                  <input 
                    value={subject}
                    onChange={(e)=>setsubject(e.target.value)}
                    placeholder="Name of Subject"/>
                </label>
                <label>score:
                  <input 
                    value={score}
                    onChange={(e)=>setscore(e.target.value)}
                    placeholder="score"/>
                </label>
                <button type="submit">UPDATE</button>
              </form>)
                  :null}
            </>)
            :<h2>Data Not Found</h2>)
            :null}
      </div>
      </>
    )
  }
export default AdminDashboard
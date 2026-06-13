import "./studentDashboard.css"
function StudentDashboard(){
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
    return(
      <>
      <h1>StudentDashboard</h1>
      <div className="studentpage">
        <div className="studentinfo">
          <h2>Student Information</h2>
           <h5>Name:{studentData.name}</h5>
           <h5>Age:{studentData.age}</h5>
           <h5>Grade:{studentData.grade}</h5>
           <h5>Target Score:{studentData.targetScore}</h5>
          <h2>Progress Summary</h2>
           <h5>Average Score:{studentData.averageScore}</h5>
           <h5>Progress:{studentData.progress}</h5>
           <h5 className="LatestTestDate">Latest Test Date:{studentData.latestTestDate}</h5>
        </div>
        <div className="studentScore">
          <h2>Score</h2>
            {scores.map((items) =>
            <h5 className={items.subject} key={items.subject}>{items.subject}:{items.score}</h5>
          )}
        </div>
        </div>
          </>
    )
}
export default StudentDashboard
export default function AttendanceBook(){
    return (
        <ul>
            {students.map((student, index) => {
                return <li key={index}>{student.name}</li>
            })}
        </ul>
    )
}

const students = [
    {
        name: "John",
    },
    {
        name: "Jane",
    },
    {
        name: "Coner",
    },
    {
        name: "Max",
    }
]
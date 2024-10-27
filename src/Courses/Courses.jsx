import React, { useState } from 'react';

// Kurslar uchun vaqtinchalik ma'lumotlar
const coursesData = [
  {
    id: 1,
    name: "Frontend Development",
    description: "React, HTML, CSS va JavaScript asoslari.",
    duration: "3 oy",
    level: "Boshlang'ich",
    price: "$300",
  },
  {
    id: 2,
    name: "Backend Development",
    description: "Node.js, Express va MongoDB o'rganing.",
    duration: "4 oy",
    level: "O'rta",
    price: "$400",
  },
  {
    id: 3,
    name: "Data Science",
    description: "Python, Data Analysis va Machine Learning asoslari.",
    duration: "5 oy",
    level: "Yuqori",
    price: "$500",
  },
];

function Courses() {
  const [courses, setCourses] = useState(coursesData);
  const [filter, setFilter] = useState("");

  // Filtrlash funksiyasi
  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const filteredCourses = courses.filter((course) =>
    course.level.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div style={{ padding: "20px" }}>
      <h2>Kurslar</h2>

      {/* Filtrlash qismi */}
      <div style={{ marginBottom: "20px" }}>
        <label htmlFor="filter">Daraja bo'yicha filtrlash: </label>
        <select id="filter" value={filter} onChange={handleFilterChange}>
          <option value="">Hammasi</option>
          <option value="Boshlang'ich">Boshlang'ich</option>
          <option value="O'rta">O'rta</option>
          <option value="Yuqori">Yuqori</option>
        </select>
      </div>

      {/* Kurs kartochkalari */}
      <div style={{ display: "flex", flexWrap: "wrap", gap: "20px" }}>
        {filteredCourses.map((course) => (
          <div
            key={course.id}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "20px",
              width: "250px",
              backgroundColor: "#f9f9f9",
            }}
          >
            <h3>{course.name}</h3>
            <p>{course.description}</p>
            <p><strong>Davomiyligi:</strong> {course.duration}</p>
            <p><strong>Daraja:</strong> {course.level}</p>
            <p><strong>Narx:</strong> {course.price}</p>
            <button
              style={{
                padding: "10px",
                backgroundColor: "#4CAF50",
                color: "#fff",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
                width: "100%",
                marginTop: "10px",
              }}
            >
              Kursga yozilish
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Courses;

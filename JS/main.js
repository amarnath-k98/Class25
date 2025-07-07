const students = [
 {
   id: 'S001',
   name: 'Alice Smith',
   details: [
     {
       course: 'Mathematics',
       grades: [
         { semester: 'Fall 2023', score: 92 },
         { semester: 'Spring 2024', score: 88 }
       ],
       attendance: [75, 80, 90] 
     },
     {
       course: 'Physics',
       grades: [
         { semester: 'Fall 2023', score: 85 },
         { semester: 'Spring 2024', score: 91 }
       ],
       attendance: [80, 85, 95]
     }
   ]
 },
 {
   id: 'S002',
   name: 'Bob Johnson',
   details: [
     {
       course: 'Mathematics',
       grades: [
         { semester: 'Fall 2023', score: 78 },
         { semester: 'Spring 2024', score: 82 }
       ],
       attendance: [60, 70, 75]
     },
     {
       course: 'Chemistry',
       grades: [
         { semester: 'Fall 2023', score: 90 },
         { semester: 'Spring 2024', score: 87 }
       ],
       attendance: [90, 92, 88]
     }
   ]
 },
 {
   id: 'S003',
   name: 'Charlie Brown',
   details: [
     {
       course: 'History',
       grades: [
         { semester: 'Fall 2023', score: 95 },
         { semester: 'Spring 2024', score: 93 }
       ],
       attendance: [95, 98, 97]
     }
   ]
 }
];
console.log(students[0].details[1].grades[1].score)
console.log(students[2].details[0].course)
console.log(students[2].id)
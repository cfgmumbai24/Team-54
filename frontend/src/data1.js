export const ReadingDataWithQuarters = [
    // Class 1
    ...Array.from({ length: 100 }, (_, index) => ({
      rollNo: index + 1,
      levela: Math.floor(Math.random() * 7) + 1,
      levelb: Math.floor(Math.random() * 7) + 1,
      levelc: Math.floor(Math.random() * 7) + 1,
      classId: 1,
    })),
    // Class 2
    ...Array.from({ length: 100 }, (_, index) => ({
      rollNo: index + 101,
      levela: Math.floor(Math.random() * 7) + 1,
      levelb: Math.floor(Math.random() * 7) + 1,
      levelc: Math.floor(Math.random() * 7) + 1,
      classId: 2,
    })),
    // Class 3
    ...Array.from({ length: 100 }, (_, index) => ({
      rollNo: index + 201,
      levela: Math.floor(Math.random() * 7) + 1,
      levelb: Math.floor(Math.random() * 7) + 1,
      levelc: Math.floor(Math.random() * 7) + 1,
      classId: 3,
    })),
  ];
  

export const ReadingData = [
    // Class 1
    ...Array.from({ length: 100 }, (_, index) => ({
      rollNo: index + 1,
      level: Math.floor(Math.random() * 7) + 1, // Random level from 1 to 7
      classId: 1,
    })),
    // Class 2
    ...Array.from({ length: 100 }, (_, index) => ({
      rollNo: index + 101,
      level: Math.floor(Math.random() * 7) + 1, // Random level from 1 to 7
      classId: 2,
    })),
    // Class 3
    ...Array.from({ length: 100 }, (_, index) => ({
      rollNo: index + 201,
      level: Math.floor(Math.random() * 7) + 1, // Random level from 1 to 7
      classId: 3,
    })),
  ];
  
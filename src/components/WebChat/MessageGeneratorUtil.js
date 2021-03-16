export const messageHistoryGenerator = () => {
  return Array(50)
    .fill()
    .map((e, i) => {
      return {
        id: Math.random().toString(32),
        user: `user${i % 2 === 0 ? "a" : "b"}`,
        message: "this is user ** speaking",
      };
    });
};

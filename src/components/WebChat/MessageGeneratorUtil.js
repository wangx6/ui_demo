export const messageHistoryGenerator = () => {
  return Array(25).fill().map((e,i) => {
    return {
      id: Math.random().toString(32),
      user: `${i % 2 === 0 ? "a" : "b"}`,
      message: "this is user ** speaking this is user ** speaking this is user ** speaking this is user ** speaking ",
    }
  });
};


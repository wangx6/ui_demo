export const messageHistoryGenerator = () => {
    console.log('yyy');
  var arr = [];
  var len = 100;
  for (var i = 0; i < len; i++) {
    if (i === 99) {
      arr.push({
        id: Math.random().toString(32),
        user: `user${i % 2 === 0 ? "A" : "B"}`,
        message: "this is user ** speaking this is user ** speak"+
        "ingthis is user ** speakingthis is user ** speakingthis is user ** speakingthis"+
         "is user ** speakingthis is user ** speakingthis is user ** speakingthis is user ** speakingthi"+
        "s is user ** speakingthis is user ** speakingthis is user ** speakingthis is user ** speakingthis is user ** speaking",
      });
    } else {
      arr.push({
        id: Math.random().toString(32),
        user: `user${i % 2 === 0 ? "A" : "B"}`,
        message: "this is user ** speaking",
      });
    }
  }
  return arr;
};

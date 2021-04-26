const faker = require("faker");

faker.seed(4);

//add description & category for each video

const videos = [
  {
    id:"3xMw1WHLN6U",
    title:"How To Skip Rope - 5 Basic Steps",
    author:"Jump Rope Dudes",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwngKnXdokDS7-D_weVfTXqTWcxw7tfuvoH6QNVQgRA=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Jump Rope. Get Lean. Live More. #dothething Hi there. We’re the Jump Rope Dudes, Dan and Brandon.\n  We're here to help you get lean and live more by incorporating jump rope into your fitness routine. \n We created this community because we lost 130 lbs collectively after years of struggling to get and stay lean.\n With just a jump rope and the world as your gym we are here to teach you how to do the same."
  },
  {
    id:"g96IJmpU61M",
    title:"Quick Tip to Improve your Jump Rope 'Flow'",
    author:"Rush Athletics TV",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwngAY2eyPPcTv0pMl76XB0AZFwS42wC6bnEtMw4FuA=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Welcome to the Home Of Jump Rope Fitness & Lifestyle! Making cardio epic since 2015.\n Check our line of premium jump ropes and let’s fly! \n I'm Rushie S, Jump Rope Coach & CEO of Rush Athletics. I've been teaching people how to fly boss since 2015 & fortunate to have left an accounting career to pursue my Youtube & brand venture full time. \n The benefits of jump rope training far exceeds what is commonly thought and I want to share it with you! Our community is growing worldwide. We'd love you to subscribe & join the cardio revolution we're creating. #TheyRunWeFly"
  },
  {
    id:"rg1BA59uizE",
    title: "MIC Release Jump Rope Tutorial",
    author:"Coach Nate K-G",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwni5VgaX9ZV_LjfwEG6rnRHBsMKt-2NGJAePe30vEg=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Hi, I am your jump rope coach Nate! Through jumping over a decade, I’ve realized that there are so many different styles and applications of the jump rope! Whether you want to mimic the style of Floyd Mayweather, focus solely on double unders during your workout, or explore the massive universe of freestyle skills, you will find something that works for you! And my mission is to give you as many resources as possible!"
  },
  {
    id:"3KQq3Yls6oA",
    title:"LOSE THAT BEGINNER LOOK! (Easy to Follow) Jump Rope Tutorial",
    author:"Rush Athletics TV",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwngAY2eyPPcTv0pMl76XB0AZFwS42wC6bnEtMw4FuA=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Welcome to the Home Of Jump Rope Fitness & Lifestyle! Making cardio epic since 2015.\n Check our line of premium jump ropes and let’s fly! \n I'm Rushie S, Jump Rope Coach & CEO of Rush Athletics. I've been teaching people how to fly boss since 2015 & fortunate to have left an accounting career to pursue my Youtube & brand venture full time. \n The benefits of jump rope training far exceeds what is commonly thought and I want to share it with you! Our community is growing worldwide. We'd love you to subscribe & join the cardio revolution we're creating. #TheyRunWeFly"
  },
  {
    id:"L8dcu3tw3xk",
    title:"10 Min Home Jump Rope + Ab Workout",
    author:"Jump Rope Dudes",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwngKnXdokDS7-D_weVfTXqTWcxw7tfuvoH6QNVQgRA=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Jump Rope. Get Lean. Live More. #dothething Hi there. We’re the Jump Rope Dudes, Dan and Brandon.\n  We're here to help you get lean and live more by incorporating jump rope into your fitness routine. \n We created this community because we lost 130 lbs collectively after years of struggling to get and stay lean.\n With just a jump rope and the world as your gym we are here to teach you how to do the same."
  },
  {
    id:"RJVYXg3g8Xs",
    title:"WHICH JUMP ROPES ARE BEST FOR BEGINNERS? My Honest Opinion..",
    author:"Rush Athletics TV",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwngAY2eyPPcTv0pMl76XB0AZFwS42wC6bnEtMw4FuA=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Welcome to the Home Of Jump Rope Fitness & Lifestyle! Making cardio epic since 2015.\n Check our line of premium jump ropes and let’s fly! \n I'm Rushie S, Jump Rope Coach & CEO of Rush Athletics. I've been teaching people how to fly boss since 2015 & fortunate to have left an accounting career to pursue my Youtube & brand venture full time. \n The benefits of jump rope training far exceeds what is commonly thought and I want to share it with you! Our community is growing worldwide. We'd love you to subscribe & join the cardio revolution we're creating. #TheyRunWeFly"
  },
  {
    id:"7ZJl42lcd1I",
    title:"Learn how to do a Switch Cross NOT Criss Cross Jumping Rope",
    author:"Jump Rope Mom",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwni_Ps3dFoogE7mF8wK5ca0Tp-CJF4yguDKyWfrNtQ=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Karly Kent, Founder of Gratitude Ropes, a former competitive jump roper, certified fitness coach, and single mom of two, turned her childhood passion into a mission to help others get fit while finding gratitude and appreciation for life. \n  Karly knows first hand how striving for our fitness and life goals can make us take our achievements, body, and current lives for granted. Karly teaches others how to jump rope, get fit and inspires others to go after their dreams despite what is being thrown at them, with gratitude."
  },
  {
    id:"s_nuLdHYmBY",
    title:"Tutorial - Alternate Foot Step from Crossrope",
    author:"Crossrope Jump Ropes",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwng-xmu5H4ulIV9RpnMBieZYs-cssinDR8lbbp81QQ=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Discover the fun new jump rope fitness experience everyone is talking about. \n We believe in the power of jump rope fitness and its ability to help busy people get fit and feel their best. \n People on the move, craving something fun and different, and breaking free from the confines of a gym. People like you. \n At Crossrope, we craft high-quality jump ropes that are built to perform and built to last. \n Our Infinity ropes come with a custom training app loaded with tutorials, workouts, and fitness challenges to help you stay fit even when you're on the move. Crossrope helps you get a fun and engaging workout wherever you go."
  },
  {
    id:"wp3JVexe7qY",
    title:"Jump Rope Tricks In SLOW MOTION (Tutorial)",
    author:"Jump Rope Dudes",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwngKnXdokDS7-D_weVfTXqTWcxw7tfuvoH6QNVQgRA=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Jump Rope. Get Lean. Live More. #dothething Hi there. We’re the Jump Rope Dudes, Dan and Brandon.\n  We're here to help you get lean and live more by incorporating jump rope into your fitness routine. \n We created this community because we lost 130 lbs collectively after years of struggling to get and stay lean.\n With just a jump rope and the world as your gym we are here to teach you how to do the same."
  },
  {
    id:"L5-_yHWLnVs",
    title:"Double Cross-Over Jump Rope Trick - Beginner Tutorial",
    author:"Rush Athletics TV",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwngAY2eyPPcTv0pMl76XB0AZFwS42wC6bnEtMw4FuA=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Welcome to the Home Of Jump Rope Fitness & Lifestyle! Making cardio epic since 2015.\n Check our line of premium jump ropes and let’s fly! \n I'm Rushie S, Jump Rope Coach & CEO of Rush Athletics. I've been teaching people how to fly boss since 2015 & fortunate to have left an accounting career to pursue my Youtube & brand venture full time. \n The benefits of jump rope training far exceeds what is commonly thought and I want to share it with you! Our community is growing worldwide. We'd love you to subscribe & join the cardio revolution we're creating. #TheyRunWeFly"
  },
  {
    id:"2vgABryUY0c",
    title:"10 Min Jump Rope Workout To Lose Weight",
    author:"Jump Rope Dudes",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwngKnXdokDS7-D_weVfTXqTWcxw7tfuvoH6QNVQgRA=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Jump Rope. Get Lean. Live More. #dothething Hi there. We’re the Jump Rope Dudes, Dan and Brandon.\n  We're here to help you get lean and live more by incorporating jump rope into your fitness routine. \n We created this community because we lost 130 lbs collectively after years of struggling to get and stay lean.\n With just a jump rope and the world as your gym we are here to teach you how to do the same."
  },
  {
    id:"SV4xe4NgHIQ",
    title: "AWESOME ANNIE (with slow motion) - JUMP ROPE TUTORIAL",
    author:"Coach Nate K-G",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwni5VgaX9ZV_LjfwEG6rnRHBsMKt-2NGJAePe30vEg=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Hi, I am your jump rope coach Nate! Through jumping over a decade, I’ve realized that there are so many different styles and applications of the jump rope! Whether you want to mimic the style of Floyd Mayweather, focus solely on double unders during your workout, or explore the massive universe of freestyle skills, you will find something that works for you! And my mission is to give you as many resources as possible!"
  },
  {
    id:"Up_gG4W7Gas",
    title:"Burn 100 Calories In Under 10 Minutes",
    author:"Jump Rope Dudes",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwngKnXdokDS7-D_weVfTXqTWcxw7tfuvoH6QNVQgRA=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Jump Rope. Get Lean. Live More. #dothething Hi there. We’re the Jump Rope Dudes, Dan and Brandon.\n  We're here to help you get lean and live more by incorporating jump rope into your fitness routine. \n We created this community because we lost 130 lbs collectively after years of struggling to get and stay lean.\n With just a jump rope and the world as your gym we are here to teach you how to do the same."
  },
  {
    id:"l2yuJRZsV0c",
    title:"Jump Rope Tricks Beginner To Advanced",
    author:"Jump Rope Dudes",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwngKnXdokDS7-D_weVfTXqTWcxw7tfuvoH6QNVQgRA=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Jump Rope. Get Lean. Live More. #dothething Hi there. We’re the Jump Rope Dudes, Dan and Brandon.\n  We're here to help you get lean and live more by incorporating jump rope into your fitness routine. \n We created this community because we lost 130 lbs collectively after years of struggling to get and stay lean.\n With just a jump rope and the world as your gym we are here to teach you how to do the same."
  },
  {
    id:"gINX0D4QWpM",
    title:"Everything You Need To Know About Jump Rope Fitness In 10 Minutes",
    author:"Jump Rope Dudes",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwngKnXdokDS7-D_weVfTXqTWcxw7tfuvoH6QNVQgRA=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Jump Rope. Get Lean. Live More. #dothething Hi there. We’re the Jump Rope Dudes, Dan and Brandon.\n  We're here to help you get lean and live more by incorporating jump rope into your fitness routine. \n We created this community because we lost 130 lbs collectively after years of struggling to get and stay lean.\n With just a jump rope and the world as your gym we are here to teach you how to do the same."
  },
  {
    id:"CEcOWZIis7Y",
    title:"Tutorial - Criss-Cross from Crossrope",
    author:"Crossrope Jump Ropes",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwng-xmu5H4ulIV9RpnMBieZYs-cssinDR8lbbp81QQ=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Discover the fun new jump rope fitness experience everyone is talking about. \n We believe in the power of jump rope fitness and its ability to help busy people get fit and feel their best. \n People on the move, craving something fun and different, and breaking free from the confines of a gym. People like you. \n At Crossrope, we craft high-quality jump ropes that are built to perform and built to last. \n Our Infinity ropes come with a custom training app loaded with tutorials, workouts, and fitness challenges to help you stay fit even when you're on the move. Crossrope helps you get a fun and engaging workout wherever you go."
  },
  {
    id:"X9PB5I7SKKk",
    title: "How To Do The Southpaw Double Under",
    author:"Coach Nate K-G",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwni5VgaX9ZV_LjfwEG6rnRHBsMKt-2NGJAePe30vEg=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Hi, I am your jump rope coach Nate! Through jumping over a decade, I’ve realized that there are so many different styles and applications of the jump rope! Whether you want to mimic the style of Floyd Mayweather, focus solely on double unders during your workout, or explore the massive universe of freestyle skills, you will find something that works for you! And my mission is to give you as many resources as possible!"
  },
  {
    id:"N-7xwJBTRpg",
    title:"Jump Rope Exercise Tutorial - Heel Toe Step [Crossrope]",
    author:"Crossrope Jump Ropes",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwng-xmu5H4ulIV9RpnMBieZYs-cssinDR8lbbp81QQ=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Discover the fun new jump rope fitness experience everyone is talking about. \n We believe in the power of jump rope fitness and its ability to help busy people get fit and feel their best. \n People on the move, craving something fun and different, and breaking free from the confines of a gym. People like you. \n At Crossrope, we craft high-quality jump ropes that are built to perform and built to last. \n Our Infinity ropes come with a custom training app loaded with tutorials, workouts, and fitness challenges to help you stay fit even when you're on the move. Crossrope helps you get a fun and engaging workout wherever you go."
  },
  {
    id:"9h8TK9qnDrw",
    title:"SKIPPING IS THE COOLEST CARDIO!",
    author:"Rush Athletics TV",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwngAY2eyPPcTv0pMl76XB0AZFwS42wC6bnEtMw4FuA=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Welcome to the Home Of Jump Rope Fitness & Lifestyle! Making cardio epic since 2015.\n Check our line of premium jump ropes and let’s fly! \n I'm Rushie S, Jump Rope Coach & CEO of Rush Athletics. I've been teaching people how to fly boss since 2015 & fortunate to have left an accounting career to pursue my Youtube & brand venture full time. \n The benefits of jump rope training far exceeds what is commonly thought and I want to share it with you! Our community is growing worldwide. We'd love you to subscribe & join the cardio revolution we're creating. #TheyRunWeFly"
  },
  {
    id:"pqgXbeIsfqU",
    title: "JUMP ROPE TUTORIAL - DOUBLE UNDER CROSS (with slow motion) ",
    author:"Coach Nate K-G",
    subscribers: faker.datatype.number(),
    image: "https://yt3.ggpht.com/ytc/AAUvwni5VgaX9ZV_LjfwEG6rnRHBsMKt-2NGJAePe30vEg=s88-c-k-c0x00ffffff-no-rj",
    views: faker.datatype.number(),
    date: faker.date.past(),
    description:"Hi, I am your jump rope coach Nate! Through jumping over a decade, I’ve realized that there are so many different styles and applications of the jump rope! Whether you want to mimic the style of Floyd Mayweather, focus solely on double unders during your workout, or explore the massive universe of freestyle skills, you will find something that works for you! And my mission is to give you as many resources as possible!"
  },
];

module.exports = videos;
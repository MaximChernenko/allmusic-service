const songs = [
  {
    id: 1,
    band: 1,
    album: 1,
    name: "Undead",
    time: "4:25",
    number: 1,
    isPick: true
  },
  {
    id: 2,
    band: 1,
    album: 1,
    name: "Sell Your Soul",
    time: "3:13",
    number: 2,
    isPick: false
  },
  {
    id: 3,
    band: 1,
    album: 1,
    name: "Everywhere I Go",
    time: "3:30",
    number: 3,
    isPick: false
  },
  {
    id: 4,
    band: 1,
    album: 1,
    name: "No Other Place",
    time: "3:16",
    number: 4,
    isPick: false
  },
  {
    id: 5,
    band: 1,
    album: 1,
    name: "No. 5",
    time: "3:05",
    number: 5,
    isPick: false
  },
  {
    id: 6,
    band: 1,
    album: 1,
    name: "Young",
    time: "3:16",
    number: 6,
    isPick: true
  },
  {
    id: 7,
    band: 1,
    album: 1,
    name: "Black Dahila",
    time: "3:45",
    number: 7,
    isPick: false
  },
  {
    id: 8,
    band: 1,
    album: 1,
    name: "This Love, This Hate",
    time: "3:57",
    number: 8,
    isPick: true
  },
  {
    id: 9,
    band: 1,
    album: 1,
    name: "Bottle and a Gun",
    time: "3:22",
    number: 9,
    isPick: false
  },
  {
    id: 10,
    band: 1,
    album: 1,
    name: "California",
    time: "3:16",
    number: 10,
    isPick: false
  },
  {
    id: 11,
    band: 1,
    album: 1,
    name: "City",
    time: "3:34",
    number: 11,
    isPick: false
  },
  {
    id: 12,
    band: 1,
    album: 1,
    name: "The Diary",
    time: "4:35",
    number: 12,
    isPick: false
  },
  {
    id: 13,
    band: 1,
    album: 1,
    name: "Pimpin'",
    time: "3:07",
    number: 13,
    isPick: false
  },
  {
    id: 14,
    band: 1,
    album: 1,
    name: "Paradise Lost",
    time: "3:10",
    number: 14,
    isPick: false
  },
  {
    id: 15,
    band: 1,
    album: 2,
    name: "Been to Hell",
    time: "3:23",
    number: 1,
    isPick: true
  },
  {
    id: 16,
    band: 1,
    album: 2,
    name: "Apologize",
    time: "3:27",
    number: 2,
    isPick: false
  },
  {
    id: 17,
    band: 1,
    album: 2,
    name: "Comin' in Hot",
    time: "3:23",
    number: 3,
    isPick: false
  },
  {
    id: 18,
    band: 1,
    album: 2,
    name: "My Town",
    time: "3:36",
    number: 4,
    isPick: false
  },
  {
    id: 19,
    band: 1,
    album: 2,
    name: "I Don't Wanna Die",
    time: "3:58",
    number: 5,
    isPick: false
  },
  {
    id: 20,
    band: 1,
    album: 2,
    name: "Hear Me Now",
    time: "3:34",
    number: 6,
    isPick: true
  },
  {
    id: 21,
    band: 1,
    album: 2,
    name: "Gangsta Sexy",
    time: "3:53",
    number: 7,
    isPick: false
  },
  {
    id: 22,
    band: 1,
    album: 2,
    name: "Glory",
    time: "3:34",
    number: 8,
    isPick: false
  },
  {
    id: 23,
    band: 1,
    album: 2,
    name: "Lights Out",
    time: "3:51",
    number: 9,
    isPick: false
  },
  {
    id: 24,
    band: 1,
    album: 2,
    name: "Coming Back Down",
    time: "3:22",
    number: 1,
    isPick: false
  },
  {
    id: 25,
    band: 1,
    album: 2,
    name: "Bullet",
    time: "3:17",
    number: 11,
    isPick: false
  },
  {
    id: 26,
    band: 1,
    album: 2,
    name: "Levitate",
    time: "3:24",
    number: 12,
    isPick: false
  },
  {
    id: 27,
    band: 1,
    album: 2,
    name: "Pour Me",
    time: "4:03",
    number: 13,
    isPick: true
  },
  {
    id: 28,
    band: 1,
    album: 2,
    name: "Tendencies",
    time: "3:32",
    number: 14,
    isPick: false
  },
  {
    id: 29,
    band: 1,
    album: 3,
    name: "Dead Bite",
    time: "3:38",
    number: 1,
    isPick: false
  },
  {
    id: 30,
    band: 1,
    album: 3,
    name: "From the Ground",
    time: "3:45",
    number: 2,
    isPick: true
  },
  {
    id: 31,
    band: 1,
    album: 3,
    name: "Another Way Out",
    time: "2:47",
    number: 3,
    isPick: false
  },
  {
    id: 32,
    band: 1,
    album: 3,
    name: "Lion",
    time: "3:54",
    number: 4,
    isPick: true
  },
  {
    id: 33,
    band: 1,
    album: 3,
    name: "We Are",
    time: "4:34",
    number: 5,
    isPick: false
  },
  {
    id: 34,
    band: 1,
    album: 3,
    name: "Pigskin",
    time: "2:41",
    number: 6,
    isPick: false
  },
  {
    id: 35,
    band: 1,
    album: 3,
    name: "Rain",
    time: "3:41",
    number: 7,
    isPick: false
  },
  {
    id: 36,
    band: 1,
    album: 3,
    name: "Kill Everyone",
    time: "2:52",
    number: 8,
    isPick: false
  },
  {
    id: 37,
    band: 1,
    album: 3,
    name: "Believe",
    time: "4:14",
    number: 9,
    isPick: true
  },
  {
    id: 38,
    band: 1,
    album: 3,
    name: "Up in Smoke",
    time: "3:38",
    number: 10,
    isPick: false
  },
  {
    id: 39,
    band: 1,
    album: 3,
    name: "Outside",
    time: "4:43",
    number: 11,
    isPick: false
  },
  {
    id: 40,
    band: 1,
    album: 4,
    name: "Usual Suspects",
    time: "3:46",
    number: 1,
    isPick: true
  },
  {
    id: 41,
    band: 1,
    album: 4,
    name: "How We Roll",
    time: "4:45",
    number: 2,
    isPick: true
  },
  {
    id: 42,
    band: 1,
    album: 4,
    name: "Day of the Dead",
    time: "3:55",
    number: 3,
    isPick: false
  },
  {
    id: 43,
    band: 1,
    album: 4,
    name: "War Child",
    time: "3:58",
    number: 4,
    isPick: false
  },
  {
    id: 44,
    band: 1,
    album: 4,
    name: "Dark Places",
    time: "4:39",
    number: 5,
    isPick: false
  },
  {
    id: 45,
    band: 1,
    album: 4,
    name: "Take Me Home",
    time: "3:47",
    number: 6,
    isPick: false
  },
  {
    id: 46,
    band: 1,
    album: 4,
    name: "Gravity",
    time: "3:19",
    number: 7,
    isPick: true
  },
  {
    id: 47,
    band: 1,
    album: 4,
    name: "Does Everybody in the World Have to Die",
    time: "3:17",
    number: 8,
    isPick: false
  },
  {
    id: 48,
    band: 1,
    album: 4,
    name: "Disease",
    time: "3:31",
    number: 9,
    isPick: false
  },
  {
    id: 49,
    band: 1,
    album: 4,
    name: "Party by Myself",
    time: "4:10",
    number: 10,
    isPick: false
  },
  {
    id: 50,
    band: 1,
    album: 4,
    name: "Live Forever",
    time: "3:40",
    number: 11,
    isPick: false
  },
  {
    id: 51,
    band: 1,
    album: 4,
    name: "Save Me",
    time: "3:27",
    number: 12,
    isPick: false
  },
  {
    id: 52,
    band: 1,
    album: 5,
    name: "California Dreaming",
    time: "3:54",
    number: 1,
    isPick: true
  },
  {
    id: 53,
    band: 1,
    album: 5,
    name: "Whatever It Takes",
    time: "3:07",
    number: 2,
    isPick: true
  },
  {
    id: 54,
    band: 1,
    album: 5,
    name: "Bad Moon",
    time: "3:52",
    number: 3,
    isPick: false
  },
  {
    id: 55,
    band: 1,
    album: 5,
    name: "Ghost Beach",
    time: "3:54",
    number: 4,
    isPick: true
  },
  {
    id: 56,
    band: 1,
    album: 5,
    name: "Broken Record",
    time: "3:39",
    number: 5,
    isPick: false
  },
  {
    id: 57,
    band: 1,
    album: 5,
    name: "Nobody's Watching",
    time: "3:58",
    number: 6,
    isPick: false
  },
  {
    id: 58,
    band: 1,
    album: 5,
    name: "Renegade",
    time: "3:03",
    number: 7,
    isPick: true
  },
  {
    id: 59,
    band: 1,
    album: 5,
    name: "Black Cadillac",
    time: "3:47",
    number: 8,
    isPick: false
  },
  {
    id: 60,
    band: 1,
    album: 5,
    name: "Pray (Put 'Em in the Dirt)",
    time: "4:24",
    number: 9,
    isPick: false
  },
  {
    id: 61,
    band: 1,
    album: 5,
    name: "Cashed Out",
    time: "3:29",
    number: 10,
    isPick: false
  },
  {
    id: 62,
    band: 1,
    album: 5,
    name: "Riot",
    time: "3:47",
    number: 11,
    isPick: true
  },
  {
    id: 63,
    band: 1,
    album: 5,
    name: "We Own the Night",
    time: "4:02",
    number: 12,
    isPick: false
  },
  {
    id: 64,
    band: 1,
    album: 5,
    name: "Bang Bang",
    time: "3:40",
    number: 13,
    isPick: false
  },
  {
    id: 65,
    band: 1,
    album: 5,
    name: "Your Life",
    time: "3:25",
    number: 14,
    isPick: false
  }
];

export default songs;

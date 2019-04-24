// images
import at from "../images/albums/1.jpg";
import i from "../images/albums/5.jpg";
import k from "../images/albums/6.jpg";
import dsam from "../images/albums/7.jpg";
import nl from "../images/albums/8.jpg";
import h from "../images/albums/9.jpg";
import t from "../images/albums/10.jpg";
import ss from "../images/albums/11.jpg";
import bl from "../images/albums/12.jpg";
import nftu from "../images/albums/01.jpg";
import dotd from "../images/albums/02.jpg";
import five from "../images/albums/03.jpg";

const albums = [
  {
    id: 1,
    band: "Hollywood Undead",
    imgSrc: ss,
    name: "Swan Songs",
    rewiew: `Zombies or not, Hollywood Undead are a true underground phenomenon. 
    They built their reputation through word of mouth on social networking sites
    such as MySpace, and it was to the latter's fledgling record label offshoot 
    that the six-member rap-rock troupe signed to in 2005. They later parted company 
    with MySpace Records, preferring to seek another label rather than censor their 
    lyrics, and it's hard to argue with their logic. Presented here in all its unedited 
    glory, there's nothing particularly shocking about any of the lyrics on Swan 
    Song -- in fact, there's very little that's interesting at all. Part of the problem 
    lies in the fact that the group doesn't seem to know what it wants to be. Much of 
    the album is given over to ironic frat-boy party rap: marquee singles "Everywhere 
    I Go" and "No. 5" play fast and loose with misogynist and homophobic slurs, 
    but it's a cheap way to win a laugh, and the jokes become stale long before 
    Hollywood Undead are finished with them. Insufferable though the lyrics are, 
    there are some genuinely good ideas here. "Everywhere I Go" and "No Other Place," 
    in particular, are as danceable as any single in recent memory, and the production 
    value is strong throughout the album. However, their attempts to get serious are 
    about as convincing as their pimp credentials (i.e. not very) and the more intensified 
    the mood, the more interchangeable the rappers become (only Funny Man stands out for 
    his booming baritone). Tracks like "Young" and "This Love, This Hate" represent a 
    low point, as the emcees trade ever-more-exasperated Marshall Mathers impersonations 
    to the backdrop of imposing Wall of Sound guitars and angsty chorus vocals. Clearly, 
    they have talent, but a giant question remains as to whether Hollywood Undead have 
    the self-confidence to drop the gimmicky exterior and deliver something a little more 
    substantial than dated clichés and mildly offensive lyrics.`,
    label: "Octone Records / A&M / Octone",
    rating: 2,
    userRating: 4,
    isPick: false,
    releaseDate: "August 26, 2008",
    duration: "49:31",
    genre: "Pop/Rock",
    styles: [
      "Alternative Pop/Rock",
      "Alternative/Indie Rock",
      "Heavy Metal",
      "Rap-Metal",
      "Rap-Rock"
    ],
    songs: [1, 2, 3, 4, 5]
  },
  {
    id: 2,
    band: "Hollywood Undead",
    imgSrc: at,
    name: "American Tragedy",
    rewiew: `After their debut, Swan Song, went gold, the six masked members 
    of Hollywood Undead went back to their home studios and started pre-production 
    on a follow-up. With some new tracks in tow, Johnny 3 Tears, J-Dog, Charlie Scene, 
    Da Kurlzz, Funny Man, and new recruit Daniel "Danny" Murillo (a former American 
    Idol contestant who replaced Aron “Deuce” Erlichman) reunited with former 
    Hollywood Undead producer Don Gilmore and recruited four other producers 
    (Griffin Boice, Sam Hollander, Dave Katz, and Kevin Rudolf) to broaden their sound. 
    They succeed and they don’t, on this level. With more contributors, the group shows 
    a wider range of influences, from mainstream pop, to Southern rap, to the usual 
    riff-hearty rap-rock songs with big, shiny, Good Charlotte-style hooks, but at the 
    core of the band, little has changed. The crew is still intentionally misogynistic 
    and profane, sounding like caricatures of Eminem or Kid Rock as they rap and sing 
    about gangsta clichés like puffing blunts, drinking Patron, getting booty, and 
    flossing. Still, suburban youth won’t care if the material is stock. It’s a big, 
    overstated album fit for moving car subwoofers, and even though it’s more layered 
    with keyboards and digital gloss, the active rock appeal is there, even when they 
    depart from the machismo and deliver the introspective rap ballads “Pour Me” and 
    “Coming Back Down.”`,
    label: "Octone Records / A&M",
    rating: 2,
    releaseDate: "April 5, 2011",
    userRating: 4,
    isPick: false,
    duration: "50:37",
    genre: "Pop/Rock",
    styles: [
      "Alternative Pop/Rock",
      "Alternative/Indie Rock",
      "Heavy Metal",
      "Rap-Metal",
      "Rap-Rock"
    ],
    songs: [1, 2, 3, 4, 5]
  },
  {
    id: 3,
    band: "Hollywood Undead",
    imgSrc: nftu,
    name: "Notes From the Underground",
    rewiew: `Working again with American Tragedy producer/co-writer Griffin Boice, 
    masked alt-metal/rap outfit Hollywood Undead returned with their testosterone-fueled 
    signature sound for their 2012 album Notes from the Underground. The record boosts 
    the knowing arena rock posturing with titanic contemporary production. Going for 
    a grand scale enhances the power of their rap-metal attack, which can get tedious, 
    but as they did on the previous year's outing, Johnny 3 Tears, Charlie Scene, Da Kurlzz, 
    Funny Man, J-Dog, and Danny divide their songs up into club pop, rap-rock, and power 
    ballads to break up the sameness of Hollywood suburbia. There are two lyrical themes, 
    too, almost as if they are partying recklessly when the masks are on, and inner angst 
    is revealed when the masks are removed. For every song that revolves around juvenile 
    humor -- for instance, the thinly veiled sports gag "Pigskin," where Charlie Scene 
    raps about his weenie and Danny sings "Hike up your skirt girl, let's get 
    naughty" -- there's a seemingly heartfelt song about dejection. The party rhymes 
    are pretty played out at this point, and knowingly so, as evidenced by a line like 
    "Girls look at me like that guy must make pornos/Yeah, I'm pushing 30 but I still 
    drink Mickey's four O's," but otherwise, the group shows no signs of slowing and 
    will probably still be going strong if and when rap-rock makes a resurgence.`,
    label: "Octone Records / A&M",
    rating: 2,
    releaseDate: "January 8, 2013",
    userRating: 4,
    isPick: false,
    duration: "40:27",
    genre: "Pop/Rock",
    styles: ["Alternative/Indie Rock", "Heavy Metal", "Rap-Metal", "Rap-Rock"],
    songs: [1, 2, 3, 4, 5]
  },
  {
    id: 4,
    band: "Hollywood Undead",
    imgSrc: dotd,
    name: "Day of the Dead",
    rewiew: `The fifth studio long-player from the ghoulish, non-Faygo-drinking, 
    Los Angeles-based rap-rock crew, Day of the Dead is the follow-up to 2002's 
    chart-topping Notes from the Underground -- it's also the group's first outing 
    for Interscope. Darker and a tad more defiant than previous outings (calling out 
      the band's "haters" is a frequent theme) but still stocked with enough good-time, 
      in-your-face, but largely innocuous party-rap anthems to successfully soundtrack 
      multiple lost weekends, the 12-track set offers up a wide array of rock, electropop, 
      and hip-hop with a newfound emphasis on the pop side of things. Festooned with enough 
      well-worn hooks, stadium-ready gang vocals, and seismic orchestral bursts to be 
      briefly mistaken for a Katy Perry superbowl halftime show rehearsal, Charlie Scene, 
      Da Kurlzz, Danny, Funny Man, J-Dog, and Johnny 3 Tears clearly have their sights set 
      on the mainstream, but they pollute the water with too many cheap slurs and lazy, 
      sexist non sequiturs to really break free from the WWE/UFC promo/highlight reel graveyard, 
      even though singles like "Gravity," "How We Roll," "Usual Suspects," and the beefy title 
      track, at least sonically, suggest very obvious commercial aspirations. That said, 
      overthinking Hollywood Undead causes brain freeze, and taking the album at face value 
      results in a far better listening experience. How many masked, horror-themed rap-rock 
      crews the world needs is still up for debate, but Day of the Dead is easily the group's 
      most accessible and instantly gratifying outing, and what it lacks in nuance it more 
      than makes up for with (schlocky) audacity.`,
    label: "Interscope / Polydor",
    rating: 3,
    releaseDate: "March 31, 2015",
    userRating: 4,
    isPick: false,
    duration: "46:14",
    genre: "Pop/Rock",
    styles: ["Alternative/Indie Rock", "Heavy Metal", "Rap-Metal", "Rap-Rock"],
    songs: [1, 2, 3, 4, 5]
  },
  {
    id: 5,
    band: "Hollywood Undead",
    imgSrc: five,
    name: "Five",
    rewiew: `The veteran rap-rock unit's fifth studio long-player and the 
    follow-up to 2015's Day of the Dead, the aptly named Five delivers an 
    eclectic sonic slap that draws from a wide array of influences. Like 
    its predecessor, the 14-track set can go from gritty to velvety at the 
    drop of a needle, with hood-centric (as in Los Angeles) party anthems 
    like "Riot" and "California Dreaming" (definitely not a Mamas & the Papas cover) 
    simmering alongside languid reggae-folk jams ("Ghost Beach") and brooding, 
    "Lose Yourself"-era Eminem-inspired beatdowns. That penchant for experimentation, 
    as well as a flair for pop craftsmanship, is what sets Hollywood Undead apart 
    from some of their contemporaries -- for every seedy barrel roll into nu-metal 
    malevolence -- "Renegade" is a bona fide street peeler -- there's a slick blast 
    of buttery radio fodder like "Nobody's Watching." Most of the time, the two camps 
    find a way to coexist, with fiery rhymes yielding big, anthemic (clean) metalcore 
    choruses -- the ragged and self-loathing "Broken Record" takes a different approach, 
    pairing incrementally desperate verses with a refrain straight out of the Twenty 
    One Pilots manual. Five is an oddly seductive album, especially considering the 
    merits of the oft-maligned and frequently stagnant genre from which it was conjured. 
    Vocalist/guitarist Charlie Scene, vocalist/multi-instrumentalist Danny, vocalist Funny 
    Man, vocalist/multi-instrumentalist J-Dog, and vocalist/bassist Johnny 3 Tears may be 
    rolling down some familiar streets, but they're doing it with style and a not 
    insignificant amount of substance.`,
    label: "BMG",
    rating: 4,
    releaseDate: "October 27, 2017",
    userRating: 4,
    isPick: true,
    duration: "52:01",
    genre: "Pop/Rock",
    styles: ["Alternative/Indie Rock", "Heavy Metal", "Rap-Metal", "Rap-Rock"],
    songs: [1, 2, 3, 4, 5]
  },
  { id: 6, band: "Papa Roach", imgSrc: i, name: "Infest" },
  { id: 7, band: "Eminem", imgSrc: k, name: "Kamikaze" },
  { id: 8, band: "Billie Eilish", imgSrc: dsam, name: "Dont Smile at Me" },
  { id: 9, band: "Deuce", imgSrc: nl, name: "Nine Lives" },
  { id: 10, band: "Three Days Grace", imgSrc: h, name: "Human" },
  { id: 11, band: "Twenty One Pilots", imgSrc: t, name: "Trench" },
  { id: 12, band: "Twenty One Pilots", imgSrc: bl, name: "Blurryface" }
];

export default albums;

const quotes = [
  {
    id: 1,
    quote:
      "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
    author: "Rumi",
  },
  {
    id: 2,
    quote:
      "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
    author: "Abdul Kalam",
  },
  {
    id: 3,
    quote:
      "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
    author: "Abdul Kalam",
  },
  {
    id: 4,
    quote: "If You Can'T Make It Good, At Least Make It Look Good.",
    author: "Bill Gates",
  },
  {
    id: 5,
    quote:
      "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
    author: "Rumi",
  },
  {
    id: 6,
    quote:
      "It is bad for a young man to sin; but it is worse for an old man to sin.",
    author: "Abu Bakr (R.A)",
  },
  {
    id: 7,
    quote:
      "If You Are Out To Describe The Truth, Leave Elegance To The Tailor.",
    author: "Albert Einstein",
  },
  {
    id: 8,
    quote:
      "O man you are busy working for the world, and the world is busy trying to turn you out.",
    author: "Abu Bakr (R.A)",
  },
  {
    id: 9,
    quote:
      "While children are struggling to be unique, the world around them is trying all means to make them look like everybody else.",
    author: "Abdul Kalam",
  },
  {
    id: 10,
    quote:
      "These Capitalists Generally Act Harmoniously And In Concert, To Fleece The People.",
    author: "Abraham Lincoln",
  },
  {
    id: 11,
    quote:
      "I Don'T Believe In Failure. It Is Not Failure If You Enjoyed The Process.",
    author: "Oprah Winfrey",
  },
  {
    id: 12,
    quote:
      "Do not get elated at any victory, for all such victory is subject to the will of God.",
    author: "Abu Bakr (R.A)",
  },
  {
    id: 13,
    quote:
      "Wear gratitude like a cloak and it will feed every corner of your life.",
    author: "Rumi",
  },
  {
    id: 14,
    quote:
      "If you even dream of beating me you'd better wake up and apologize.",
    author: "Muhammad Ali",
  },
  {
    id: 15,
    quote: "I Will Praise Any Man That Will Praise Me.",
    author: "William Shakespeare",
  },
  {
    id: 16,
    quote: "One Of The Greatest Diseases Is To Be Nobody To Anybody.",
    author: "Mother Teresa",
  },
  {
    id: 17,
    quote:
      "I'm so fast that last night I turned off the light switch in my hotel room and was in bed before the room was dark.",
    author: "Muhammad Ali",
  },
  {
    id: 18,
    quote:
      "People Must Learn To Hate And If They Can Learn To Hate, They Can Be Taught To Love.",
    author: "Nelson Mandela",
  },
  {
    id: 19,
    quote:
      "Everyone has been made for some particular work, and the desire for that work has been put in every heart.",
    author: "Rumi",
  },
  {
    id: 20,
    quote: "The less of the World, the freer you live.",
    author: "Umar ibn Al-Khattāb (R.A)",
  },
  {
    id: 21,
    quote: "Respond to every call that excites your spirit.",
    author: "Rumi",
  },
  {
    id: 22,
    quote: "The Way To Get Started Is To Quit Talking And Begin Doing.",
    author: "Walt Disney",
  },
  {
    id: 23,
    quote: "God Doesn'T Require Us To Succeed, He Only Requires That You Try.",
    author: "Mother Teresa",
  },
  {
    id: 24,
    quote:
      "Speak any language, Turkish, Greek, Persian, Arabic, but always speak with love.",
    author: "Rumi",
  },
  {
    id: 25,
    quote: "Happiness comes towards those which believe in him.",
    author: "Ali ibn Abi Talib (R.A)",
  },
  {
    id: 26,
    quote:
      "Knowledge is of two kinds: that which is absorbed and that which is heard. And that which is heard does not profit if it is not absorbed.",
    author: "Ali ibn Abi Talib (R.A)",
  },
  {
    id: 27,
    quote: "When I am silent, I have thunder hidden inside.",
    author: "Rumi",
  },
  {
    id: 28,
    quote:
      "Technological Progress Is Like An Axe In The Hands Of A Pathological Criminal.",
    author: "Albert Einstein",
  },
  {
    id: 29,
    quote:
      "No One Would Choose A Friendless Existence On Condition Of Having All The Other Things In The World.",
    author: "Aristotle",
  },
  {
    id: 30,
    quote:
      "Life is a gamble. You can get hurt, but people die in plane crashes, lose their arms and legs in car accidents; people die every day. Same with fighters: some die, some get hurt, some go on. You just don't let yourself believe it will happen to you.",
    author: "Muhammad Ali",
  },
  {
    id: 31,
    quote:
      "The End Of Life Is To Be Like God, And The Soul Following God Will Be Like Him.",
    author: "Socrates",
  },
  {
    id: 32,
    quote:
      "Let us sacrifice our today so that our children can have a better tomorrow.",
    author: "Abdul Kalam",
  },
  {
    id: 33,
    quote:
      "Your task is not to seek for love, but merely to seek and find all the barriers within yourself that you have built against it.",
    author: "Rumi",
  },
  {
    id: 34,
    quote: "In every religion there is love, yet love has no religion.",
    author: "Rumi",
  },
  {
    id: 35,
    quote: "Everything in the universe is within you. Ask all from yourself.",
    author: "Rumi",
  },
  {
    id: 36,
    quote:
      "I'm not a handsome guy, but I can give my hand to someone who needs help. Beauty is in the heart, not in the face.",
    author: "Abdul Kalam",
  },
  {
    id: 37,
    quote: "What Do I Wear In Bed? Why, Chanel No. 5, Of Course.",
    author: "Marilyn Monroe",
  },
  {
    id: 38,
    quote: "A Good Head And A Good Heart Are Always A Formidable Combination.",
    author: "Nelson Mandela",
  },
  {
    id: 39,
    quote: "The Soul Never Thinks Without A Picture.",
    author: "Aristotle",
  },
  {
    id: 40,
    quote:
      "In your light I learn how to love. In your beauty, how to make poems. You dance inside my chest where no-one sees you, but sometimes I do, and that sight becomes this art.",
    author: "Rumi",
  },
  {
    id: 41,
    quote:
      "Let the beauty we love be what we do. There are hundreds of ways to kneel and kiss the ground.",
    author: "Rumi",
  },
  {
    id: 42,
    quote:
      "If You Like Your Brother And He'S Prospering, You'Ll Be Pleased For Him.",
    author: "Hamad Bin Isa Al Khalifa",
  },
  {
    id: 43,
    quote: "Success Is Dependent Upon The Glands - Sweat Glands.",
    author: "Zig Ziglar",
  },
  {
    id: 44,
    quote:
      "Champions are not generated from the championship. Champion is generated from something they have in them, desires, dreams, and visions.",
    author: "Muhammad Ali",
  },
  {
    id: 45,
    quote:
      "No matter what is the environment around you, it is always possible to maintain your brand of integrity.",
    author: "Abdul Kalam",
  },
  {
    id: 46,
    quote: "Applause Waits On Success.",
    author: "Benjamin Franklin",
  },
  {
    id: 47,
    quote: "Just As Courage Imperils Life, Fear Protects It.",
    author: "Leonardo Da Vinci",
  },
  {
    id: 48,
    quote: "It'S Better To Be A Lion For A Day Than A Sheep All Your Life.",
    author: "Elizabeth Kenny",
  },
  {
    id: 49,
    quote: "The Devil'S Voice Is Sweet To Hear.",
    author: "Stephen King",
  },
  {
    id: 50,
    quote: "Sometimes the people with the worst past, create the best future.",
    author: "Umar ibn Al-Khattāb (R.A)",
  },
  {
    id: 51,
    quote: "Every day, nay every moment, try to do some good deed.",
    author: "Abu Bakr (R.A)",
  },
  {
    id: 52,
    quote:
      "No Matter What People Tell You, Words And Ideas Can Change The World.",
    author: "Robin Williams",
  },
  {
    id: 53,
    quote:
      "Champions have to have the skill and the will. But the will must be stronger than the skill.",
    author: "Muhammad Ali",
  },
  {
    id: 54,
    quote:
      "Men Occasionally Stumble Over The Truth, But Most Of Them Pick Themselves Up And Hurry Off As If Nothing Had Happened.",
    author: "Winston Churchill",
  },
  {
    id: 55,
    quote:
      "Goodbyes are only for those who love with their eyes. Because for those who love with heart and soul there is no such thing as separation.",
    author: "Rumi",
  },
  {
    id: 56,
    quote: "The best revenge is to improve yourself.",
    author: "Ali ibn Abi Talib (R.A)",
  },
  {
    id: 57,
    quote:
      "God gave me this illness to remind me that I'm not Number One; He is.",
    author: "Muhammad Ali",
  },
  {
    id: 58,
    quote:
      "Success Is A Personal Standard, Reaching For The Highest That Is In Us, Becoming All That We Can Be.",
    author: "Zig Ziglar",
  },
  {
    id: 59,
    quote:
      "When You Have Really Exhausted An Experience You Always Reverence And Love It.",
    author: "Albert Camus",
  },
  {
    id: 60,
    quote:
      "Now you see me, now you don't. George thinks he will, but I know he won't!",
    author: "Muhammad Ali",
  },
  {
    id: 61,
    quote: "Elegance Does Not Consist In Putting On A New Dress.",
    author: "Coco Chanel",
  },
  {
    id: 62,
    quote:
      "It Is Always Consoling To Think Of Suicide: In That Way One Gets Through Many A Bad Night.",
    author: "Friedrich Nietzsche",
  },
  {
    id: 63,
    quote: "Eating Words Has Never Given Me Indigestion.",
    author: "Winston Churchill",
  },
  {
    id: 64,
    quote:
      "India has to be transformed into a developed nation, a prosperous nation and a healthy nation, with a value system.",
    author: "Abdul Kalam",
  },
  {
    id: 65,
    quote: "It's not bragging if you can back it up.",
    author: "Muhammad Ali",
  },
  {
    id: 66,
    quote:
      "I Wish People Would Love Everybody Else The Way They Love Me. It Would Be A Better World.",
    author: "Muhammad Ali",
  },
  {
    id: 67,
    quote:
      "Why do I want my wife to show off her panties when the wind blows? Horses show their behinds, and cows and mules, not humans.",
    author: "Muhammad Ali",
  },
  {
    id: 68,
    quote: "Words Are Only Painted Fire; A Look Is The Fire Itself.",
    author: "Mark Twain",
  },
  {
    id: 69,
    quote: "Words, Without Power, Is Mere Philosophy.",
    author: "Muhammad Iqbal",
  },
  {
    id: 70,
    quote: "The cure for pain is in the pain.",
    author: "Rumi",
  },
  {
    id: 71,
    quote: "Whatever happens, just keep smiling and lose yourself in Love.",
    author: "Rumi",
  },
  {
    id: 72,
    quote:
      "Do The Right Thing. It Will Gratify Some People And Astonish The Rest.",
    author: "Mark Twain",
  },
  {
    id: 73,
    quote: "Only the soul knows what love is.",
    author: "Rumi",
  },
  {
    id: 74,
    quote:
      "Earning of livelihood by following some profession is better than living on charity.",
    author: "Umar ibn Al-Khattāb (R.A)",
  },
  {
    id: 75,
    quote:
      "Burdens are the foundations of ease and bitter things the forerunners of pleasure.",
    author: "Rumi",
  },
  {
    id: 76,
    quote:
      "Too Many Have Dispensed With Generosity In Order To Practice Charity.",
    author: "Albert Camus",
  },
  {
    id: 77,
    quote:
      "Even the greatest was once a beginner. Don't be afraid to take that first step.",
    author: "Muhammad Ali",
  },
  {
    id: 78,
    quote: "No Great Intellectual Thing Was Ever Done By Great Effort.",
    author: "Theodore Roosevelt",
  },
  {
    id: 79,
    quote: "To fight against one's desires is the greatest of all fights.",
    author: "Ali ibn Abi Talib (R.A)",
  },
  {
    id: 80,
    quote: "Innovation Distinguishes Between A Leader And A Follower.",
    author: "Steve Jobs",
  },
  {
    id: 81,
    quote: "We Enjoy The Process Far More Than The Proceeds.",
    author: "Warren Buffett",
  },
  {
    id: 82,
    quote: "When I Started Counting My Blessings, My Whole Life Turned Around.",
    author: "Willie Nelson",
  },
  {
    id: 83,
    quote:
      "This being human is a guest house. Every morning a new arrival. Welcome and entertain them all!",
    author: "Rumi",
  },
  {
    id: 84,
    quote:
      "All My Life I'Ve Looked At Words As Though I Were Seeing Them For The First Time.",
    author: "Ernest Hemingway",
  },
  {
    id: 85,
    quote:
      "Waiting Is Painful. Forgetting Is Painful. But Not Knowing Which To Do Is The Worse Kind Of Suffering.",
    author: "Paulo Coelho",
  },
  {
    id: 86,
    quote:
      "Never Allow Someone To Be Your Priority While Allowing Yourself To Be Their Option.",
    author: "Mark Twain",
  },
  {
    id: 87,
    quote: "To Jaw-Jaw Is Always Better Than To War-War.",
    author: "Winston Churchill",
  },
  {
    id: 88,
    quote: "That'S The Real Trouble With The World, Too Many People Grow Up",
    author: "Walt Disney",
  },
  {
    id: 89,
    quote: "It Is Easier To Stay Out Than Get Out.",
    author: "Mark Twain",
  },
  {
    id: 90,
    quote: "The worst man is the one who sees himself as the best.",
    author: "Muhammad Ali",
  },
  {
    id: 91,
    quote:
      "The World Breaks Everyone, And Afterward, Some Are Strong At The Broken Places.",
    author: "Ernest Hemingway",
  },
  {
    id: 92,
    quote: "Rule No.1: Never Lose Money. Rule No.2: Never Forget Rule No.1.",
    author: "Warren Buffett",
  },
  {
    id: 93,
    quote:
      "Convergence of our views on global trade issues under the WTO and our common resolve to combat terrorism provide a valuable base for mutual understanding.",
    author: "Abdul Kalam",
  },
  {
    id: 94,
    quote:
      "Whenever You Find Yourself On The Side Of The Majority, It Is Time To Pause And Reflect.",
    author: "Mark Twain",
  },
  {
    id: 95,
    quote: "Whatever Is Done For Love Always Occurs Beyond Good And Evil.",
    author: "Friedrich Nietzsche",
  },
  {
    id: 96,
    quote: "Things Should Be Made As Simple As Possible, But Not Any Simpler.",
    author: "Albert Einstein",
  },
  {
    id: 97,
    quote: "Stop acting so small. You are the universe in ecstatic motion.",
    author: "Rumi",
  },
  {
    id: 98,
    quote: "All Truth Is Simple... Is That Not Doubly A Lie?",
    author: "Friedrich Nietzsche",
  },
  {
    id: 99,
    quote:
      "Money Is Only A Tool. It Will Take You Wherever You Wish, But It Will Not Replace You As The Driver.",
    author: "Ayn Rand",
  },
  {
    id: 100,
    quote:
      "The fight is won or lost far away from witnesses - behind the lines, in the gym, and out there on the road, long before I dance under those lights.",
    author: "Muhammad Ali",
  },
];

export const generateRandomNameAndMessage = () => {
  return quotes[Math.floor(Math.random() * quotes.length)];
};

const isPrime = (num) => {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

export const findNthPrime = (n) => {
  let count = 0;
  let num = 2;
  while (count < n) {
    if (isPrime(num)) {
      count++;
    }
    num++;
  }
  return num - 1;
};

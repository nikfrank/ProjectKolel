import ComingSoon from './pure/ComingSoon';
import Mishna from './p/Mishna';
import Home from './p/Home';
import Insights from './p/Insights';

const Background = ComingSoon;
const ReviewQA = ComingSoon;
const FullReview = ComingSoon;
const EnglishCharts = ComingSoon;
const PointByPoint = ComingSoon;
const Halacha = ComingSoon;
const DailyQuiz = ComingSoon;
const Tosfos = ComingSoon;
const Revachldaf = ComingSoon;
const Podcast = ComingSoon;
const Navigator = ComingSoon;
const YosefDaat = ComingSoon;
const Tavlaut = ComingSoon;
const GliMasechta = ComingSoon;
const Chidunim = ComingSoon;
const YerushalamiMatchup = ComingSoon;
const YerushalmiAudio = ComingSoon;
const OurReplies = ComingSoon;
const RevachLDaf = ComingSoon;


export default [
  {  
    title: 'Home',
    path: '/',
    component: Home,
  },
  {  
    title: 'Mishna',
    path: '/mishna',
    component: Mishna,
  },
  {    
    title: 'Insights',
    path: '/insights',
    component: Insights,
  },
  {    
    title: 'Background',
    path: '/background',
    component: Background,
  },
  {    
    title: 'Review Q&A',
    path: '/reviewqa',
    component: ReviewQA,
  },
  {    
    title: 'Full Review',
    path: '/fullreview',
    component: FullReview,
  },
  {    
    title: 'English Charts',
    path: '/englishcharts',
    component: EnglishCharts,
  },
  {    
    title: 'Point by Point',
    path: '/pointbypoint',
    component: PointByPoint,
  },
  {    
    title: 'Halachah',
    path: '/halacha',
    component: Halacha,    
  },
  {  
    title: 'Daily Quiz',
    path: '/dailyquiz',
    component: DailyQuiz,
  },
  {    
    title: 'Tosfos',
    path: '/tosfos',
    component: Tosfos,
  },
  {    
    title: "Revach L'daf",
    path: '/revachldaf',
    component: RevachLDaf,
  },
  {   
    title: 'Podcasts',
    path: '/poodcast',
    component: Podcast,
  },
  {   
    title: 'Navigator',
    path: '/navigator',
    component: Navigator,
  },
  {    
    title: 'יוסף דעת',
    path: '/yosefdaat',
    component: YosefDaat,
  },
  { 
    title: 'טבלאות',
    path: '/tavlaut',
    component: Tavlaut,
  },
  {    
    title: 'גלי מסכתא',
    path: '/glimasechta',
    component: GliMasechta,
  },
  {    
    title: 'חידונים',
    path: '/chidunim',
    component: Chidunim,
  },
  {    
    title: 'Yerushalmi matchup',
    path: '/yerushalmimatchup',
    component: YerushalamiMatchup,
  },
  {    
    title: 'Yerushalmi Audio',
    path: '/yerushalmiaudio',
    component: YerushalmiAudio,
  },
  {    
    title: 'Our Replies',
    path: '/ourreplies',
    component: OurReplies,
  },
];

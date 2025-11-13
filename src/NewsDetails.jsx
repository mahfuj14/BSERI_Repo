// components/NewsDetails.jsx
import { useParams, Link } from 'react-router-dom';
//import { newsData } from '../data/newsData'; // Your news data source
import NavbarMenus from "/src/components/NavbarMenus";
import Footer from "/src/components/footer.jsx";
import { useState } from 'react';
import image1 from "/src/assets/newssection/560245426_122129642888960165_4937549103345471782_n.jpg";
import image2 from "/src/assets/newssection/558978402_122129403206960165_7646942842344773211_n.jpg";
import image3 from "/src/assets/newssection/558945922_122129121758960165_873485167682281635_n.jpg";
import image4 from "/src/assets/newssection/557739024_122127599948960165_3958152303353171207_n.jpg";

const newsData = [
  {
    id: 1,
    title: "Youth Unite for a Greener New Year: Rally Against Fireworks and Sky Lanterns",
    description: `Bangladesh Society for Ecological Research Initiative (BSERI) was proud to be a co-organizer of the impactful awareness rally titled "Not Fireworks or Sky Lanterns, Let Love for Nature Be the Celebration of the New Year". The event brought together environmental activists and students to promote eco-friendly celebrations and raise awareness about the harmful effects of fireworks on our environment and wildlife.`,
    fullDescription: `Bangladesh Society for Ecological Research Initiative (BSERI) was proud to be a co-organizer of the impactful awareness rally titled,
      "Not Fireworks or Sky Lanterns, Let Love for Nature Be the Celebration of the New Year",
      jointly organized by the Dhaka University Environment Society (DUES) and the Arboriculture Center.
      
      The rally aimed to raise awareness against the harmful environmental impacts of fireworks and sky lanterns while inspiring a more nature-friendly way to celebrate the new year. 🌿✨
      
      Participants from various environmental organizations and student bodies gathered to march through the university campus, holding placards and banners with eco-friendly messages. 
      The event concluded with an interactive session where students shared their ideas for sustainable celebrations.
      
      Here are some moments from the rally and post-event interactions, a true reflection of youth-led commitment to ecological responsibility. 💚`,
    image: image1,
    link: "#",
    featured: true,
    date: "2024-12-28",
    tags: ["Environment", "Youth", "Awareness", "Sustainability"]
  },
  {
    id: 2,
    title: "BSERI Executive Meeting Paves the Way for Future Sustainability Initiatives",
    description: `BSERI successfully completed its Executive Meeting with new plans and refined procedures for upcoming ecological projects. The meeting focused on developing innovative sustainability initiatives and strengthening our commitment to environmental research and community engagement across Bangladesh.`,
    fullDescription: `Bangladesh Society for Ecological Research Initiative (BSERI) successfully completed its Executive Meeting. 🌿
        
        The meeting brought together all executive members to discuss and finalize strategies for the upcoming year. Key agenda items included:
        
        • Development of new ecological research projects
        • Community engagement programs
        • Partnership opportunities with international organizations
        • Digital transformation of our operations
        
        New plans, refined procedures, and impactful projects are on the way, all dedicated to advancing ecological research and sustainability in Bangladesh. 🌎💚
        
        The executive team also reviewed the progress of ongoing initiatives and set measurable targets for environmental impact assessment.
        
        Stay tuned as we step into a new phase of action, collaboration, and innovation!`,
    image: image2,
    link: "#",
    featured: false,
    date: "2024-12-20",
    tags: ["Meeting", "Planning", "Sustainability", "Leadership"]
  },
  {
    id: 3,
    title: "পরিবেশবান্ধব উন্নয়নে GFFB, BSERI ও DUES-এর মধ্যে ত্রিপক্ষীয় চুক্তি স্বাক্ষর",
    description: `গ্রিন ফিউচার ফাউন্ডেশন বাংলাদেশ (GFFB), বাংলাদেশ সোসাইটি ফর ইকোলজিকাল রিসার্চ ইনিশিয়েটিভ (BSERI) এবং ঢাকা বিশ্ববিদ্যালয় পরিবেশ সংসদ (DUES) এর মধ্যে একটি ঐতিহাসিক ত্রিপক্ষীয় সমঝোতা স্মারক স্বাক্ষরিত হয়েছে।`,
    fullDescription: `আলহামদুলিল্লাহ! গ্রিন ফিউচার ফাউন্ডেশন বাংলাদেশ (GFFB), বাংলাদেশ সোসাইটি ফর ইকোলজিকাল রিসার্চ ইনিশিয়েটিভ (BSERI) এবং ঢাকা বিশ্ববিদ্যালয় পরিবেশ সংসদ (DUES) 
      – এই তিনটি সংগঠনের মধ্যে একটি ত্রিপক্ষীয় সমঝোতা স্মারক (MoU) স্বাক্ষরিত হয়েছে।
      
      এই ঐতিহাসিক চুক্তি স্বাক্ষর অনুষ্ঠানে উপস্থিত ছিলেন তিনটি সংগঠনের নেতৃবৃন্দ ও সদস্যরা। চুক্তির মূল উদ্দেশ্য হলো:
      
      • যৌথ গবেষণা প্রকল্প বাস্তবায়ন
      • তরুণ পরিবেশকর্মীদের প্রশিক্ষণ প্রদান
      • জাতীয় পর্যায়ে পরিবেশ সচেতনতা কার্যক্রম পরিচালনা
      • টেকসই উন্নয়ন লক্ষ্যমাত্রা অর্জনে共同努力
      
      এই চুক্তির মাধ্যমে পরিবেশবান্ধব উন্নয়ন, গবেষণা, তরুণদের সক্ষমতা বৃদ্ধি ও টেকসই উদ্যোগ বাস্তবায়নের ক্ষেত্রে যৌথভাবে কাজ করার নতুন দিগন্ত উন্মোচিত হলো।`,
    image: image3,
    link: "#",
    featured: false,
    date: "2024-12-15",
    tags: ["Partnership", "MoU", "Collaboration", "Development"]
  },
  {
    id: 4,
    title: "Honoring the Guiding Lights: Celebrating World Teachers' Day",
    description: `BSERI celebrated World Teachers' Day by honoring mentors who nurture future environmental leaders. The virtual event recognized educators' crucial role in shaping ecological consciousness and inspiring the next generation of planet protectors.`,
    fullDescription: `On this World Teachers' Day, Bangladesh Society for Ecological Research Initiative (BSERI) 
      honors all the mentors who enlighten minds and nurture a generation of thinkers dedicated to protecting our planet.
      
      We organized a special virtual event to celebrate our academic advisors and mentors who have been instrumental in:
      
      • Guiding young researchers in ecological studies
      • Providing expert insights on environmental challenges
      • Mentoring the next generation of environmental leaders
      • Supporting community-based conservation initiatives
      
      The event featured heartfelt messages from BSERI members, sharing how their teachers inspired them to pursue environmental conservation.
      
      Let's celebrate those who teach us not only from books, but from the rhythm of nature itself. Their wisdom helps us understand the delicate balance of our ecosystems and the importance of preserving them for future generations.
      
      🌏💚`,
    image: image4,
    link: "#",
    featured: false,
    date: "2024-12-05",
    tags: ["Teachers", "Mentorship", "Education", "Tribute"]
  },
];

const NewsDetails = () => {
  const { id } = useParams();
  const [showNav, setShowNav] = useState(false);
  const news = newsData.find(item => item.id === parseInt(id));

  const handleNav = () => {
    setShowNav(!showNav);
  };

  if (!news) {
    return (
      <div className="min-h-screen flex flex-col">
        {/* Top Header with Navbar */}
        <div className="w-full bg-gradient-to-r from-green-800 to-emerald-700 shadow-lg">
          <NavbarMenus showNav={showNav} handleNav={handleNav} />
          <div className="py-8">
            <h1 className="text-4xl font-bold text-center text-white mb-2">
              BSERI News
            </h1>
            <p className="text-lg text-center text-green-100">
              Latest Updates and Stories
            </p>
          </div>
        </div>

        {/* Error Content */}
        <div className="flex-1 flex items-center justify-center">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">News Not Found</h2>
            <Link to="/" className="text-caribbean-green hover:underline">
              Back to Home
            </Link>
          </div>
        </div>

        {/* Footer */}
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* Top Header with Navbar */}
      <div className="w-full bg-gradient-to-r from-green-800 to-emerald-700 shadow-lg">
        <NavbarMenus showNav={showNav} handleNav={handleNav} />
        <div className="py-8">
          <h1 className="text-4xl font-bold text-center text-white mb-2">
            BSERI News
          </h1>
          <p className="text-lg text-center text-green-100">
            Latest Updates and Stories
          </p>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 bg-gradient-to-br from-white to-green-50 py-8">
        <div className="max-w-4xl mx-auto px-4">
          {/* Back Button */}
          <Link
            to="/"
            className="inline-flex items-center text-gray-600 hover:text-caribbean-green mb-8 transition-colors"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Back to News
          </Link>

          {/* News Content */}
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            {/* Featured Image */}
            <div className="relative h-96 overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover"
              />
              {news.featured && (
                <div className="absolute top-6 left-6">
                  <span className="bg-caribbean-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured Story
                  </span>
                </div>
              )}
            </div>

            {/* News Content */}
            <div className="p-8">
              {/* Meta Information */}
              <div className="flex flex-wrap items-center gap-4 mb-6 text-sm text-gray-500">
                <span className="bg-gray-100 px-3 py-1 rounded-full">
                  {new Date(news.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                  })}
                </span>
                <span>•</span>
                <span>5 min read</span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {news.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Title */}
              <h1 className="text-4xl font-bold text-gray-800 mb-6 leading-tight">
                {news.title}
              </h1>

              {/* Description/Summary */}
              <p className="text-xl text-gray-600 mb-8 leading-relaxed font-medium">
                {news.description}
              </p>

              {/* Full Content */}
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 whitespace-pre-line leading-relaxed">
                  {news.fullDescription}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-8 pt-8 border-t border-gray-200">
                <button className="flex items-center gap-2 text-gray-600 hover:text-caribbean-green transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Save for later
                </button>
                <button className="flex items-center gap-2 text-gray-600 hover:text-caribbean-green transition-colors">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share
                </button>
              </div>
            </div>
          </article>

          {/* Related News */}
          <section className="mt-12">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">Related News</h2>
            <div className="grid md:grid-cols-2 gap-6">
              {newsData
                .filter(item => item.id !== news.id)
                .slice(0, 2)
                .map(relatedNews => (
                  <Link
                    key={relatedNews.id}
                    to={`/news/${relatedNews.id}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group"
                  >
                    <div className="flex">
                      <img
                        src={relatedNews.image}
                        alt={relatedNews.title}
                        className="w-24 h-24 object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="p-4 flex-1">
                        <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-caribbean-green transition-colors">
                          {relatedNews.title}
                        </h3>
                        <p className="text-gray-600 text-sm line-clamp-2">
                          {relatedNews.description}
                        </p>
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default NewsDetails;
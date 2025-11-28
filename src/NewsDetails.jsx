import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import NavbarMenus from '/src/components/NavbarMenus';
import Footer from '/src/components/Footer.jsx';


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
      <div className="relative min-h-screen flex flex-col">
        {/* Background Layers */}
        <div className="absolute inset-0 -z-10 overflow-hidden">
          {/* Top deep green section (approx. 4.5cm) */}
          <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-950 via-green-900 to-green-800"></div>
          {/* Light main content area (rest of the page) */}
          <div className="absolute top-32 inset-x-0 bottom-0 bg-gradient-to-br from-white via-emerald-50 to-green-100"></div>
        </div>

        {/* Navbar */}
        <div className="relative z-20">
          <NavbarMenus showNav={showNav} handleNav={handleNav} />
        </div>

        {/* Error Content */}
        <div className="flex-1 flex items-center justify-center py-16">
          <div className="text-center bg-white/80 backdrop-blur-sm rounded-2xl p-12 shadow-xl max-w-md mx-4">
            <div className="w-20 h-20 mx-auto mb-6 bg-red-100 rounded-full flex items-center justify-center">
              <svg className="w-10 h-10 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.964-.833-2.732 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-4">News Article Not Found</h2>
            <p className="text-gray-600 mb-6">The news article you're looking for doesn't exist or has been moved.</p>
            <Link 
              to="/" 
              className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-semibold rounded-lg hover:bg-green-700 transition-colors"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>

        <Footer />
      </div>
    );
  }

  return (
    <div className="relative min-h-screen flex flex-col">
      {/* Background Layers */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        {/* Top deep green section (approx. 4.5cm) */}
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-green-950 via-green-900 to-green-800"></div>
        {/* Light main content area (rest of the page) */}
        <div className="absolute top-32 inset-x-0 bottom-0 bg-gradient-to-br from-white via-emerald-50 to-green-100"></div>
      </div>

      {/* Navbar */}
      <div className="relative z-20">
        <NavbarMenus showNav={showNav} handleNav={handleNav} />
      </div>

      {/* Main Content */}
      <div className="flex-1 py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/"
              className="inline-flex items-center text-gray-600 hover:text-green-700 transition-colors bg-white/80 backdrop-blur-sm rounded-xl px-4 py-3 shadow-sm hover:shadow-md"
            >
              <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to News
            </Link>
          </div>

          {/* News Content Card */}
          <article className="bg-white rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
            {/* Featured Image */}
            <div className="relative h-80 sm:h-96 md:h-[500px] overflow-hidden">
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
              
              {/* Featured Badge */}
              {news.featured && (
                <div className="absolute top-6 left-6">
                  <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                    Featured Story
                  </span>
                </div>
              )}

              {/* Title Overlay */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 leading-tight">
                  {news.title}
                </h1>
                <p className="text-lg sm:text-xl text-green-100 max-w-3xl">
                  {news.description}
                </p>
              </div>
            </div>

            {/* News Content */}
            <div className="p-6 sm:p-8 md:p-12">
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
                <span>•</span>
                <span className="flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 010-5 2.5 2.5 0 010 5z"/>
                  </svg>
                  {news.location || 'Global'}
                </span>
              </div>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-8">
                {news.tags.map((tag, index) => (
                  <span
                    key={index}
                    className="bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium border border-green-200"
                  >
                    #{tag}
                  </span>
                ))}
              </div>

              {/* Full Content */}
              <div className="prose prose-lg max-w-none">
                <div className="text-gray-700 whitespace-pre-line leading-relaxed text-base sm:text-lg">
                  {news.fullDescription}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mt-12 pt-8 border-t border-gray-200">
                <button className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors px-4 py-2 rounded-lg hover:bg-green-50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Save for later
                </button>
                <button className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors px-4 py-2 rounded-lg hover:bg-green-50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z" />
                  </svg>
                  Share this article
                </button>
                <button className="flex items-center gap-3 text-gray-600 hover:text-green-600 transition-colors px-4 py-2 rounded-lg hover:bg-green-50">
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                  Like
                </button>
              </div>
            </div>
          </article>

          {/* Related News Section */}
          <section className="mt-16">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-800 mb-4">Related News</h2>
              <p className="text-gray-600 max-w-2xl mx-auto">
                Discover more stories and updates from BSERI
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData
                .filter(item => item.id !== news.id)
                .slice(0, 3)
                .map(relatedNews => (
                  <Link
                    key={relatedNews.id}
                    to={`/news/${relatedNews.id}`}
                    className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-2"
                  >
                    <div className="relative h-48 overflow-hidden">
                      <img
                        src={relatedNews.image}
                        alt={relatedNews.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {relatedNews.featured && (
                        <div className="absolute top-3 left-3">
                          <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                            Featured
                          </span>
                        </div>
                      )}
                    </div>
                    <div className="p-6">
                      <div className="flex items-center text-sm text-gray-500 mb-3">
                        <span>{new Date(relatedNews.date).toLocaleDateString()}</span>
                        <span className="mx-2">•</span>
                        <span>3 min read</span>
                      </div>
                      <h3 className="font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                        {relatedNews.title}
                      </h3>
                      <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                        {relatedNews.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {relatedNews.tags.slice(0, 2).map((tag, index) => (
                          <span
                            key={index}
                            className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </Link>
                ))}
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsDetails;
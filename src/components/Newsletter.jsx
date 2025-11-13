import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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


const NewsCorner = () => {
  const [showAllNews, setShowAllNews] = useState(false);
  const navigate = useNavigate();
  const featuredNews = newsData.find((news) => news.featured);
  const otherNews = newsData.filter((news) => !news.featured);

  const handleSeeDetails = (newsId) => {
    navigate(`/news/${newsId}`);
  };

  return (
    <section className="bg-gradient-to-br from-white to-green-50 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header - Properly Aligned */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12 gap-4">
          <div>
            <h2 className="text-4xl font-bold text-gray-800 mb-2">News Corner</h2>
            <p className="text-lg text-gray-600">
              Latest updates and events from BSERI
            </p>
          </div>
          {/* <button
            onClick={() => setShowAllNews(true)}
            className="bg-caribbean-green text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-all duration-300 font-semibold flex items-center gap-2 group shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
          >
            View All News
            <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button> */}
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Featured News - Large Card */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-500 group">
              <div className="relative overflow-hidden">
                <img
                  src={featuredNews.image}
                  alt={featuredNews.title}
                  className="w-full h-80 object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4">
                  <span className="bg-caribbean-green text-white px-4 py-2 rounded-full text-sm font-semibold">
                    Featured Story
                  </span>
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="bg-black bg-opacity-50 text-white px-3 py-1 rounded-full text-sm">
                    {new Date(featuredNews.date).toLocaleDateString()}
                  </span>
                </div>
              </div>
              <div className="p-8">
                <div className="flex flex-wrap gap-2 mb-4">
                  {featuredNews.tags.map((tag, index) => (
                    <span
                      key={index}
                      className="bg-green-100 text-green-800 text-xs px-3 py-1 rounded-full font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-2xl font-bold text-gray-800 mb-4 leading-tight">
                  {featuredNews.title}
                </h3>
                <p className="text-gray-600 mb-6 leading-relaxed text-lg line-clamp-4">
                  {featuredNews.description}
                </p>
                <button
                  onClick={() => handleSeeDetails(featuredNews.id)}
                  className="inline-flex items-center bg-caribbean-green text-white px-6 py-3 rounded-lg hover:bg-green-600 transition-colors font-semibold group"
                >
                  Read Featured Story
                  <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>

          {/* Other News - Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl shadow-lg p-6 sticky top-6">
              <h3 className="text-xl font-bold text-gray-800 mb-6 pb-4 border-b border-gray-200">
                Recent Updates
              </h3>
              
              <div className="space-y-6">
                {otherNews.map((news) => (
                  <div
                    key={news.id}
                    className="group cursor-pointer transition-all duration-300 hover:bg-gray-50 rounded-xl p-4 -mx-2"
                  >
                    <div className="flex gap-4">
                      <div className="flex-shrink-0">
                        <img
                          src={news.image}
                          alt={news.title}
                          className="w-16 h-16 rounded-lg object-cover group-hover:scale-110 transition-transform duration-300"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-start justify-between mb-1">
                          <span className="text-xs text-gray-500 font-medium">
                            {new Date(news.date).toLocaleDateString('en-US', {
                              month: 'short',
                              day: 'numeric'
                            })}
                          </span>
                        </div>
                        <h4 className="font-semibold text-gray-800 mb-2 line-clamp-2 group-hover:text-caribbean-green transition-colors">
                          {news.title}
                        </h4>
                        <p className="text-gray-600 text-sm mb-2 line-clamp-2 leading-relaxed">
                          {news.description}
                        </p>
                        <div className="flex flex-wrap gap-1 mb-2">
                          {news.tags.slice(0, 2).map((tag, index) => (
                            <span
                              key={index}
                              className="bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full"
                            >
                              #{tag}
                            </span>
                          ))}
                        </div>
                        <button
                          onClick={() => handleSeeDetails(news.id)}
                          className="text-caribbean-green text-sm font-semibold hover:text-green-600 transition-colors flex items-center gap-1 group"
                        >
                          See Details
                          <svg className="w-3 h-3 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Additional See All Button for Mobile */}
              <div className="mt-8 pt-6 border-t border-gray-200 lg:hidden">
                <button
                  onClick={() => setShowAllNews(true)}
                  className="w-full bg-gray-100 text-gray-700 py-3 rounded-xl hover:bg-gray-200 transition-all duration-300 font-semibold flex items-center justify-center gap-2 group"
                >
                  View All News
                  <svg className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsCorner;
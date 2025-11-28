import { Link } from 'react-router-dom';

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



const NewsPage = () => {
  // Assuming newsData is available from your data source
  // If not, you'll need to import it or fetch it

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
        <NavbarMenus />
      </div>

      {/* Main Content */}
      <div className="flex-1 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Latest News & Updates
            </h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Stay informed with the latest developments, research findings, and announcements from BSERI
            </p>
          </div>

          {/* Featured News Section */}
          {newsData.filter(news => news.featured).length > 0 && (
            <section className="mb-16">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Featured Stories</h2>
              <div className="grid lg:grid-cols-2 gap-8">
                {newsData
                  .filter(news => news.featured)
                  .slice(0, 2) // Show only 2 featured stories
                  .map(featuredNews => (
                    <Link
                      key={featuredNews.id}
                      to={`/news/${featuredNews.id}`}
                      className="bg-white rounded-2xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 group"
                    >
                      <div className="relative h-64 overflow-hidden">
                        <img
                          src={featuredNews.image}
                          alt={featuredNews.title}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                        <div className="absolute top-4 left-4">
                          <span className="bg-gradient-to-r from-green-600 to-emerald-500 text-white px-4 py-2 rounded-full text-sm font-semibold shadow-lg">
                            Featured Story
                          </span>
                        </div>
                        <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                          <h3 className="text-xl font-bold mb-2 line-clamp-2">
                            {featuredNews.title}
                          </h3>
                          <p className="text-green-100 line-clamp-2">
                            {featuredNews.description}
                          </p>
                        </div>
                      </div>
                    </Link>
                  ))}
              </div>
            </section>
          )}

          {/* All News Grid */}
          <section>
            <h2 className="text-2xl font-bold text-gray-800 mb-6">All News</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {newsData.map(news => (
                <Link
                  key={news.id}
                  to={`/news/${news.id}`}
                  className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 group hover:-translate-y-1"
                >
                  {/* News Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={news.image}
                      alt={news.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Featured Badge */}
                    {news.featured && (
                      <div className="absolute top-3 left-3">
                        <span className="bg-green-600 text-white px-3 py-1 rounded-full text-xs font-semibold">
                          Featured
                        </span>
                      </div>
                    )}

                    {/* Date Badge */}
                    <div className="absolute top-3 right-3">
                      <span className="bg-black/70 text-white px-2 py-1 rounded text-xs">
                        {new Date(news.date).toLocaleDateString('en-US', {
                          month: 'short',
                          day: 'numeric'
                        })}
                      </span>
                    </div>
                  </div>

                  {/* News Content */}
                  <div className="p-6">
                    <div className="flex items-center text-sm text-gray-500 mb-3">
                      <span>{new Date(news.date).toLocaleDateString('en-US', {
                        year: 'numeric',
                        month: 'long',
                        day: 'numeric'
                      })}</span>
                      <span className="mx-2">•</span>
                      <span>5 min read</span>
                    </div>

                    <h3 className="font-bold text-gray-800 mb-3 line-clamp-2 group-hover:text-green-600 transition-colors">
                      {news.title}
                    </h3>

                    <p className="text-gray-600 text-sm line-clamp-3 mb-4">
                      {news.description}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1 mb-4">
                      {news.tags.slice(0, 3).map((tag, index) => (
                        <span
                          key={index}
                          className="bg-green-50 text-green-700 px-2 py-1 rounded text-xs"
                        >
                          #{tag}
                        </span>
                      ))}
                      {news.tags.length > 3 && (
                        <span className="bg-gray-100 text-gray-600 px-2 py-1 rounded text-xs">
                          +{news.tags.length - 3} more
                        </span>
                      )}
                    </div>

                    {/* Read More */}
                    <div className="flex items-center text-green-600 font-semibold text-sm group-hover:text-green-700 transition-colors">
                      Read more
                      <svg 
                        className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" 
                        fill="none" 
                        stroke="currentColor" 
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            {/* Empty State */}
            {newsData.length === 0 && (
              <div className="text-center py-16">
                <div className="w-24 h-24 mx-auto mb-6 bg-gray-100 rounded-full flex items-center justify-center">
                  <svg className="w-12 h-12 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9m0 0v12" />
                  </svg>
                </div>
                <h3 className="text-xl font-semibold text-gray-700 mb-2">No News Available</h3>
                <p className="text-gray-500">Check back later for updates and announcements.</p>
              </div>
            )}
          </section>

          {/* Newsletter Subscription */}
          <section className="mt-16 bg-gradient-to-r from-green-600 to-emerald-600 rounded-2xl p-8 text-center text-white">
            <h2 className="text-2xl font-bold mb-4">Stay Updated</h2>
            <p className="text-green-100 mb-6 max-w-2xl mx-auto">
              Subscribe to our newsletter and never miss important updates, research findings, and news from BSERI.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-green-300"
              />
              <button className="bg-white text-green-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
                Subscribe
              </button>
            </div>
          </section>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default NewsPage;
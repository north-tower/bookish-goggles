
import { Button } from "@/components/ui/button";

const SuccessStories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between mb-12">
          <h2 className="text-4xl font-bold text-gray-900">Success stories of our clients</h2>
          <div className="flex gap-2">
            <Button variant="outline" size="icon" className="rounded-full">
              ←
            </Button>
            <Button variant="outline" size="icon" className="rounded-full">
              →
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-purple-600 to-purple-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="flex items-center justify-between">
            <div className="flex-1 max-w-2xl">
              <div className="flex items-center gap-4 mb-6">
                <div className="text-white text-2xl font-bold">◆ flashgrid</div>
                <div className="flex gap-2">
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">Website</span>
                  <span className="px-3 py-1 bg-white/20 backdrop-blur-sm rounded-full text-xs">Corporate</span>
                </div>
              </div>
              
              <h3 className="text-3xl font-bold mb-6">
                We've delivered a powerful corporate website for the enterprise segment
              </h3>
              
              <p className="text-purple-100 mb-8 leading-relaxed">
                The Aeres   team studied FlashGrid's product and marketing strategy to make sure all of our requirements were addressed.
              </p>
              
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 bg-white/20 rounded-full"></div>
                <div>
                  <div className="font-semibold">Art Danielov</div>
                  <div className="text-purple-200 text-sm">CEO & CTO at FlashGrid</div>
                </div>
              </div>
              
              <Button className="bg-white text-purple-600 hover:bg-gray-100">
                See case study →
              </Button>
            </div>
            
            <div className="hidden lg:block">
              <div className="w-80 h-80 bg-white/10 rounded-2xl backdrop-blur-sm flex items-center justify-center">
                <div className="text-6xl">📱</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuccessStories;

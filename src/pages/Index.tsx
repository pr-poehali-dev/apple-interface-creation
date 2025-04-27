import { Button } from "@/components/ui/button";
import AppleNav from "@/components/AppleNav";
import ProductHero from "@/components/ProductHero";
import AppleFeature from "@/components/AppleFeature";

const Index = () => {
  return (
    <div className="min-h-screen bg-white font-sans">
      <AppleNav />
      
      <main className="pt-12">
        {/* Hero Section */}
        <ProductHero 
          title="iPhone 15 Pro" 
          subtitle="Титановый. Прочный. Про." 
          imageUrl="https://images.unsplash.com/photo-1695578130310-52fe387be59a?q=80&w=1974&auto=format&fit=crop"
        />
        
        {/* Feature Sections */}
        <AppleFeature 
          title="Процессор A17 Pro"
          description="Новый процессор A17 Pro соответствует высокому уровню iPhone 15 Pro и iPhone 15 Pro Max. Это наш первый 3-нанометровый чип с 6-ядерным центральным процессором — 2 ядра производительности и 4 ядра эффективности — делают его на 10% быстрее."
          imageUrl="https://images.unsplash.com/photo-1642543348745-32dea7c50c65?q=80&w=2150&auto=format&fit=crop"
        />
        
        <AppleFeature 
          title="Тройная система камер"
          description="Впечатляющая возможность 48 Мп камеры — оптическое качество на уровне 5× с разрешением 12 Мп. Сверхширокоугольная камера идеальна для пейзажей и групповых снимков. А телефото-камера с 3-кратным оптическим зумом фокусируется на мелких деталях."
          imageUrl="https://images.unsplash.com/photo-1663761879632-a9fbbbcc39b1?q=80&w=1974&auto=format&fit=crop"
          reverse={true}
          darkMode={true}
        />
        
        <AppleFeature 
          title="Титановый дизайн"
          description="Прочный и легкий титан aerospace-класса делает iPhone 15 Pro самым легким Pro-смартфоном, который мы когда-либо создавали. Он устойчив к коррозии, впечатляюще стоек к царапинам и изумительно красив."
          imageUrl="https://images.unsplash.com/photo-1696786025346-da2c237cef09?q=80&w=1935&auto=format&fit=crop"
        />
        
        {/* CTA Section */}
        <section className="py-20 bg-apple-gray">
          <div className="max-w-3xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-semibold text-apple-dark mb-6 animate-fade-in">
              Откройте для себя iPhone
            </h2>
            <p className="text-lg text-apple-darkgray mb-10 animate-fade-in stagger-1">
              Выберите свою модель, конфигурацию, отделку и многое другое.
            </p>
            <Button 
              className="bg-apple-blue hover:bg-apple-blue/90 text-white rounded-full px-8 py-6 animate-fade-in stagger-2"
            >
              Купить сейчас
            </Button>
          </div>
        </section>
        
        {/* Footer */}
        <footer className="bg-apple-gray py-10 text-xs text-apple-darkgray">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="border-t border-gray-200 pt-8">
              <p className="text-center">
                Copyright © {new Date().getFullYear()} Apple Inc. Все права защищены.
              </p>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default Index;

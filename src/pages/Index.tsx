import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-950 text-gray-100">
      {/* Header */}
      <header className="bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img 
              src="https://cdn.poehali.dev/files/03524140-97d4-4cd7-aebd-470c58a0a7e7.jpg" 
              alt="BYM HOME Logo" 
              className="h-8 w-auto"
            />
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#about" className="text-gray-300 hover:text-white transition-colors">О бренде</a>
            <a href="#contacts" className="text-gray-300 hover:text-white transition-colors">Контакты</a>
            <Button className="bg-gray-700 hover:bg-gray-600 text-white">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </nav>
          <Button variant="ghost" className="md:hidden text-gray-300">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative bg-gray-900 text-white py-32 animate-fade-in overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black opacity-90"></div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30"
          style={{
            backgroundImage: `url('https://cdn.poehali.dev/files/a3b4ae8f-c0eb-4b62-9987-1424fc261edf.jpg')`
          }}
        ></div>
        <div className="container mx-auto px-4 text-center relative z-10">
          <h1 className="text-5xl md:text-7xl font-bold mb-6" style={{fontFamily: 'Montserrat'}}>
            Премиум шторы<br />
            <span className="text-gray-400">для ванной</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90 text-gray-300">
            Превратите ванную в стильное пространство с коллекцией штор BYM HOME
          </p>
          <div className="flex justify-center">
            <Button size="lg" className="bg-white hover:bg-gray-100 text-black px-8 py-3 text-lg hover-scale">
              <Icon name="MessageCircle" size={20} className="mr-2" />
              Связаться с нами
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Droplets" size={32} className="text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white" style={{fontFamily: 'Montserrat'}}>100% Водонепроницаемые</h3>
              <p className="text-gray-400">Качественные материалы, не пропускающие воду</p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Sparkles" size={32} className="text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white" style={{fontFamily: 'Montserrat'}}>Антибактериальное покрытие</h3>
              <p className="text-gray-400">Защита от плесени и бактерий</p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-gray-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Recycle" size={32} className="text-gray-300" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-white" style={{fontFamily: 'Montserrat'}}>Эко-материалы</h3>
              <p className="text-gray-400">Безопасные для здоровья и экологии</p>
            </div>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gradient-to-r from-gray-900 to-gray-800">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6 text-white" style={{fontFamily: 'Montserrat'}}>
                О бренде <span className="text-gray-400">BYM HOME</span>
              </h2>
              <p className="text-lg text-gray-400 mb-6">
                Мы создаем стильные и функциональные аксессуары для ванной комнаты уже более 10 лет. 
                Наша миссия — превратить повседневные процедуры в удовольствие.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-gray-500" />
                  <span className="text-gray-300">Премиум качество материалов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-gray-500" />
                  <span className="text-gray-300">Современный дизайн</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-gray-500" />
                  <span className="text-gray-300">Гарантия качества 2 года</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/files/a3b4ae8f-c0eb-4b62-9987-1424fc261edf.jpg" 
                alt="BYM HOME products"
                className="rounded-lg shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacts" className="py-20 bg-gray-950">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 text-white" style={{fontFamily: 'Montserrat'}}>
              <span className="text-gray-400">Свяжитесь</span> с нами
            </h2>
            <p className="text-xl text-gray-500">Мы ответим на любые вопросы о продукции</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <Icon name="Send" size={24} className="text-gray-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white" style={{fontFamily: 'Montserrat'}}>Telegram</h3>
                  <p className="text-gray-400">@BYM_HOME</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-gray-300" />
                </div>
                <div>
                  <h3 className="font-semibold text-white" style={{fontFamily: 'Montserrat'}}>Email</h3>
                  <p className="text-gray-400">bymhome@mail.ru</p>
                </div>
              </div>
            </div>
            
            <Card className="border-gray-800 bg-gray-900 shadow-lg">
              <CardHeader>
                <CardTitle className="text-white" style={{fontFamily: 'Montserrat'}}>Отправить сообщение</CardTitle>
                <CardDescription className="text-gray-400">Мы ответим в течение дня</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" />
                <Input type="tel" placeholder="Телефон" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" />
                <Input type="email" placeholder="Email" className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" />
                <Textarea placeholder="Сообщение" rows={4} className="bg-gray-800 border-gray-700 text-white placeholder:text-gray-500" />
                <Button className="w-full bg-gray-700 hover:bg-gray-600 text-white">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-4">
                <img 
                  src="https://cdn.poehali.dev/files/03524140-97d4-4cd7-aebd-470c58a0a7e7.jpg" 
                  alt="BYM HOME Logo" 
                  className="h-8 w-auto filter invert"
                />
              </div>
              <p className="text-gray-400">Стильные аксессуары для современной ванной комнаты</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4 text-white" style={{fontFamily: 'Montserrat'}}>Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Twitter" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-white">
                  <Icon name="Send" size={20} />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 BYM HOME. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
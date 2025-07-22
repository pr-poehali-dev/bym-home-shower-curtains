import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import Icon from "@/components/ui/icon";

const Index = () => {
  const products = [
    {
      id: 1,
      name: "Классическая белая штора",
      price: "1 299 ₽",
      image: "/img/0745c759-1866-4080-8bff-6e70c45ae530.jpg",
      description: "Водонепроницаемая штора из качественного PEVA",
      badge: "Хит продаж"
    },
    {
      id: 2,
      name: "Штора с коралловым принтом",
      price: "1 599 ₽",
      image: "/img/4dc4a9bb-8532-437b-8fbf-2089f4234ccb.jpg",
      description: "Стильный дизайн с антибактериальным покрытием",
      badge: "Новинка"
    },
    {
      id: 3,
      name: "Минималистичная голубая",
      price: "1 399 ₽",
      image: "/img/0745c759-1866-4080-8bff-6e70c45ae530.jpg",
      description: "Легко стирается, не выгорает на солнце",
      badge: "Эко-материал"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Icon name="Waves" size={32} className="text-[#4EQuois]" />
            <h1 className="text-2xl font-bold text-gray-800" style={{fontFamily: 'Montserrat'}}>BYM HOME</h1>
          </div>
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#catalog" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">Каталог</a>
            <a href="#about" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">О бренде</a>
            <a href="#contacts" className="text-gray-600 hover:text-[#FF6B6B] transition-colors">Контакты</a>
            <Button className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white">
              <Icon name="ShoppingCart" size={16} className="mr-2" />
              Корзина
            </Button>
          </nav>
          <Button variant="ghost" className="md:hidden">
            <Icon name="Menu" size={24} />
          </Button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#4EQuois] to-[#66D9EF] text-white py-20 animate-fade-in">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-6" style={{fontFamily: 'Montserrat'}}>
            Стильные шторы<br />
            <span className="text-[#FF6B6B]">для вашей ванной</span>
          </h1>
          <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto opacity-90">
            Превратите ванную в стильное пространство с коллекцией штор BYM HOME
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-[#FF6B6B] hover:bg-[#FF5252] text-white px-8 py-3 text-lg hover-scale">
              <Icon name="Eye" size={20} className="mr-2" />
              Смотреть каталог
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-[#4EQuois] px-8 py-3 text-lg">
              <Icon name="Play" size={20} className="mr-2" />
              Видео о бренде
            </Button>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-[#FF6B6B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Droplets" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{fontFamily: 'Montserrat'}}>100% Водонепроницаемые</h3>
              <p className="text-gray-600">Качественные материалы, не пропускающие воду</p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-[#4EQuois] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Sparkles" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{fontFamily: 'Montserrat'}}>Антибактериальное покрытие</h3>
              <p className="text-gray-600">Защита от плесени и бактерий</p>
            </div>
            <div className="text-center animate-fade-in">
              <div className="w-16 h-16 bg-[#FF6B6B] rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Recycle" size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2" style={{fontFamily: 'Montserrat'}}>Эко-материалы</h3>
              <p className="text-gray-600">Безопасные для здоровья и экологии</p>
            </div>
          </div>
        </div>
      </section>

      {/* Catalog */}
      <section id="catalog" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{fontFamily: 'Montserrat'}}>
              <span className="text-[#FF6B6B]">Популярные</span> шторы
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Выберите идеальную штору из нашей коллекции премиум качества
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <Card key={product.id} className="group hover-scale transition-all duration-300 hover:shadow-xl border-0 bg-white" style={{animationDelay: `${index * 0.1}s`}}>
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-[#FF6B6B] hover:bg-[#FF6B6B]">
                    {product.badge}
                  </Badge>
                </div>
                <CardHeader>
                  <CardTitle className="text-xl" style={{fontFamily: 'Montserrat'}}>{product.name}</CardTitle>
                  <CardDescription>{product.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold text-[#FF6B6B]" style={{fontFamily: 'Montserrat'}}>{product.price}</span>
                    <Button className="bg-[#4EQuois] hover:bg-[#3BA5C7] text-white">
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Button size="lg" variant="outline" className="border-[#FF6B6B] text-[#FF6B6B] hover:bg-[#FF6B6B] hover:text-white px-8">
              Смотреть весь каталог
              <Icon name="ArrowRight" size={20} className="ml-2" />
            </Button>
          </div>
        </div>
      </section>

      {/* About */}
      <section id="about" className="py-20 bg-gradient-to-r from-gray-50 to-white">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6" style={{fontFamily: 'Montserrat'}}>
                О бренде <span className="text-[#FF6B6B]">BYM HOME</span>
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы создаем стильные и функциональные аксессуары для ванной комнаты уже более 10 лет. 
                Наша миссия — превратить повседневные процедуры в удовольствие.
              </p>
              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-[#4EQuois]" />
                  <span className="text-gray-700">Премиум качество материалов</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-[#4EQuois]" />
                  <span className="text-gray-700">Современный дизайн</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Icon name="CheckCircle" size={24} className="text-[#4EQuois]" />
                  <span className="text-gray-700">Гарантия качества 2 года</span>
                </div>
              </div>
            </div>
            <div className="relative">
              <img 
                src="/img/0745c759-1866-4080-8bff-6e70c45ae530.jpg" 
                alt="BYM HOME products"
                className="rounded-lg shadow-2xl hover-scale"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacts" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4" style={{fontFamily: 'Montserrat'}}>
              <span className="text-[#4EQuois]">Свяжитесь</span> с нами
            </h2>
            <p className="text-xl text-gray-600">Мы ответим на любые вопросы о продукции</p>
          </div>
          
          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center">
                  <Icon name="Phone" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold" style={{fontFamily: 'Montserrat'}}>Телефон</h3>
                  <p className="text-gray-600">+7 (495) 123-45-67</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#4EQuois] rounded-full flex items-center justify-center">
                  <Icon name="Mail" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold" style={{fontFamily: 'Montserrat'}}>Email</h3>
                  <p className="text-gray-600">info@bymhome.ru</p>
                </div>
              </div>
              
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-[#FF6B6B] rounded-full flex items-center justify-center">
                  <Icon name="MapPin" size={24} className="text-white" />
                </div>
                <div>
                  <h3 className="font-semibold" style={{fontFamily: 'Montserrat'}}>Адрес</h3>
                  <p className="text-gray-600">Москва, ул. Примерная, 123</p>
                </div>
              </div>
            </div>
            
            <Card className="border-0 shadow-lg">
              <CardHeader>
                <CardTitle style={{fontFamily: 'Montserrat'}}>Отправить сообщение</CardTitle>
                <CardDescription>Мы перезвоним в течение часа</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <Input placeholder="Ваше имя" />
                <Input type="tel" placeholder="Телефон" />
                <Input type="email" placeholder="Email" />
                <Textarea placeholder="Сообщение" rows={4} />
                <Button className="w-full bg-[#FF6B6B] hover:bg-[#FF5252] text-white">
                  <Icon name="Send" size={16} className="mr-2" />
                  Отправить сообщение
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Icon name="Waves" size={32} className="text-[#4EQuois]" />
                <h3 className="text-2xl font-bold" style={{fontFamily: 'Montserrat'}}>BYM HOME</h3>
              </div>
              <p className="text-gray-400">Стильные аксессуары для современной ванной комнаты</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{fontFamily: 'Montserrat'}}>Каталог</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Шторы для ванной</a></li>
                <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Аксессуары</a></li>
                <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Новинки</a></li>
                <li><a href="#" className="hover:text-[#FF6B6B] transition-colors">Распродажа</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4" style={{fontFamily: 'Montserrat'}}>Социальные сети</h4>
              <div className="flex space-x-4">
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#4EQuois]">
                  <Icon name="Instagram" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#4EQuois]">
                  <Icon name="Facebook" size={20} />
                </Button>
                <Button variant="ghost" size="sm" className="text-gray-400 hover:text-[#4EQuois]">
                  <Icon name="Twitter" size={20} />
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
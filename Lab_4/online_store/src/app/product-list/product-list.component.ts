import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../models/product.model';

@Component({
  selector: 'app-product-list',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css'],
})
export class ProductListComponent {
  products: Product[] = [
    {
      id: 1,
      name: 'Касане Тето значок',
      description:
        'Касанэ Тэто (重音テト) — японская (а затем и английская) утау, которая изначально была создана фанатами как вокалоид-тролль. Её фамилия 重音 (Касанэ) буквально означает «тяжелый звук» или «перекрытый звук»; хотя эти интерпретации широко приняты среди фанатов,',
      price: 300,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h09/h4b/86550038970398.png?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/pd8/47355979.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p48/pe2/47355949.png?format=gallery-large',
        'https://resources.cdn-kaspi.kz/img/m/p/hd3/hba/86553728057374.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/kasane-teto-znachok-1-sht-121464496/?c=750000000',
    },
    {
      id: 2,
      name: 'Мягкая игрушка Почита из манги Человек Бензопила, 25 см',
      description:
        'Мягкая игрушка Почита — идеальный подарок для фанатов манги, который сочетает в себе мягкость и оригинальный дизайн. Эта игрушка станет отличным компаньоном для игр и уютных вечеров.',
      price: 3500,
      rating: 4.7,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h2c/h87/64704225181726.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/hcd/hf9/64704228425758.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/hc9/h9a/64704231637022.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/h2c/h87/64704225181726.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/igrushka-pochita-iz-mangi-chelovek-benzopila-oranzhevyi-106062415/?c=750000000',
    },
    {
      id: 3,
      name: 'Banpresto Фигурка Chainsaw Man Denji по мотивам аниме "Человек-бензопила"',
      description:
        'Фигурка Chainsaw Man Denji 15 см по мотивам аниме "Человек-бензопила".',
      price: 37699,
      rating: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pd0/p7f/84811473.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pb4/p7f/84811474.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p97/p7f/84811475.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pd0/p7f/84811473.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/banpresto-figurka-chainsaw-man-denji-po-motivam-anime-chelovek-benzopila-15-sm-1-sht-151641870/?c=750000000',
    },
    {
      id: 4,
      name: 'Галстук One2 вискоза черный',
      description:
        'Галстук ДжоДжо от бренда One2 - это стильный аксессуар, который идеально подходит для повседневного ношения.',
      price: 3500,
      rating: 4.9,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hae/h5c/68325013356574.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p36/p9e/14262551.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p1e/p46/14262304.jpg?format=preview-large',
        'https://resources.cdn-kaspi.kz/img/m/p/p22/pc3/89365396.jpeg?format=preview-large',
      ],
      link: 'https://kaspi.kz/shop/p/galstuk-one2-galstuk-dzhodzho-viskoza-chernyi-108621600/?c=750000000',
    },
    {
      id: 5,
      name: 'Декоративный светильник настольный Руна Безумный Азарт, разноцветный',
      description:
        'KAKEGURUI MASHO!',
      price: 7000,
      rating: 0,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p59/pcb/17912447.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p59/pcb/17912447.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p59/pcb/17912447.jpeg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p59/pcb/17912447.jpeg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/dekorativnyi-svetil-nik-runa-bezumnyi-azart-plastik-akril-132798705/?c=750000000',
    },
    {
      id: 6,
      name: 'Silent Hill 2 PS5 RUS SUB',
      description:
        'Легендарная серия игр в жанре психологического ужаса возвращается! Окунитесь в леденящую кровь атмосферу с современной графикой и пугающе реалистичными звуками.',
      price: 24481,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/p11/p84/2454843.jpeg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p7d/pba/23219002.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p61/pba/23219003.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p45/pba/23219004.png?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/silent-hill-2-ps5-rus-128354917/?c=750000000',
    },
    {
      id: 7,
      name: 'Наушники HYDRA Home Minor бежевый',
      description:
        'Представляем вам наушники HYDRA Minor — идеальный выбор для тех, кто ценит комфорт и высокое качество звука в любом месте и в любое время. Эти беспроводные наушники обеспечивают чистый звук и долгую работу без проводов.',
      price: 4990,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/pe0/p7f/46750474.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/p05/p7c/46750488.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/pb8/p78/46750497.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p05/p7c/46750488.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/naushniki-hydra-home-minor-bezhevyi-120724130/?c=750000000',
    },
    {
      id: 8,
      name: 'Салам надаел',
      description:
        'почему бро спит',
      price: 667000,
      rating: 4.9,
      image: 'https://azh.kz/images/crop.php?i=https%3A%2F%2Ff.azh.kz%2Fnews%2F124%2F610%2F17846985a743a8370.png&w=382',
      images: [
        'https://azh.kz/images/crop.php?i=https%3A%2F%2Ff.azh.kz%2Fnews%2F124%2F610%2F17846985a743a8370.png&w=382',
        'https://azh.kz/images/crop.php?i=https%3A%2F%2Ff.azh.kz%2Fnews%2F124%2F610%2F17846985a743a8370.png&w=382',
        'https://azh.kz/images/crop.php?i=https%3A%2F%2Ff.azh.kz%2Fnews%2F124%2F610%2F17846985a743a8370.png&w=382',
      ],
      link: 'https://kaspi.kz/shop/p/apple-macbook-air-13-2020-13-3-8-gb-ssd-256-gb-macos-mgn63ru-a-101182724/?c=750000000',
    },
    {
      id: 9,
      name: 'Sony PlayStation 5 Slim',
      description:
        'Компактная версия PS5 с SSD и поддержкой современных игр. Отличный вариант для домашней игровой зоны.',
      price: 307776,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/hf1/h03/84526695677982.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/pef/p29/78474502.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p0b/p2a/78474503.png?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p27/p2a/78474504.png?format=gallery-medium',
      ],
      link: 'http://kaspi.kz/shop/p/sony-playstation-5-slim-114696098/?c=750000000',
    },
    {
      id: 10,
      name: 'Пластинка Cigarettes After Sex',
      description:
        'Альбом Cigarettes After Sex — завораживающее музыкальное путешествие в мир нежных мелодий и глубоких текстов. Этот альбом, выпущенный в 2017 году, сочетает в себе аналоговое звучание и современные музыкальные тенденции.',
      price: 28999,
      rating: 5,
      image: 'https://resources.cdn-kaspi.kz/img/m/p/h9b/h62/69100706627614.jpg?format=gallery-medium',
      images: [
        'https://resources.cdn-kaspi.kz/img/m/p/h9b/h62/69100706627614.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7e/pec/78000977.jpg?format=gallery-medium',
        'https://resources.cdn-kaspi.kz/img/m/p/p7e/pec/78000977.jpg?format=gallery-medium',
      ],
      link: 'https://kaspi.kz/shop/p/cigarettes-after-sex-108931761/?c=750000000',
    },
  ];

  stars = Array.from({ length: 5 }, (_, i) => i + 1);

  isStarFilled(starIndex: number, rating: number): boolean {
    return rating >= starIndex;
  }

  shareWhatsApp(p: Product): void {
  const text = `Check out this product: ${p.link}`;
  const url = `https://wa.me/?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank', 'noopener');
}

shareTelegram(p: Product): void {
  const url =
    `https://t.me/share/url?url=${encodeURIComponent(p.link)}&text=${encodeURIComponent(p.name)}`;
  window.open(url, '_blank', 'noopener');
}

}

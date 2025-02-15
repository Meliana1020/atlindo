// import an img Hero
import Hero1 from '/images/img-hero/Hero1.png'
import Hero2 from '/images/img-hero/Hero2.png'
import Hero3 from '/images/img-hero/Hero3.png'
import Hero1Mobile from '/images/img-hero/mobile/Hero-mobile-1.png'
import Hero2Mobile from '/images/img-hero/mobile/Hero-mobile-2.png'
import Hero3Mobile from '/images/img-hero/mobile/Hero-mobile-3.png'

// import an img Project
import Permesinan from '/images/img-project/Permesinan.png'
import PanelListrik from '/images/img-project/PanelListrik.png'
import Contruction from '/images/img-project/Contruction.png'
import Fabrication from '/images/img-project/Fabrication.png'
import Furniture from '/images/img-project/Furniture.png'
import Renovasi from '/images/img-project/Renovasi.png'

// import an img product 
import Lampu from '/images/img-product/electrical/Lampu.png'
import Cctv from '/images/img-product/electrical/CCTV.png'
import AccessControl from '/images/img-product/electrical/Access-control.png'
import SarungTangan from '/images/img-product/consumable/sarung-tangan.png'
import MaskingLine from '/images/img-product/consumable/masking-line.png'

import Bearing from '/images/img-product/mechanical/Bearing.png'


// import an img Logo
import Yanmar from '/images/yanmar.png'
import Nippon from '/images/nippon.png'
import TjForgce from '/images/Tj-forge.jpeg'
import Inaco from '/images/Banner-INACO.png'
import Aruna from '/images/Aruna-Logo-Primary-Color_1.1.1.png'
import Antika from '/images/LogoAntika.png'
import Nissin from '/images/nissin.png'
import Daikin from '/images/Logo+Daikin-1920w.png'
import Mjm from '/images/Mjm.jpeg'
import Kopi from '/images/kopi.png'
import Dragon from '/images/Logo-Dragon-Pack.png'
import Piaggio from '/images/Piaggio-logo.svg.png'
import Plastic from '/images/Plastic_Omnium.svg.png'
import PrimaTopBoga from '/images/prima.png'
import PrimaFood from '/images/prima-food.png'
import Ssk from '/images/Ssk.png'
import GlobalDairi from '/images/GlobalDairi.png'
import Kawasaki from '/images/Kawasaki.jpg'




export const heroSection = [
    {
        img: Hero1,
        imgMobile: Hero1Mobile
    }, {
        img: Hero2,
        imgMobile: Hero2Mobile
    }, {
        img: Hero3,
        imgMobile: Hero3Mobile
    }
]

export const product = [
    {
        nameProduct: 'Consumable',
        deskripsion: `Dengan sigap kami kami memenuhi kebutuhan umum Anda seperti peralatan safety, spare part standard, perkakas tangan, comsumable product.`,
        img: [
            SarungTangan,
            MaskingLine,
            Hero1
        ]
    }
    ,
    {
        nameProduct: 'Mechanical',
        deskripsion: `Kami menyediakan barang logam dan non logam seperti besi, stainless steel, akrilik dan alat bantu mesin seperti tool set, gerinda, mesin bor, mesin las.`,
        img: [
            Bearing,
            Bearing,
            Bearing

        ]
    },
    {
        nameProduct: 'Electrical',
        deskripsion: `Kami menyediakan barang electrical seperti kabel, MCCB, MCB, Box panel dan Acessories Listrik.`,
        img: [
            Lampu,
            Cctv,
            AccessControl
        ]
    },
]

export const project = [
    {
        nameProduct: 'Permesinan',
        img: Permesinan
    }
    ,
    {
        nameProduct: 'Fabrikasi Logam',
        img: Fabrication
    },
    {
        nameProduct: 'Contrucsion',
        img: Contruction
    },
    {
        nameProduct: 'Renovasi',
        img: Renovasi
    },

    {
        nameProduct: 'Furniture',
        img: Furniture
    },
    {
        nameProduct: 'Panel Distrik',
        img: PanelListrik
    },
]


export const customer = [
    {
        img: Daikin
    }, {
        img: Nissin
    }, {
        img: Aruna
    }, {
        img: TjForgce
    }, {
        img: Antika
    }, {
        img: Inaco
    }, {
        img: Mjm
    }, {
        img: Yanmar
    }, {
        img: Kopi
    }, {
        img: Piaggio
    }, {
        img: Plastic
    }, {
        img: Ssk
    }, {
        img: Dragon
    }, {
        img: Kawasaki
    }, {
        img: Nippon
    }, {
        img: PrimaFood
    }, {
        img: PrimaTopBoga
    }, {
        img: GlobalDairi
    }
]

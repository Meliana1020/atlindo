// import an img Hero
import Hero1 from '../images/img-hero/Hero1.jpg'
import Hero2 from '../images/img-hero/Hero2.jpg'
import Hero3 from '../images/img-hero/Hero3.jpg'
import Hero1Mobile from '../images/img-hero/mobile/Hero-mobile-1.jpg'
import Hero2Mobile from '../images/img-hero/mobile/Hero-mobile-2.jpg'
import Hero3Mobile from '../images/img-hero/mobile/Hero-mobile-3.jpg'

// import an img Project
import Permesinan from '../images/img-project/Permesinan.jpg'
import PanelListrik from '../images/img-project/PanelListrik.jpg'
import Contruction from '../images/img-project/Contruction.jpg'
import Fabrication from '../images/img-project/Fabrication.jpg'
import Furniture from '../images/img-project/Furniture.jpg'
import Renovasi from '../images/img-project/Renovasi.jpg'

// import an img product 
import Lampu from '../images/img-product/electrical/Lampu.jpg'
import Cctv from '../images/img-product/electrical/CCTV.jpg'
import AccessControl from '../images/img-product/electrical/Access-control.jpg'
import LampuMobile from '../images/img-product/electrical/mobile/Lampu-mobile.jpg'
import CctvMobile from '../images/img-product/electrical/mobile/CCTV-mobile.jpg'
import AccessControlMobile from '../images/img-product/electrical/mobile/Access-control-mobile.jpg'
import SarungTangan from '../images/img-product/consumable/sarung-tangan.jpg'
import KunciInggris from '../images/img-product/consumable/Kunci-inggris.jpg'
import MaskingLine from '../images/img-product/consumable/masking-line.jpg'
import SarungTanganMobile from '../images/img-product/consumable/mobile/Sarung-tangan-mobile.jpg'
import MaskingLineMobile from '../images/img-product/consumable/mobile/Masking-line-mobile.jpg'
import KunciInggrisMobile from '../images/img-product/consumable/mobile/Kunci-inggris-mobile.jpg'
import Bearing from '../images/img-product/mechanical/Bearing.jpg'
import Pompa from '../images/img-product/mechanical/Pompa.jpg'
import KawatLas from '../images/img-product/mechanical/Kawat-las.jpg'
import BearingMobile from '../images/img-product/mechanical/mobile/Bearing-mobile.jpg'
import KawatLasMobile from '../images/img-product/mechanical/mobile/Kawat-las-mobile.jpg'
import PompaMobile from '../images/img-product/mechanical/mobile/Pompa-mobile.jpg'


// import an img Logo
import Yanmar from '../images/yanmar.png'
import Nippon from '../images/nippon.png'
import TjForgce from '../images/Tj-forge.jpeg'
import Inaco from '../images/Banner-INACO.png'
import Aruna from '../images/Aruna-Logo-Primary-Color_1.1.1.png'
import Antika from '../images/LogoAntika.png'
import Nissin from '../images/nissin.png'
import Daikin from '../images/Logo+Daikin-1920w.png'
import Mjm from '../images/Mjm.jpeg'
import Kopi from '../images/kopi.png'
import Dragon from '../images/Logo-Dragon-Pack.png'
import Piaggio from '../images/Piaggio-logo.svg.png'
import Plastic from '../images/Plastic_Omnium.svg.png'
import PrimaTopBoga from '../images/prima.png'
import PrimaFood from '../images/prima-food.png'
import Ssk from '../images/Ssk.png'
import GlobalDairi from '../images/GlobalDairi.png'
import Kawasaki from '../images/Kawasaki.jpg'




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
            KunciInggris
        ],
        imgMobile: [
            SarungTanganMobile,
            MaskingLineMobile,
            KunciInggrisMobile
        ]
    }
    ,
    {
        nameProduct: 'Mechanical',
        deskripsion: `Kami menyediakan barang logam dan non logam seperti besi, stainless steel, akrilik dan alat bantu mesin seperti tool set, gerinda, mesin bor, mesin las.`,
        img: [
            Bearing,
            KawatLas,
            Pompa
        ],
        imgMobile: [
            BearingMobile,
            KawatLasMobile,
            PompaMobile
        ]
    },
    {
        nameProduct: 'Electrical',
        deskripsion: `Kami menyediakan barang electrical seperti kabel, MCCB, MCB, Box panel dan Acessories Listrik.`,
        img: [
            Lampu,
            Cctv,
            AccessControl
        ],
        imgMobile: [
            LampuMobile,
            CctvMobile,
            AccessControlMobile
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
        nameProduct: 'Electrical',
        img: PanelListrik
    },
]


export const customer = [
    {
        img: Daikin,
        id: 'primafood'
    }, {
        img: Nissin,
        id: 'primafood'
    }, {
        img: Aruna,
        id: 'primafood'
    }, {
        img: TjForgce,
        id: 'primafood'
    }, {
        img: Antika,
        id: 'primafood'
    }, {
        img: Inaco,
        id: 'primafood'
    },
    {
        img: Mjm,
        id: 'primafood'
    },
    {
        img: Yanmar,
        id: 'primafood'
    }, {
        img: Kopi,
        id: 'primafood'
    }, {
        img: Dragon,
        id: 'primafood'
    }, {
        img: Kawasaki,
        id: 'primafood'
    },
    , {
        img: Piaggio,
        id: 'primafood'
    }, {
        img: Plastic,
        id: 'primafood'
    }, {
        img: PrimaFood,
        id: 'primafood'
    }, {
        img: PrimaTopBoga,
        id: 'primatopboga'
    }, {
        img: GlobalDairi,
        id: 'primafood'
    }, {
        img: Ssk,
        id: 'ssk'
    }, {
        img: Nippon,
        id: 'primafood'
    }
]

// import an img Hero
import Hero1 from '../images/img-hero/Hero1.png'
import Hero2 from '../images/img-hero/Hero2.png'
import Hero3 from '../images/img-hero/Hero3.png'
import Hero1Mobile from '../images/img-hero/mobile/Hero-mobile-1.png'
import Hero2Mobile from '../images/img-hero/mobile/Hero-mobile-2.png'
import Hero3Mobile from '../images/img-hero/mobile/Hero-mobile-3.png'

// import an img Project
import Permesinan from '../images/img-project/Permesinan.png'
import PanelListrik from '../images/img-project/PanelListrik.png'
import Contruction from '../images/img-project/Contruction.png'
import Fabrication from '../images/img-project/Fabrication.png'
import Furniture from '../images/img-project/Furniture.png'
import Renovasi from '../images/img-project/Renovasi.png'

// import an img product 
import Lampu from '../images/img-product/electrical/Lampu.png'
import Cctv from '../images/img-product/electrical/CCTV.png'
import AccessControl from '../images/img-product/electrical/Access-control.png'
import LampuMobile from '../images/img-product/electrical/mobile/Lampu-mobile.png'
import CctvMobile from '../images/img-product/electrical/mobile/CCTV-mobile.png'
import AccessControlMobile from '../images/img-product/electrical/mobile/Access-control-mobile.png'
import SarungTangan from '../images/img-product/consumable/sarung-tangan.png'
import KunciInggris from '../images/img-product/consumable/Kunci-inggris.png'
import MaskingLine from '../images/img-product/consumable/masking-line.png'
import SarungTanganMobile from '../images/img-product/consumable/mobile/Sarung-tangan-mobile.png'
import MaskingLineMobile from '../images/img-product/consumable/mobile/Masking-line-mobile.png'
import KunciInggrisMobile from '../images/img-product/consumable/mobile/Kunci-inggris-mobile.png'
import Bearing from '../images/img-product/mechanical/Bearing.png'
import BearingMobile from '../images/img-product/mechanical/mobile/Bearing-mobile.png'
import Pompa from '../images/img-product/mechanical/Pompa.png'
import KawatLas from '../images/img-product/mechanical/Kawat-las.png'
import KawatLasMobile from '../images/img-product/mechanical/mobile/Kawat las.png'
import PompaMobile from '../images/img-product/mechanical/mobile/Pompa-mobile.png'


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
        img: Piaggio,
        id: 'primafood'
    }, {
        img: Plastic,
        id: 'primafood'
    }, {
        img: GlobalDairi,
        id: 'primafood'
    }, {
        img: Dragon,
        id: 'primafood'
    }, {
        img: Kawasaki,
        id: 'primafood'
    }, {
        img: PrimaFood,
        id: 'primafood'
    }, {
        img: PrimaTopBoga,
        id: 'primatopboga'
    }, {
        img: Ssk,
        id: 'ssk'
    }, {
        img: Nippon,
        id: 'primafood'
    }
]

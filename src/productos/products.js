const products = [

    //calzado
    {
        id: 1,
        type: "calzado",
        title: "Zapatillas PowerCurt",
        text :"La Powercourt es una zapatilla de deporte esencial para la cancha que brinda un toque moderno a la construcción icónica de suela tradicional. Presentado en una selección de combinaciones de colores centrales inspiradas en el deporte, la parte superior está confeccionada en cuero brillante para una apariencia y sensación de primera calidad. Una pieza de talón suave introduce un contraste elegante, mientras que los recubrimientos de poliéster reciclado demuestran el compromiso de Lacoste con la sostenibilidad. Un cocodrilo verde característico y una marca en relieve completan el calzado, señalando décadas de calidad insuperable.",
        imageProduct : "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dwf1a26720/42SMA0021_237_02.jpg?imwidth=645&impolicy=product",
        price: 44.999
    },

    {
        id: 2,
        type: "calzado",
        title: "Zapatillas Bayliss",
        text :"Lacoste Bayliss son la elección perfecta para cualquier atuendo diario. Estos zapatos agregarán estilo a tu andar . Al caminar, trabajar o explorar nuevos lugares .El revestimiento está hecho de: Textil y ofrece comodidad completa con una suela de: Caucho.",
        imageProduct : "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw6948df7b/43CMA0016_092_02.jpg?imwidth=645&impolicy=product",
        price: 34.599
    },

    //camisa
    {
        id: 3,
        type: "camisa",
        title: "Camisa de Lino",
        text :"Camisa De Hombre De Lino con cuello en punta abotonado Regular fit. Bolsillo en el pecho con Cocodrilo verde bordado.Linen (100%)",
        imageProduct : "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw00377eff/CH4990_166_24.jpg?imwidth=645&impolicy=product",
        price: 121.999
    },

    {
        id: 4,
        type: "camisa",
        title: "Camisa Regular Fit",
        text :"Camisa de hombre regular fit en popelina de algodón con cuello Francés. Algodón (100%)",
        imageProduct: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw91b7d917/CH6511_001_24.jpg?imwidth=645&impolicy=product",
        price: 22.599,
    },

    //campera
    {
        id: 5,
        type: "campera",
        title: "Campera Authentics",
        text :"Campera tipo college con relleno, cierre y bolsillo en el frente. Mangas de simil cuero y puños tejidos en cuello, manga y cintura. Bordada en el delantero y en espalda. Cuerpo forrado al tono. Calce oversize, 100% poliester.",
        imageProduct : "https://herenciacustomgarage.com.ar/media/catalog/product/c/a/campera-label-authentics-varsity_1.jpg?optimize=medium&fit=bounds&height=1200&width=800",
        price: 85.499
    },

    {
        id: 6,
        type: "campera",
        title: "Campera en Gabardina",
        text :"Campera De Hombre En Gabardina De Algodón Ecológico Con Cierre Gabardina de algodón stretch ecológico y forro de malla Cuello clásico y cierre de cierre Puños y parte inferior de la prenda ajustables con tira de botones Cocodrilo verde bordado en el pecho Cocodrilo verde bordado en el pecho Main fabric: Cotton (97%), Elastane (3%) / Lining: Polyester (100%)",
        imageProduct : "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw79411884/BH2591_3JR_24.jpg?imwidth=645&impolicy=product",
        price: 135.999
    },

    //buzo
    {
        id: 7,
        type: "buzo",
        title: "Buzo",
        text :"Suave y urbana con cuello redondo, esta sudadera no compromete el estilo. Adornada con paneles de bloques de color y aplicaciones de bandas con letras de la marca en las mangas, esta pieza está confeccionada en una mezcla de algodón cepillado. Obtén el look total cuando agregas los pantalones de chándal a juego. Forro polar de mezcla de algodón cepillado Cuello redondo acanalado Ajuste clásico Paneles de patchwork en contraste y rayas elásticas en mangas Cocodrilo verde bordado en el pecho Algodón (85%), Poliéster (15%)",
        imageProduct: "https://imagesa1.lacoste.com/dw/image/v2/BCWL_PRD/on/demandware.static/-/Sites-master/default/dw9e64b156/SH2182_ZEL_24.jpg?imwidth=645&impolicy=product",
        price: 35.999
    },

    //perfume
    {
        id: 8,
        type: "perfume",
        title: "Dylan Blue Pour Homme",
        text :"Dylan Blue EDT es una intensa fragancia masculina que recoge los sensuales aromas del Mediterráneo. Una fragancia con intensas notasde ambrox y refrescantes toques de bergamota y pomelo. Las notas olfativas citricas y terrosas quedan envueltas por los aromas de la pimienta negra, la madera de papiro y el incienso.así como el almizcle mineral, el haba tonka y el azafrán.",
        imageProduct: "https://www.versace.com/dw/image/v2/ABAO_PRD/on/demandware.static/-/Sites-ver-master-catalog/default/dw57d0a042/original/90_R721008-R050MLS_RNUL_20_DylanBluePourHommeEDT50ml-DylanBluePourHomme-versace-online-store_4_9.jpg?sw=1200&sh=1200&sm=fit&sfrm=jpg",
        price: 38.799
    },

    {
        id: 9,
        type: "perfume",
        title: "Bad Boy CH Eau de toilette",
        text :"Carolina Herrera presenta un nuevo perfume masculino, innovador y explosivo: Bad Boy. Una fascinante fragancia que actualiza el mito del eterno rebelde, aquel que se atreve a romper las normas y a trazar su propio camino. BAD BOY es una oda a los hombres que luchan por sus principios y son fieles a su propia identidad. ",
        imageProduct: "https://media.vogue.mx/photos/62fbcfd567662c354fdc38bb/1:1/w_2667,h_2667,c_limit/slide_%20(3).jpg",
        price: 35.999
    },

   
]

export default products;
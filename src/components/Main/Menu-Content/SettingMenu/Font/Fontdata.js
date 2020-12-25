export const FONT_VARIANTS = [
  { value: "100", label: "Thin" },
  { value: "100italic", label: "Thin Italic" },
  { value: "200", label: "Extra Light" },
  { value: "200italic", label: "Extra Light Italic" },
  { value: "300", label: "Light" },
  { value: "300italic", label: "Light Italic" },
  { value: "400", label: "Regular" },
  { value: "400italic", label: "Regular Italic" },
  { value: "regular", label: "Regular" },
  { value: "italic", label: "Italic" },
  { value: "500", label: "Medium" },
  { value: "500italic", label: "Medium Italic" },
  { value: "600", label: "Semi Bold" },
  { value: "600italic", label: "Semi Bold Italic" },
  { value: "700", label: "Bold" },
  { value: "700italic", label: "Bold Italic" },
  { value: "800", label: "Extra Bold" },
  { value: "800italic", label: "Extra Bold Italic" },
  { value: "900", label: "Black" },
  { value: "900italic", label: "Black Italic" },
];

export const FONTS = [
  {
    family: "ABeeZee",
    variants: ["regular", "italic"],
  },
  {
    family: "Abel",
    variants: ["regular"],
  },
  {
    family: "Abhaya Libre",
    variants: ["regular", "500", "600", "700", "800"],
  },
  {
    family: "Abril Fatface",
    variants: ["regular"],
  },
  {
    family: "Aclonica",
    variants: ["regular"],
  },
  {
    family: "Acme",
    variants: ["regular"],
  },
  {
    family: "Actor",
    variants: ["regular"],
  },
  {
    family: "Adamina",
    variants: ["regular"],
  },
  {
    family: "Advent Pro",
    variants: ["100", "200", "300", "regular", "500", "600", "700"],
  },
  {
    family: "Aguafina Script",
    variants: ["regular"],
  },
  {
    family: "Akronim",
    variants: ["regular"],
  },
  {
    family: "Aladin",
    variants: ["regular"],
  },
  {
    family: "Alata",
    variants: ["regular"],
  },
  {
    family: "Alatsi",
    variants: ["regular"],
  },
  {
    family: "Aldrich",
    variants: ["regular"],
  },
  {
    family: "Alef",
    variants: ["regular", "700"],
  },
  {
    family: "Alegreya",
    variants: [
      "regular",
      "italic",
      "500",
      "500italic",
      "700",
      "700italic",
      "800",
      "800italic",
      "900",
      "900italic",
    ],
  },
  {
    family: "Alegreya SC",
    variants: [
      "regular",
      "italic",
      "500",
      "500italic",
      "700",
      "700italic",
      "800",
      "800italic",
      "900",
      "900italic",
    ],
  },
  {
    family: "Alegreya Sans",
    variants: [
      "100",
      "100italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "700",
      "700italic",
      "800",
      "800italic",
      "900",
      "900italic",
    ],
  },
  {
    family: "Alegreya Sans SC",
    variants: [
      "100",
      "100italic",
      "300",
      "300italic",
      "regular",
      "italic",
      "500",
      "500italic",
      "700",
      "700italic",
      "800",
      "800italic",
      "900",
      "900italic",
    ],
  },
  {
    family: "Aleo",
    variants: ["300", "300italic", "regular", "italic", "700", "700italic"],
  },
  {
    family: "Alex Brush",
    variants: ["regular"],
  },
  {
    family: "Alfa Slab One",
    variants: ["regular"],
  },
  {
    family: "Alice",
    variants: ["regular"],
  },
  {
    family: "Alike",
    variants: ["regular"],
  },
  {
    family: "Alike Angular",
    variants: ["regular"],
  },
  {
    family: "Allan",
    variants: ["regular", "700"],
  },
  {
    family: "Allerta",
    variants: ["regular"],
  },
  {
    family: "Allerta Stencil",
    variants: ["regular"],
  },
  {
    family: "Allura",
    variants: ["regular"],
  },
  {
    family: "Almarai",
    variants: ["300", "regular", "700", "800"],
  },
  {
    family: "Almendra",
    variants: ["regular", "italic", "700", "700italic"],
  },
  {
    family: "Almendra Display",
    variants: ["regular"],
  },
  {
    family: "Almendra SC",
    variants: ["regular"],
  },
  {
    family: "Amarante",
    variants: ["regular"],
  },
  {
    family: "Amaranth",
    variants: ["regular", "italic", "700", "700italic"],
  },
  {
    family: "Amatic SC",
    variants: ["regular", "700"],
  },
  {
    family: "Amethysta",
    variants: ["regular"],
  },
  {
    family: "Amiko",
    variants: ["regular", "600", "700"],
  },
  {
    family: "Amiri",
    variants: ["regular", "italic", "700", "700italic"],
  },
  {
    family: "Amita",
    variants: ["regular", "700"],
  },
  {
    family: "Anaheim",
    variants: ["regular"],
  },
  {
    family: "Andada",
    variants: ["regular"],
  },
  {
    family: "Andika",
    variants: ["regular"],
  },
];

export const Menudata = [
  {
    title: "HOME",
    url: "/",
    level: 0,
    color: {
      backgroundColor: "rgba(248, 249, 249, 1)",
      textColor: "rgba(15, 15, 15, 1)",
      backgroundHoverColor: "rgba(255, 255, 255, 1)",
      textHoverColor: "rgba(21, 21, 21, 1)",
    },
    icon: null,
  },
  {
    title: "GARDEN PAVING",
    url: null,
    icon: null,
    image: null,
    description: null,
    level: 0,
    color: {
      textColor: "rgba(29, 28, 28, 1)",
      backgroundColor: "rgba(248, 249, 249, 1)",
      textHoverColor: "rgba(25, 25, 25, 1)",
      backgroundHoverColor: "rgba(255, 255, 255, 1)",
    },
    submenu: {
      type: "dropdown",
      orientation: "vertical",
      alignment: "left",
      justifyContent: "left",
      items: [
        {
          title: "Outdoor Porcelain (20 mm)",
          level: 1,
          submenu: {
            type: "dropdown",
            orientation: "vertical",
            alignment: "left",
            justifyContent: "left",
            items: [],
          },
          url: "/collections/porcelain-tiles",
          icon: "chevron-right",
        },
        {
          title: "Sandstone Paving",
          submenu: {
            type: "dropdown",
            orientation: "vertical",
            alignment: "left",
            items: [],
          },
          level: 1,
          icon: "chevron-right",
          url: "/collections/sandstone-paving",
        },
        {
          title: "Natural Granite Paving",
          level: 1,
          submenu: {
            type: "dropdown",
            orientation: "vertical",
            alignment: "left",
            justifyContent: "left",
            items: [],
          },
          icon: "chevron-right",
          url: "/collections/granite-pavings",
        },
        {
          title: "XXL-King Size Slabs",
          url: "/collections/king-size-slabs",
          icon: "chevron-right",
          image: null,
          description: null,
          level: 1,
          submenu: {
            type: "dropdown",
            orientation: "vertical",
            alignment: "left",
            justifyContent: "left",
            items: [],
          },
          targetBlank: false,
        },
        {
          title: "Wood Effect Tiles",
          url: "/collections/wood-effect-paving",
          icon: "chevron-right",
          image: null,
          description: null,
          level: 1,
          submenu: {
            type: "dropdown",
            orientation: "vertical",
            alignment: "left",
            justifyContent: "left",
            items: [],
          },
          targetBlank: false,
        },
        {
          title: "Limestone Paving",
          url: "/collections/limestone-paving",
          icon: "chevron-right",
          image: null,
          description: null,
          level: 1,
          submenu: {
            type: "dropdown",
            orientation: "vertical",
            alignment: "left",
            justifyContent: "left",
            items: [],
          },
          active: false,
        },
        {
          title: "Bullnose Full Coping Steps",
          url: "/collections/bullnose-full-coping-steps",
          level: 1,
          submenu: {
            type: "dropdown",
            orientation: "vertical",
            alignment: "left",
            justifyContent: "left",
            items: [],
          },
          icon: "chevron-right",
        },
      ],
    },
  },
  {
    title: "DRIVEWAY",
    url: "/collections/driveway",
    level: 0,
    icon: null,
    submenu: { type: "aliexpress", alignment: "full", items: [] },
    color: {
      textColor: "rgba(17, 17, 17, 1)",
      backgroundColor: "rgba(248, 249, 249, 1)",
      textHoverColor: "rgba(15, 15, 15, 1)",
      backgroundHoverColor: "rgba(255, 255, 255, 1)",
    },
    image: null,
  },
  {
    title: "ADHESIVE & GROUT",
    url: "/collections/adhesive",
    level: 0,
    icon: null,
    submenu: { type: "aliexpress", alignment: "full", items: [] },
    color: {
      textColor: "rgba(17, 17, 17, 1)",
      backgroundColor: "rgba(248, 249, 249, 1)",
      textHoverColor: "rgba(5, 5, 5, 1)",
      backgroundHoverColor: "rgba(255, 255, 255, 1)",
    },
    image: null,
  },
  {
    title: "SPECIAL OFFERS",
    url: "/collections/clearance",
    icon: null,
    image: null,
    description: null,
    level: 0,
    color: {
      backgroundColor: "rgba(238, 29, 29, 1)",
      textColor: "rgba(23, 22, 22, 1)",
      textHoverColor: "rgba(21, 20, 20, 1)",
      backgroundHoverColor: "rgba(255, 255, 255, 1)",
    },
    submenu: {
      type: "dropdown",
      orientation: "vertical",
      alignment: "left",
      justifyContent: "left",
      items: [],
    },
    badge: { title: null, color: "#FFFFFF", backgroundColor: "#0693E3" },
  },
  {
    title: "COMPANY",
    url: null,
    icon: null,
    image: null,
    description: null,
    level: 0,
    color: {
      backgroundColor: "rgba(248, 249, 249, 1)",
      textColor: "rgba(19, 18, 18, 1)",
      textHoverColor: "rgba(29, 29, 29, 1)",
      backgroundHoverColor: "rgba(255, 255, 255, 1)",
    },
    submenu: {
      type: "dropdown",
      orientation: "vertical",
      alignment: "left",
      justifyContent: "left",
      items: [
        {
          title: "Contact Us",
          submenu: {
            type: "dropdown",
            orientation: "vertical",
            alignment: "left",
            items: [],
          },
          level: 1,
          url: "/pages/contact-us",
          icon: "chevron-right",
        },
        {
          title: "About Us",
          level: 1,
          submenu: {
            type: "dropdown",
            orientation: "vertical",
            alignment: "left",
            justifyContent: "left",
            items: [],
          },
          url: "/pages/about-us",
          icon: "chevron-right",
        },
        {
          title: "Delivery Information",
          level: 1,
          submenu: {
            type: "dropdown",
            orientation: "vertical",
            alignment: "left",
            justifyContent: "left",
            items: [],
          },
          url: "/pages/delivery-information",
          icon: "chevron-right",
        },
        {
          title: "Refund Policy",
          url: "/pages/refund-policy",
          level: 1,
          submenu: {
            type: "dropdown",
            orientation: "vertical",
            alignment: "left",
            justifyContent: "left",
            items: [],
          },
          icon: "chevron-right",
        },
        {
          title: "Terms and Conditions",
          url: "/pages/terms-and-conditions",
          level: 1,
          submenu: {
            type: "dropdown",
            orientation: "vertical",
            alignment: "left",
            justifyContent: "left",
            items: [],
          },
          icon: "chevron-right",
        },
        {
          title: "Privacy Policy",
          url: "/pages/privacy-policy",
          level: 1,
          submenu: {
            type: "dropdown",
            orientation: "vertical",
            alignment: "left",
            justifyContent: "left",
            items: [],
          },
          icon: "chevron-right",
        },
      ],
    },
  },
];

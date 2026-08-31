export type ProjectStatus = 'published' | 'draft';

export type Project = {
  id: string;
  slug: string;
  title: string;
  url: string;
  category: string;
  industries: string[];
  shortDescription: string;
  longDescription?: string;
  technologies: string[];
  services: string[];
  tags: string[];
  featured: boolean;
  order: number;
  status: ProjectStatus;
  accent: string;
  surface: string;
  challenge?: string;
  approach?: string;
  implementation?: string;
  learnings?: string;
};

export const projects: Project[] = [
  { id:'p01', slug:'my-name-rings', title:'My Name Rings', url:'https://www.mynamerings.com/', category:'Personalized Jewelry', industries:['Ecommerce','Fashion & Lifestyle'], shortDescription:'A personalized jewelry storefront built around product discovery and considered presentation.', technologies:[], services:[], tags:['jewelry','personalization','ecommerce'], featured:true, order:1, status:'published', accent:'#d9ff43', surface:'#aeb6a3' },
  { id:'p02', slug:'sole-parfum', title:'Sole Parfum', url:'https://soleparfum.myshopify.com/', category:'Premium Perfume Store', industries:['Ecommerce','Beauty'], shortDescription:'A premium fragrance shopping experience with a clear path from discovery to product.', technologies:['Shopify'], services:[], tags:['fragrance','beauty','shopify'], featured:true, order:2, status:'published', accent:'#ed6b4d', surface:'#d7bca8' },
  { id:'p03', slug:'byte-style-shop', title:'Byte Style Shop', url:'https://bytestyleshop.com/', category:'Gaming / Electronics / PC Ecommerce', industries:['Ecommerce','Technology'], shortDescription:'A characterful retail experience for gaming culture, electronics and PC products.', technologies:[], services:[], tags:['gaming','electronics','technology'], featured:true, order:3, status:'published', accent:'#7b72ff', surface:'#b6b2d4' },
  { id:'p04', slug:'soopa-pets', title:'Soopa Pets', url:'https://soopapets.com/', category:'Pet / Supplements', industries:['Ecommerce','Pet'], shortDescription:'A product-led pet supplement storefront balancing friendly branding with straightforward shopping.', technologies:[], services:[], tags:['pet','supplements','ecommerce'], featured:true, order:4, status:'published', accent:'#ff9b51', surface:'#c7b292' },
  { id:'p05', slug:'giant-meow', title:'Giant Meow', url:'https://www.giantmeow.com/en-hk', category:'Pet / Supplements', industries:['Ecommerce','Pet'], shortDescription:'An ecommerce experience for cat-focused products and supplements across a regional storefront.', technologies:[], services:[], tags:['pet','cat','supplements'], featured:false, order:5, status:'published', accent:'#ffcf4a', surface:'#b6c6c1' },
  { id:'p06', slug:'ht-goalkeeping', title:'HT Goalkeeping', url:'https://htgoalkeeping.com/', category:'Sports / Goalkeeping Gloves', industries:['Ecommerce','Sports'], shortDescription:'A focused sports retail experience for specialist goalkeeping equipment.', technologies:[], services:[], tags:['sports','goalkeeping','gloves'], featured:false, order:6, status:'published', accent:'#57d9a3', surface:'#819995' },
  { id:'p07', slug:'grasskey', title:'Grasskey', url:'https://grasskey.au/', category:'Restaurant / Food / Local Pickup', industries:['Food & Hospitality','Custom Web'], shortDescription:'A local food ordering experience connecting the menu, the kitchen and convenient pickup.', technologies:[], services:[], tags:['restaurant','food','local pickup'], featured:false, order:7, status:'published', accent:'#ff6f4e', surface:'#c8ad7f' },
  { id:'p08', slug:'alena-slack', title:'Alena Slack', url:'https://alenaslack.se/', category:'Paint Shop / Appointment', industries:['Ecommerce','Custom Web'], shortDescription:'A paint and appointment experience designed to make a considered service easier to explore.', technologies:[], services:[], tags:['paint','appointment','service'], featured:false, order:8, status:'published', accent:'#d3a8ed', surface:'#b8a9b6' },
  { id:'p09', slug:'nobl-travel', title:'Nobl Travel', url:'https://nobltravel.com/', category:'Bags / Luggage / Tote Bags', industries:['Ecommerce','Fashion & Lifestyle'], shortDescription:'A travel goods storefront shaped around bags, luggage and everyday carry products.', technologies:[], services:[], tags:['travel','bags','luggage'], featured:false, order:9, status:'published', accent:'#ffca5b', surface:'#a9a190' },
  { id:'p10', slug:'primal-power-nutrition', title:'Primal Power Nutrition', url:'https://primalpower-nutrition.com/', category:'Gym / Protein / Sports Nutrition', industries:['Ecommerce','Sports'], shortDescription:'A sports nutrition storefront supporting direct product comparison and confident selection.', technologies:[], services:[], tags:['nutrition','gym','protein'], featured:false, order:10, status:'published', accent:'#f56c4d', surface:'#9daaa0' },
];

export const getProject = (slug: string) => projects.find((project) => project.slug === slug);

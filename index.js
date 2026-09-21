const STORE={products:"tsp_products",orders:"tsp_orders",accounts:"tsp_accounts"};
const DEFAULT_PRODUCTS=[
 {id:1,name:"10mm Crush",price:4200,unit:"per ton",description:"Clean angular aggregate for concrete and general construction.",image:"https://images.unsplash.com/photo-1516939884455-1445c8652f83?auto=format&fit=crop&w=900&q=80"},
 {id:2,name:"20mm Crush",price:4000,unit:"per ton",description:"Strong coarse stone for foundations, roads, and slabs.",image:"https://images.unsplash.com/photo-1590486803833-1c5dc8ddd4c8?auto=format&fit=crop&w=900&q=80"},
 {id:3,name:"Fine Crush",price:3500,unit:"per ton",description:"Fine screened material for finishing and block work.",image:"https://images.unsplash.com/photo-1598902108854-10e335adac99?auto=format&fit=crop&w=900&q=80"},
 {id:4,name:"Building Sand",price:2800,unit:"per ton",description:"Washed, dependable sand for masonry and plastering.",image:"https://images.unsplash.com/photo-1504198453319-5ce911bafcde?auto=format&fit=crop&w=900&q=80"}
];
function read(key,fallback=[]){try{return JSON.parse(localStorage.getItem(key)||JSON.stringify(fallback))}catch{return fallback}}
function write(key,value){localStorage.setItem(key,JSON.stringify(value))}
function esc(value){return String(value??"").replace(/[&<>"']/g,char=>({"&":"&amp;","<":"&lt;",">":"&gt;","\"":"&quot;","'":"&#39;"}[char]))}
function money(value){return `Rs ${Number(value||0).toLocaleString()}`}
function materialImage(item){let name=String(item?.name||'').toLowerCase();if(item?.image)return item.image;if(name.includes('sand'))return 'building-sand.svg';if(name.includes('fine'))return 'fine-crush.svg';if(name.includes('20'))return 'crush-20mm.svg';return 'crush-10mm.svg'}
function products(){let list=read(STORE.products,null);if(!list){list=DEFAULT_PRODUCTS;write(STORE.products,list)}return list}
function currentAccount(){let id=localStorage.getItem("tsp_current_account");return read(STORE.accounts,[]).find(account=>account.id===id)}
function signOut(){localStorage.removeItem("tsp_current_account");location.reload()}

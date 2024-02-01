import { StatusBar } from 'expo-status-bar';

import { StyleSheet, Text, View, React, ScrollView, ScrollViewComponent} from 'react-native';
import NavBar from './components/NavBar'
import ItemCard from './components/ItemCard';
import Home from './pages/Home';
import { useState } from 'react';
import ItemDetails from './pages/ItemDetails';
import Panier from './pages/Panier';
import Success from './pages/Success';

export default function App() {
  //const [selectedDish, setSelectedDish] = React.useState()
  //useState('Home') pour définir Home comme page par défaut
  const [page, setPage] = useState('Home');
  const [idItemSelected, setItem] = useState(null);
  
  const [dishes, setDishes] = useState([ {
    id:1,
    title: "Myrtilles",
    desc: "125g de myrtilles fraîches",
    price: 4,
    allergène: 'aucun, juste du fruit',
    img:
      "https://imgs.search.brave.com/gqKmFeNlromKY85zu_PgJWookn9Yfxmfr-XuYDAk8Is/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9maWxl/cy5la21jZG4uY29t/LzcxOWRmYy9pbWFn/ZXMvbXlydGlsbGUt/YS1ncm9zLWZydWl0/cy00NDItcC5qcGc_/dz01NzAmaD05OTk5/JnY9Mjk0MjAyMS0x/NTI2MTA",
    selected:false,
      
  },
  {
    id:2,
    title: "Framboises",
    desc: "125g de framboises fraîches",
    price: 0.5,
    allergène: 'aucun, juste du fruit',
    img:
      "https://imgs.search.brave.com/zLzp-1BcLN6KwvfCxehf0Zo9arJT6R0veA7WRGxaChc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pb2Qu/a2VwbHJzdGF0aWMu/Y29tL2FwaS9hcl8x/LGNfY3JvcCxnX25v/cnRoL2NfZmlsbCxk/cHJfYXV0byxmX2F1/dG8scV83MCx3Xzc1/MC9tb25fbWFyY2hl/L0ZSQU1CT0lTRS5q/cGc",
      selected:false,
  },
  {
    id:3,
    title: "Fraises",
    desc: "250g de fraises fraîches",
    price: 4.2,
    allergy:"aucun, juste des fraises",
    img:
      "https://imgs.search.brave.com/2O0cIryZZ1kvxgVFf_YVD6xFF-iQs4ZkeqRiUk8zIvk/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cnVzdGljYS5mci9p/bWFnZXMvYW5hYmVs/bGUtMTMwMS1ydXN0/LWwzMDAtaDAuanBn/LndlYnA",
    selected:false,
  },
  {
    id:4,
    title: "Panna cota framboise",
    desc: "Panna cota au coulis de framboises",
    price: 2,
    allergy: 'gluten, lait',
    img:"https://imgs.search.brave.com/z4cVsnLoXu4nhWU0rJCHU4F7mi4k75BjblAbLBunurU/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/ZXBpY3VyaWVuLmJl/L21hZ2F6aW5lLzAw/LWltZy1lcGljdXJp/ZW4vcmVjZXR0ZXMt/dzgwMC9wYW5uYS1j/b3R0YS1jb3VsaXMt/ZnJhbWJvaXNlLmpw/Zw",
    selected:false,
  },
  {
    id:5,
    title: "Tarte au fraises",
    desc: "tarte fraises et crème patissière",
    price: 2.5,
    allergy: 'gluten, lait, oeufs',
    img:"https://imgs.search.brave.com/xy7DtdspEzXT_9lyCZV3VJbUA1AaQHqooVv4X3ReENc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9sYWN1/aXNpbmVkZWdlcmFs/ZGluZS5mci93cC1j/b250ZW50L3VwbG9h/ZHMvMjAyMS8wNi91/bmJlbmFubnQtMDM1/NDEtMi02ODN4MTAy/NC5qcGc",
    selected:false,
  },
  {
    id:6,
    title: "Tarte au myrtilles",
    desc: "tarte myrtilles, crème d'amande",
    price: 2.5,
    allergy: 'oeuf, amande, lait, gluten',
    img:"https://imgs.search.brave.com/t-w8dLtqKhMv_hzqIPjVzLzl-gxIm6FighVQzyySICY/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/dW5qb3VydW5lcmVj/ZXR0ZS5mci9pbWFn/ZXMvdGFydGVsZXR0/ZXMtYXV4LW15cnRp/bGxlcy53ZWJw",
    selected:false,
  },{
    id:7,
    title: "Cookie framboise pistache",
    desc: "grand cookie aux éclats de pistache et framboise",
    price: 1.5,
    allergy: 'gluten, oeuf, soja',
    img:"https://imgs.search.brave.com/r2faDqfWTW9Wdm6xywX2Sd3lagoHGvoarPyfcy_5lIc/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pbWct/Z2xvYmFsLmNwY2Ru/LmNvbS9yZWNpcGVz/LzUzNzk2MTkyMGIw/NmM0ODEvNjgweDQ4/MmNxNzAvY29va2ll/cy1wcmFsaW5lLXBp/c3RhY2hlLWZyYW1i/b2lzZS1jaG9jb2xh/dC1ibGFuYy1waG90/by1wcmluY2lwYWxl/LWRlLWxhLXJlY2V0/dGUuanBn",
    selected:false,
  },
  {
    id:8,
    title: "Muffin Myrtille Citron",
    desc: "Muffin au citron garni de myrtilles",
    price: 2,
    allergy: 'gluten, oeuf',
    img:"https://imgs.search.brave.com/qCL2e1ZEl4zA-AFJXWL7gIhvVzPhXJWP40KIJ_8zW88/rs:fit:860:0:0/g:ce/aHR0cHM6Ly93d3cu/aWxvdmVjYWtlcy5m/ci93cC1jb250ZW50/L3VwbG9hZHMvMjAx/NC8wNi9tdWZmaW5z/LW15cnRpbGxlLXN0/YXJidWNrcy1jcnVt/YmxlLmpwZw",
    selected:false,
  },
  {
    id:9,
    title: "Yaourt au mûres",
    desc: "Yaourt à la confiture de mûres",
    price: 1.5,
    allergy: 'lait',
    img:"https://imgs.search.brave.com/G4ZOxmKeSjAYFHBtCB4d64aPGRT-7ZiPjxFM14KRlxA/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWct/Z2xvYmFsLmNwY2Ru/LmNvbS9yZWNpcGVz/L2YzZGJmMmU5ODYw/NDY2OTkvNjgweDQ4/MmNxNzAveWFvdXJ0/cy1tYWlzb24tYS1s/YS1tdXJlLXBob3Rv/LXByaW5jaXBhbGUt/ZGUtbGEtcmVjZXR0/ZS5qcGc",
    selected:false,
  },

  {
    id:10,
    title: "Yaourt au framboises",
    desc: "Yaourt à la confiture de framboises",
    price: 1.5,
    allergy: 'lait',
    img:"https://imgs.search.brave.com/xrnqca9aMoTCcBvapT48J1tu8CyE5SZjUx4UTYrgcLo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/cmVjZXR0ZXNtYW5p/YS5jb20vaW1hZ2Vz/L3JlY2lwZS9yZWNl/dHRlMzYwLzIwMjEv/MTAvcmVjZXR0ZTM2/MC1kZXNzZXJ0LWZy/YW1ib2lzZXMtZXQt/eWFvdXJ0LWF1LXRo/ZXJtb21peC1yZWNl/dHRlLXRoZXJtb21p/eC1mYWNpbGUuanBn",
    selected:false,
  },
]);

  function change(id){
      setDishes(
        [...dishes.map(dish=>{
          if (dish.id != id){
            return dish
          }else{
            return {...dish, selected:!dish.selected}
          }
        })

        ]
      )
  }




//console.log(page);
  return (
    <ScrollView style={{width:'100%', height:'100%', }}>
      <NavBar panier= {dishes.filter(dish => {return dish.selected}).length} page={page} setPage={setPage} setItem={setItem} ></NavBar> 
         
      {
        page=='Home'&& idItemSelected==null && <Home dishes={dishes} change={change} page={page} setPage={setPage} setItem={setItem}/>
      }
      {
        idItemSelected!=null &&<ItemDetails item={dishes.find(item=>idItemSelected==item.id)} change={change} page={page} setItem={setItem} />
      }
      {
        page=='Panier' && idItemSelected==null && <Panier dishes={dishes} change={change} page={page} setPage={setPage}  setItem={setItem} />
      }
      {
        page=='Success' && idItemSelected==null && <Success page={page} setPage={setPage} setItem={setItem} dishes={dishes} />
      }

    </ScrollView>
  );
}

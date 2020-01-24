import React from 'react'
import Market from './components/Yandex/Market';

export default function App() {
    const markets = [
        {id: 2002, title: 'Ирригатор B.Well WI-911', imgUrl: 'https://avatars.mds.yandex.net/get-mpic/1926093/img_id8929824454640850899.jpeg/x166_trim', price: 922, priceDirection: 1270},
        {id: 1999, title: 'Расческа для бороды Borodist кленовая', imgUrl: 'https://avatars.mds.yandex.net/get-mpic/1545401/img_id8012300520411194688.png/x166_trim', price: 350},
        {id: 1962, title: 'Ирригатор B.Well WI-911 с увеличенной емкостью для воды', imgUrl: 'https://avatars.mds.yandex.net/get-mpic/2017233/img_id2876123970420993573.jpeg/x166_trim', price:2689},
        {id: 1981, title: 'Конструктор LEGO Hidden Side', imgUrl: 'https://avatars.mds.yandex.net/get-mpic/1525355/img_id2857087755165942916.jpeg/x166_trim', price: 5750, priceDirection: 5966}
    ];

return (
   <div className="divv">      
       <div className="irrigator"><Market id={markets[0].id} title={markets[0].title} imgUrl={markets[0].imgUrl} price={markets[0].price} priceDirection={markets[0].priceDirection} /></div>
       <div className="irrigator"><Market id={markets[1].id} title={markets[1].title} imgUrl={markets[1].imgUrl} price={markets[1].price} /> </div>
       <div className="irrigator"><Market id={markets[2].id} title={markets[2].title} imgUrl={markets[2].imgUrl} price={markets[2].price} /> </div>
       <div className="irrigator"><Market id={markets[3].id} title={markets[3].title} imgUrl={markets[3].imgUrl} price={markets[3].price} priceDirection={markets[3].priceDirection} /> </div>
    </div>
    
)

}

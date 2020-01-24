import React from 'react'
import Purchase from './components/Yandex/Purchase';

export default function App() {
    const purchases = [
        {id: 2002, namePurchase: 'Ирригатор B.Well WI-911', imgUrl: 'https://avatars.mds.yandex.net/get-mpic/1926093/img_id8929824454640850899.jpeg/x166_trim', price: 922, firstPrice: 1270},
        {id: 1999, namePurchase: 'Расческа для бороды Borodist кленовая', imgUrl: 'https://avatars.mds.yandex.net/get-mpic/1545401/img_id8012300520411194688.png/x166_trim', price: 350},
        {id: 1962, namePurchase: 'Ирригатор B.Well WI-911 с увеличенной емкостью для воды', imgUrl: 'https://avatars.mds.yandex.net/get-mpic/2017233/img_id2876123970420993573.jpeg/x166_trim', price:2689},
        {id: 1981, namePurchase: 'Конструктор LEGO Hidden Side', imgUrl: 'https://avatars.mds.yandex.net/get-mpic/1525355/img_id2857087755165942916.jpeg/x166_trim', price: 5750, firstPrice: 5966}
    ];

return (
   <div className="divv">      
       <div className="irrigator"><Purchase id={purchases[0].id} namePurchase={purchases[0].namePurchase} imgUrl={purchases[0].imgUrl} price={purchases[0].price} firstPrice={purchases[0].firstPrice} /></div>
       <div className="irrigator"><Purchase id={purchases[1].id} namePurchase={purchases[1].namePurchase} imgUrl={purchases[1].imgUrl} price={purchases[1].price} /> </div>
       <div className="irrigator"><Purchase id={purchases[2].id} namePurchase={purchases[2].namePurchase} imgUrl={purchases[2].imgUrl} price={purchases[2].price} /> </div>
       <div className="irrigator"><Purchase id={purchases[3].id} namePurchase={purchases[3].namePurchase} imgUrl={purchases[3].imgUrl} price={purchases[3].price} firstPrice={purchases[3].firstPrice} /> </div>
    </div>
    
)

}

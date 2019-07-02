function shop () {
    let goods_name = document.querySelector('#goods_name');
    let goods_quantity = document.querySelector('#goods_quantity');
    let price = document.querySelector('#price');
    let addbutton = document.querySelector('#addbutton');
    let goods_name_buy = document.querySelector('#goods_name_buy');
    let goods_quantity_buy = document.querySelector('#goods_quantity_buy');
    let price_buy = document.querySelector('#price_buy');
    let addbutton_buy = document.querySelector('#addbutton_buy');
    let revenue = document.querySelector('#revenue');
    let price2 = null;
    let goods_quantity_buy_data = null;

    //store
    let store = [];
    let goods_store = [];
    goods_name.addEventListener('change', function () {
        let goods_name_data = goods_name.value;
        goods_store.push(goods_name_data);
    });

    goods_quantity.addEventListener('change', function () {
        let goods_quantity_data = Number(goods_quantity.value);
        goods_store.push(goods_quantity_data);
    });
    price.addEventListener('change', function () {
        let price_data = Number(price.value);
        goods_store.push(price_data);
    });
    addbutton.addEventListener('click', function () {
        store.push(goods_store);

        console.log(store);
    });

    //buying log
    let buying_log = [];
    let buying_goods = [];

    goods_name_buy.addEventListener('change', function () {
        let goods_name_buy_data = goods_name_buy.value;
        buying_goods.push(goods_name_buy_data);
        for (let i = 0; i< store.length; i++) {
            let goods_store_data = store[i];

            for (let j = 0; j< goods_store_data.length; j++) {
                let goods_store_data_kinds = goods_store_data[j];
                if (goods_store_data_kinds == goods_name_buy_data) {

                    price_buy.value = goods_store_data[2];
                    price2 = goods_store_data[2];

                }
            }
        }

    });

    goods_quantity_buy.addEventListener('change', function () {
        goods_quantity_buy_data = Number(goods_quantity_buy.value);
        buying_goods.push(goods_quantity_buy_data);
    });

    addbutton_buy.addEventListener('click', function () {
        buying_log.push(buying_goods);

        let revenue2 = price2 * goods_quantity_buy_data;
        revenue.value = revenue2;

    });

}

shop();
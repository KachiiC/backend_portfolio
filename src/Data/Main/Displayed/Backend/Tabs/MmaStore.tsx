import { KachiisRest } from "Tools/ApiTools"

export const MmaStoreEndpoint = [
    {
        title: "MMA Store",
        url: KachiisRest("backend", "mma/store")
    },
    {
        title: "Featured MMA Store Item",
        url: KachiisRest("backend", "mma/featured=item")
    },
] 

export const MmaStoreExampleData = `
    {
        "name": "Venum Rafter Sweatshirt – Dark Heather Grey",
        "price": "64.99",
        "product_thumbnail": "https://uk.venum.com/media/catalog/product/cache/0369c264f0778acc1303a2e198b9b9a3/7/6/7634ea96bae9d0f2696f852f8f8107c38d792c16_SWEAT_RAFTER_BLACK_GREY_02.jpg",
        "product_link": "https://uk.venum.com/gb/catalog/product/view/id/46426/category/2324/"
    }
`
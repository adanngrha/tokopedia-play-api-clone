const { v4: uuidv4 } = require('uuid');

exports.seedProducts = [
    {
        _id: `product-${uuidv4()}`,
        video_id: 'video-RlzJ6hbsaQo',
        title: 'Product 1',
        price: 10000,
        url_image: 'https://picsum.photos/200/300',
        url_product: 'https://tokopedia.link/NzLPtmQCGBb',
    },
    {
        _id: `product-${uuidv4()}`,
        video_id: 'video-RlzJ6hbsaQo',
        title: 'Product 2',
        price: 20000,
        url_image: 'https://picsum.photos/200/300',
        url_product: 'https://tokopedia.link/NzLPtmQCGBb',
    },
    {
        _id: `product-${uuidv4()}`,
        video_id: 'video-RlzJ6hbsaQo',
        title: 'Product 3',
        price: 30000,
        url_image: 'https://picsum.photos/200/300',
        url_product: 'https://tokopedia.link/NzLPtmQCGBb',
    },
    {
        _id: `product-${uuidv4()}`,
        video_id: 'video-6Q5xqNkCk7w',
        title: 'Product 4',
        price: 40000,
        url_image: 'https://picsum.photos/200/300',
        url_product: 'https://tokopedia.link/NzLPtmQCGBb',
    },
    {
        _id: `product-${uuidv4()}`,
        video_id: 'video-6Q5xqNkCk7w',
        title: 'Product 5',
        price: 50000,
        url_image: 'https://picsum.photos/200/300',
        url_product: 'https://tokopedia.link/NzLPtmQCGBb',
    },
];
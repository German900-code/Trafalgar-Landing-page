import '../sass/style.scss';

import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


document.addEventListener('DOMContentLoaded', () => {
    new Swiper('.swiper', {
        modules: [Navigation, Pagination],
        pagination: {
            el: '.swiper-pagination',
        },
        navigation: {
            nextEl: '.custom-next',
            prevEl: '.custom-prev',
        },
    });
});



// new Swiper('.swiper', {
//     modules: [Navigation, Pagination],
//     // loop: true,
//     pagination: {
//         el: '.swiper-pagination',
//     },
//     navigation: {
//         nextEl: '.custom-next',
//         prevEl: '.custom-prev',
//     },
// });


import React from 'react'

    const skillArray = [
        ["Javascript", 50, <svg xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 0 448 512"><path d="M0 32v448h448V32H0zm243.8 349.4c0 43.6-25.6 63.5-62.9 63.5-33.7 0-53.2-17.4-63.2-38.5l34.3-20.7c6.6 11.7 12.6 21.6 27.1 21.6 13.8 0 22.6-5.4 22.6-26.5V237.7h42.1v143.7zm99.6 63.5c-39.1 0-64.4-18.6-76.7-43l34.3-19.8c9 14.7 20.8 25.6 41.5 25.6 17.4 0 28.6-8.7 28.6-20.8 0-14.4-11.4-19.5-30.7-28l-10.5-4.5c-30.4-12.9-50.5-29.2-50.5-63.5 0-31.6 24.1-55.6 61.6-55.6 26.8 0 46 9.3 59.8 33.7L368 290c-7.2-12.9-15-18-27.1-18-12.3 0-20.1 7.8-20.1 18 0 12.6 7.8 17.7 25.9 25.6l10.5 4.5c35.8 15.3 55.9 31 55.9 66.2 0 37.8-29.8 58.6-69.7 58.6z"/></svg>],
        ["React", 50, <svg xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 0 512 512"><path d="M418.2 177.2c-5.4-1.8-10.8-3.5-16.2-5.1.9-3.7 1.7-7.4 2.5-11.1 12.3-59.6 4.2-107.5-23.1-123.3-26.3-15.1-69.2.6-112.6 38.4-4.3 3.7-8.5 7.6-12.5 11.5-2.7-2.6-5.5-5.2-8.3-7.7-45.5-40.4-91.1-57.4-118.4-41.5-26.2 15.2-34 60.3-23 116.7 1.1 5.6 2.3 11.1 3.7 16.7-6.4 1.8-12.7 3.8-18.6 5.9C38.3 196.2 0 225.4 0 255.6c0 31.2 40.8 62.5 96.3 81.5 4.5 1.5 9 3 13.6 4.3-1.5 6-2.8 11.9-4 18-10.5 55.5-2.3 99.5 23.9 114.6 27 15.6 72.4-.4 116.6-39.1 3.5-3.1 7-6.3 10.5-9.7 4.4 4.3 9 8.4 13.6 12.4 42.8 36.8 85.1 51.7 111.2 36.6 27-15.6 35.8-62.9
         24.4-120.5-.9-4.4-1.9-8.9-3-13.5 3.2-.9 6.3-1.9 9.4-2.9 57.7-19.1 99.5-50 99.5-81.7 0-30.3-39.4-59.7-93.8-78.4zM282.9 92.3c37.2-32.4 71.9-45.1 87.7-36 16.9 9.7 23.4 48.9 12.8 100.4-.7 3.4-1.4 6.7-2.3 10-22.2-5-44.7-8.6-67.3-10.6-13-18.6-27.2-36.4-42.6-53.1 3.9-3.7 7.7-7.2 11.7-10.7zM167.2 307.5c5.1 8.7 10.3 17.4 15.8 25.9-15.6-1.7-31.1-4.2-46.4-7.5 4.4-14.4 9.9-29.3 16.3-44.5 4.6 8.8 9.3 17.5 14.3 26.1zm-30.3-120.3c14.4-3.2 29.7-5.8 45.6-7.8-5.3 8.3-10.5 16.8-15.4 25.4-4.9 8.5-9.7 17.2-14.2 26-6.3-14.9-11.6-29.5-16-43.6zm27.4 68.9c6.6-13.8 13.8-27.3 21.4-40.6s15.8-26.2 24.4-38.9c15-1.1 30.3-1.7
         45.9-1.7s31 .6 45.9 1.7c8.5 12.6 16.6 25.5 24.3 38.7s14.9 26.7 21.7 40.4c-6.7 13.8-13.9 27.4-21.6 40.8-7.6 13.3-15.7 26.2-24.2 39-14.9 1.1-30.4 1.6-46.1 1.6s-30.9-.5-45.6-1.4c-8.7-12.7-16.9-25.7-24.6-39s-14.8-26.8-21.5-40.6zm180.6 51.2c5.1-8.8 9.9-17.7 14.6-26.7 6.4 14.5 12 29.2 16.9 44.3-15.5 3.5-31.2 6.2-47 8 5.4-8.4 10.5-17 15.5-25.6zm14.4-76.5c-4.7-8.8-9.5-17.6-14.5-26.2-4.9-8.5-10-16.9-15.3-25.2 16.1 2 31.5 4.7 45.9 8-4.6 14.8-10 29.2-16.1 43.4zM256.2 118.3c10.5 11.4 20.4 23.4 29.6 35.8-19.8-.9-39.7-.9-59.5 0 9.8-12.9 19.9-24.9 29.9-35.8zM140.2 57c16.8-9.8 54.1 4.2 93.4 39 2.5 2.2 5 4.6 7.6 7-15.5 16.7-29.8 34.5-42.9 53.1-22.6 2-45 5.5-67.2 10.4-1.3-5.1-2.4-10.3-3.5-15.5-9.4-48.4-3.2-84.9 12.6-94zm-24.5 263.6c-4.2-1.2-8.3-2.5-12.4-3.9-21.3-6.7-45.5-17.3-63-31.2-10.1-7-16.9-17.8-18.8-29.9 0-18.3 31.6-41.7 77.2-57.6 5.7-2 11.5-3.8 17.3-5.5 6.8 21.7 15 43 24.5 63.6-9.6 20.9-17.9 42.5-24.8 64.5zm116.6 98c-16.5 15.1-35.6 27.1-56.4 35.3-11.1 5.3-23.9 5.8-35.3 1.3-15.9-9.2-22.5-44.5-13.5-92 1.1-5.6 2.3-11.2 3.7-16.7 22.4 4.8 45 8.1 67.9 9.8 13.2 18.7 27.7 36.6 43.2 53.4-3.2 3.1-6.4 6.1-9.6 8.9zm24.5-24.3c-10.2-11-20.4-23.2-30.3-36.3 9.6.4 19.5.6 29.5.6 10.3 0 20.4-.2 30.4-.7-9.2 12.7-19.1 24.8-29.6 36.4zm130.7 30c-.9 12.2-6.9 23.6-16.5 31.3-15.9 9.2-49.8-2.8-86.4-34.2-4.2-3.6-8.4-7.5-12.7-11.5 15.3-16.9 29.4-34.8 42.2-53.6 22.9-1.9 45.7-5.4 68.2-10.5 1 4.1 1.9 8.2 2.7 12.2 4.9 21.6 5.7 44.1 2.5 66.3zm18.2-107.5c-2.8.9-5.6 1.8-8.5 2.6-7-21.8-15.6-43.1-25.5-63.8 9.6-20.4 17.7-41.4 24.5-62.9 5.2 1.5 10.2 3.1 15 4.7 46.6 16 79.3 39.8 79.3 58 0 19.6-34.9 44.9-84.8 61.4zm-149.7-15c25.3 0 45.8-20.5 45.8-45.8s-20.5-45.8-45.8-45.8c-25.3 0-45.8 20.5-45.8 45.8s20.5 45.8 45.8 45.8z"/></svg>],
        ["CSS", 70,<svg xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L192 480l157.1-52.2L384 32H0zm313.1 80l-4.8 47.3L193 208.6l-.3.1h111.5l-12.8 146.6-98.2 28.7-98.8-29.2-6.4-73.9h48.9l3.2 38.3 52.6 13.3 54.7-15.4 3.7-61.6-166.3-.5v-.1l-.2.1-3.6-46.3L193.1 162l6.5-2.7H76.7L70.9 112h242.2z"/></svg>],
        ["HTML", 70, <svg xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 0 384 512"><path d="M0 32l34.9 395.8L191.5 480l157.6-52.2L384 32H0zm308.2 127.9H124.4l4.1 49.4h175.6l-13.6 148.4-97.9 27v.3h-1.1l-98.7-27.3-6-75.8h47.7L138 320l53.5 14.5 53.7-14.5 6-62.2H84.3L71.5 112.2h241.1l-4.4 47.7z"/></svg>],
        ["C#", 60, <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 50 50">
        <path d="M 25 2 C 24.285156 2 23.570313 2.179688 22.933594 2.539063 L 6.089844 12.003906 C 4.800781 12.726563 4 14.082031 4 15.535156 L 4 34.464844 C 4 35.917969 4.800781 37.273438 6.089844 37.996094 L 22.933594 47.460938 C 23.570313 47.820313 24.285156 48 25 48 C 25.714844 48 26.429688 47.820313 27.066406 47.460938 L 43.910156 38 C 45.199219 37.273438 46 35.917969 46 34.464844 L 46 15.535156 C 46 14.082031 45.199219 12.726563 43.910156 12.003906 L 27.066406 2.539063 C 26.429688 2.179688 25.714844 2 25 2 Z M 25 13 C 28.78125 13 32.277344 14.753906 34.542969 17.738281 L 30.160156 20.277344 C 28.84375 18.835938 26.972656 18 25 18 C 21.140625 18 18 21.140625 18 25 C 18 28.859375 21.140625 32 25 32 C 26.972656 32 28.84375 31.164063 30.160156 29.722656 L 34.542969 32.261719 C 32.277344 35.246094 28.78125 37 25 37 C 18.382813 37 13 31.617188 13 25 C 13 18.382813 18.382813 13 25 13 Z M 35 20 L 37 20 L 37 22 L 39 22 L 39 20 L 41 20 L 41 22 L 43 22 L 43 24 L 41 24 L 41 26 L 43 26 L 43 28 L 41 28 L 41 30 L 39 30 L 39 28 L 37 28 L 37 30 L 35 30 L 35 28 L 33 28 L 33 26 L 35 26 L 35 24 L 33 24 L 33 22 L 35 22 Z M 37 24 L 37 26 L 39 26 L 39 24 Z"></path></svg>],
        ["LUA", 90, <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="64px" height="64px" viewBox="0 0 50 50">
        <path d="M 41.5 2 A 5.5 5.5 0 0 0 41.5 13 A 5.5 5.5 0 0 0 41.5 2 z M 24.1875 2.0136719 C 23.7425 2.0306719 23.295703 2.0595625 22.845703 2.1015625
        C 21.557703 2.2225625 20.274203 2.4512031 19.033203 2.7832031 L 19.548828 4.7167969 C 20.682828 4.4137969 21.85425
        4.2027969 23.03125 4.0917969 C 23.44325 4.0537969 23.854719 4.0267187 24.261719 4.0117188 L 24.1875 2.0136719 z M 
        29.388672 2.4160156 L 29.007812 4.3808594 C 30.568813 4.6828594 32.096828 5.1654531 33.548828 5.8144531 L 34.365234
        3.9882812 C 32.773234 3.2772812 31.098672 2.7480156 29.388672 2.4160156 z M 14.179688 4.6972656 C 12.645687 5.5152656
            11.202672 6.5122031 9.8886719 7.6582031 L 11.203125 9.1640625 C 12.402125 8.1170625 13.722094 7.2088906 15.121094 6.4628906 L 14.179688 4.6972656 z M 25 8 C 15.626 8 8 15.626 8 25 C 8 34.374 15.626 42 25 42 C 34.374 42 42 34.374 42 25 C 42 15.626 34.374 8 25 8 z M 6.3730469 11.507812 C 5.3500469 12.920812 4.4865938 14.447828 3.8085938 16.048828 L 5.6503906 16.828125 C 6.2693906 15.366125 7.0581875 13.971641 7.9921875 12.681641 L 6.3730469 11.507812 z M 30 14 C 32.761 14 35 16.239 35 19 C 35 21.761 32.761 24 30 24 C 27.239 24 25 21.761 25 19 C 25 16.239 27.239 14 30 14 z M 45.511719 14.578125 L 43.728516 15.484375 C 44.449516 16.901375 45.005719 18.402313 45.386719 19.945312 L 47.328125 19.46875 C 46.911125 17.77775 46.300719 16.131125 45.511719 14.578125 z M 2.3359375 21.054688 C 2.1119375 22.343687 1.9980469 23.662609 1.9980469 24.974609 C 1.9980469 25.400609 2.0092031 25.828766 2.0332031 26.259766 L 4.03125 26.148438 C 4.00925 25.755437 3.9980469 25.363609 3.9980469 24.974609 C 3.9980469 23.776609 4.1026406 22.572484 4.3066406 21.396484 L 2.3359375 21.054688 z M 47.898438 22.84375 L 45.908203 23.03125 C 45.971203 23.69125 46.003906 24.362391 
            46.003906 25.025391 C 46.003906 25.947391 45.941313 26.878922 45.820312 27.794922 L 47.802734 28.058594 C 47.935734 27.056594 48.002906 26.035391 48.003906 25.025391 C 48.003906 24.300391 47.966437 23.56575 47.898438 22.84375 z M 14 24 L 16 24 L 16 32 L 20 32 L 20 34 L 14 34 L 14 24 z M 32.822266 25.285156 C 34.752266 25.285156 36 26.541375 36 28.484375 L 36 34 L 34 34 L 34 33.833984 C 33.182 34.116984 32.357703 34.207031 31.970703 34.207031 C 30.613703 34.207031 29.207031 33.242 29.207031 31.625 C 29.207031 29.641 31.216922 29.089609 32.544922 28.724609 C 33.071922 28.579609 33.697844 28.400031 33.964844 28.207031 C 33.884844 27.580031 33.542266 27.285156 32.822266 27.285156 C 32.410266 27.285156 31.560547 27.453656 31.560547 27.972656 L 29.560547 27.972656 C 29.560547 26.208656 31.201266 25.285156 32.822266 25.285156 z M 21 26 L 23 26 L 23 31.492188 C 23 31.990188 23.404344 32.394531 23.902344 32.394531 L 24.152344 32.394531 C 25.171344 32.394531 26 31.566828 26 30.548828 L 26 26 L 28 26 L 28 30.548828 L 28 34 L 26 34 L 26 33.902344 C 25.449 34.207344 24.825344 34.394531 24.152344 34.394531 L 23.902344 34.394531 C 22.301344 34.394531 21 33.092188 21 31.492188 L 21 26 z M 34 30.371094 C 33.696 30.473094 33.386219 30.565391 33.074219 30.650391 C 31.810219 30.999391 31.207031 31.233 31.207031 31.625 C 31.207031 32.192 31.962703 32.207031 31.970703 32.207031 C 32.614703 32.207031 33.584 31.946766 34 31.634766 L 34 30.371094 z M 4.8261719 30.847656
            L 2.9042969 31.400391 C 3.3862969 33.072391 4.0621094 34.693844 4.9121094 36.214844 L 6.6582031 35.240234 C 5.8822031 33.851234 5.2661719 32.373656 4.8261719 30.847656 z M 44.65625 32.412109 C 44.09425 33.898109 43.360563 35.323484 42.476562 36.646484 L 44.140625 37.757812 C 45.107625 36.307813 45.911344 34.746141 46.527344 33.119141 L 44.65625 32.412109 z M 9.4355469 39.103516 L 7.9550781 40.447266 C 9.1250781 41.736266 10.444047 42.892719 11.873047 43.886719 L 13.015625 42.246094 C 11.709625 41.336094 10.504547 40.280516 9.4355469 39.103516 z M 39.402344 40.283203 C 38.243344 41.376203 36.96275 42.337672 35.59375 43.138672 L 36.603516 44.865234 C 38.103516 43.988234 39.506391 42.936281 40.775391 41.738281 L 39.402344 40.283203 z M 17.207031 44.505859 L 16.464844 46.361328 C 18.082844 47.010328 19.774094 47.472328 21.496094 47.736328 L 21.800781 45.761719 C 20.229781 45.520719 18.684031 45.097859 17.207031 44.505859 z M 31.238281 45.056641 C 29.859281 45.483641 28.420844 45.770203 26.964844 45.908203 L 26.550781 45.943359 L 26.714844 47.9375 L 27.154297 47.898438 C 28.746297 47.747437 30.319078 47.434797 31.830078 46.966797 L 31.238281 45.056641 z"></path>
        </svg>],
        ["SQL", 80, <svg xmlns="http://www.w3.org/2000/svg" height="64px" viewBox="0 0 448 512"><path d="M448 80v48c0 44.2-100.3 80-224 80S0 172.2 0 128V80C0 35.8 100.3 0 224 0S448 35.8 448 80zM393.2 214.7c20.8-7.4 39.9-16.9 54.8-28.6V288c0 44.2-100.3 80-224 80S0 332.2 0 288V186.1c14.9 11.8 34 21.2 54.8 28.6C99.7 230.7 159.5 240 224 240s124.3-9.3 169.2-25.3zM0 346.1c14.9 11.8 34 21.2 54.8 28.6C99.7 390.7 159.5 400 224 400s124.3-9.3 169.2-25.3c20.8-7.4 39.9-16.9 54.8-28.6V432c0 44.2-100.3 80-224 80S0 476.2 0 432V346.1z"/></svg>],
    ]



export default skillArray